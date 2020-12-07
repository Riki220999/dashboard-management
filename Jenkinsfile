library("jenkins-pipeline-library") 
pipeline {
    agent none
    stages {
        stage('Build NPM') {
		    //agent{ node { label 'js' } }
          	  agent {
              kubernetes {
            yaml """
              apiVersion: v1
              kind: Pod
              metadata:
                labels:
                  labelA: whatisthisfor
              spec:
                containers:
                - name: npmwithgitwithpython
                  image: docker-ptpla-pruforce.pruregistry.intranet.asia:8443/pruforce/custom-base-image/npm-custom:latest
                  tty: true
                imagePullSecrets:
                - name: pruregistry 
                  """
                 }
              }  
          	steps {
              container('npmwithgitwithpython') {
              sh '''
              npm -v
			  set +x
              export version=$(grep '"version": "' package.json | head -n 1 | sed -e 's/"version": "//' -e 's/",//' -e 's/^[ \\t]*//')
              echo "======= Build Application ${version} Start ========"
              npm install
              npm run build
              ./postbuild.sh
             echo "======= Build Application ${version} Finished ========"
             ls -lah
               '''
                
             stash includes: 'build/', name: 'app'
              }
          }
        }
             stage("Docker Build & push") {
              agent{ node { label 'dind' } }
                steps {            
                  withCredentials([usernamePassword(credentialsId: '589c605b-f335-495e-a33b-de5af614f773',usernameVariable: 'ARTIUSERNAME', passwordVariable: 'ARTIPASSWORD')]) {
                                        unstash 'app'
                                        script{
                                        sh '''
                                            echo ${ARTIPASSWORD} | docker login -u ${ARTIUSERNAME} --password-stdin docker-ptpla-pruforce.pruregistry.intranet.asia:8443
                                            docker build -t docker-ptpla-pruforce.pruregistry.intranet.asia:8443/pruforce/pruforce-web:${BRANCH_NAME}-${BUILD_NUMBER} .
                                            docker push docker-ptpla-pruforce.pruregistry.intranet.asia:8443/pruforce/pruforce-web:${BRANCH_NAME}-${BUILD_NUMBER}
											docker logout docker-ptpla-pruforce.pruregistry.intranet.asia:8443
                                        '''
                            }
                          }
                        }
                       }
        // stage('Deploy to GKE namespace (UAT)') {
        // when {
        // beforeAgent true
        // branch 'uat'
        // }
        // agent{ node { label 'base' } }
        //  steps {
        //   script {
        //    def vaultAddr = 'https://vault.pru.intranet.asia'
        //    def vaultAppRole = 'pf-microsite-uat'
        //    def vaultConfiguration = [
        //     $class: 'VaultConfiguration',
        //     vaultUrl: "${vaultAddr}",
        //     vaultCredentialId: "${vaultAppRole}"
        //     ]
 
        //    def vaultSecrets = [
        //     [ $class: 'VaultSecret', path: "kv2/pruidlife/nprd/uat/el8fvd/az1/pf-microsite-uat/pf-microsite-uat-deployer", secretValues: [
        //     // set the token as kubeconfig environment variable
        //     [ $class: 'VaultSecretValue', envVar: 'kubeconfig', vaultKey: "kubeconfig" ]
        //     ]]
        //      ]
 
        //     withVault([configuration: vaultConfiguration, vaultSecrets: vaultSecrets]) {
        //     sh '''
        //     set +x
		// 	 echo "${kubeconfig}" > ${WORKSPACE}/kubeconfig
        //      sed -i "s/{BUILD_NUMBER}/$BUILD_NUMBER/g" deployment/gke/deployment.yaml && sed -i "s/{BRANCH_NAME}/$BRANCH_NAME/g" deployment/gke/deployment.yaml
								
        //      echo "---- preparing options ----"
        //      export KC_OPTS=${KC_OPTS}" --kubeconfig=${WORKSPACE}/kubeconfig"
        //      export KC_OPTS=${KC_OPTS}" --insecure-skip-tls-verify=true"

        //      alias kc="kubectl ${KC_OPTS} $*"

        //      echo "---- Applying Manifest ----"
        //      kc apply -f deployment/gke/deployment.yaml
        //      echo "---- manifest applied ----"
             
		// 	 echo "---- checking result ----"
        //       sleep 15
        //      echo " >> Deployments "
        //      kc get deployments

        //      echo " >> Services"
        //      kc get svc

        //      echo " >> Ingress"
        //      kc get ingress

        //      echo " >> Pods"
        //      kc get pods

        //      echo "---- DONE -----"
        //     '''
        //     }
        //    }
        //  }
		// }
    }
    post {
      always{
       emailext(body: '${DEFAULT_CONTENT}', mimeType: 'text/html',
         replyTo: '$DEFAULT_REPLYTO', subject: '${DEFAULT_SUBJECT}',
		 attachLog: true,
         to: 'rahadian.arthapati@prudential.co.id,joshua.ellyson@prudential.co.id,garry.alfanzo@prudential.co.id,faisal.reza@prudential.co.id') 
      }
    }
}
