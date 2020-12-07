import axios from "axios";
import localStorageService from "./localStorageService";
import {HTTP_SERVICE} from "./HTTPService";

class JwtAuthService {

  // Dummy user object just for the demo
  user = {
    userId: "1",
    role: 'ADMIN',
    displayName: "Garry Alfanzo",
    email: "jasonalexander@gmail.com",
    photoURL: "/assets/images/face-2.jpg",
    age: 25,
    token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh"
  }

  // You need to send http request with pruforceID and passsword to your server in this method
  // Your server will return user object & a Token
  // User should have role property
  // You can define roles in app/auth/authRoles.js
  loginWithEmailAndPassword = (pruforceID, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setSession(null);
        const bodyRequest = {
          "username":pruforceID,
          "password":password,
          "channel":"agen"
        }

        HTTP_SERVICE.login(bodyRequest).then(loginResult => {
          if(loginResult){
          
            loginResult.data.agentData.photoURL = "/assets/images/face-2.jpg";
          resolve(loginResult.data);
          }
          else{
            reject("error");
          }

        },function(error){
          const errorLog = {};
          errorLog.error = error;
          reject(errorLog);
        })
      }, 1000);
    }).then(data => {
      // Login successful
      // Save token
      this.setSession(data.token);
      // Set user
      this.setUser(data.agentData);
      // Set role
      this.setRole(data.role);
      return data;
      
    },function(error){
      throw error;
    });
  };

  // You need to send http requst with existing token to your server to check token is valid
  // This method is being used when user logged in & app is reloaded
  loginWithToken = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user);
      }, 100);
    }).then(data => {
      // Token is valid
      this.setSession(data.token);
      this.setUser(data);
      return data;
    });
  };

  logout = () => {
    this.setSession(null);
    this.removeUser();
    this.removeRole();
  }

  // Set token to all http request header, so you don't need to attach everytime
  setSession = token => {
    if (token) {
      localStorage.setItem("jwt_token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      localStorage.removeItem("jwt_token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  //need to place to more secure place

  // Save user to localstorage
  setUser = (user) => {    
    localStorageService.setItem("auth_user", user);
  }
  // Remove user from localstorage
  removeUser = () => {
    localStorage.removeItem("auth_user");
  }

  // Save role to localstorage
  setRole = (role) => {    
    localStorageService.setItem("role", role);
  }
  // Remove user from localstorage
  removeRole = () => {
    localStorage.removeItem("role");
  }
}

export default new JwtAuthService();
