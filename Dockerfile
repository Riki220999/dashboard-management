FROM docker-ptpla-pruforce.pruregistry.intranet.asia:8443/nginx:1.19.5-alpine
#FROM nginx:1.19.5-alpine

ENV http_proxy=http://10.163.39.77:8080
ENV https_proxy=http://10.163.39.77:8080

RUN mkdir -p /usr/src/app


#RUN add vim

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh vim jq curl


#RUN apk add --no-cache jq
#RUN rm -rf /etc/nginx/conf.d
#COPY conf /etc/nginx
ENV http_proxy=
ENV https_proxy=
COPY default.conf /etc/nginx/conf.d/
COPY ./build /usr/share/nginx/html
COPY docker-entrypoint.sh generate_config_js.sh /
RUN chmod +x docker-entrypoint.sh generate_config_js.sh
 
ENTRYPOINT ["/docker-entrypoint.sh"]
