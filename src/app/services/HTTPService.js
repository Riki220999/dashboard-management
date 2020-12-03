import Axios from 'axios';
import { PATH,SERVICE_NAME,PROXY,API_LOGIN } from '../config/APIShared';

const timeout = 30000; // timeout in ms

//mirroring from HTTPServiceNew only for post because submission using saga and cannot init 
export const HTTP_SERVICE = {
  
  post(url, request) {
    let token = `Bearer ${localStorage.getItem('token')}`;
    let fastifyToken = `Bearer ${localStorage.getItem('fastify_token')}`;
   return new Promise((resolve,reject) => { 
          request.token = fastifyToken;
          Axios(PATH+PROXY, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Authorization':token,
              'X-Requested-Url':'/flink/zuul'+SERVICE_NAME+url,
            },
            data: JSON.stringify(request),
            timeout,
          }).then((result) => {
            resolve(result);
          },function(error){
            reject(error);
          });
    }) ;
  },

  login(request) {
   return new Promise((resolve,reject) => { 
          Axios(PATH+API_LOGIN, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(request),
            timeout,
          }).then((result) => {
            resolve(result);
          },function(error){
            reject(error);
          });
    }) ;
  }

  // post(url, request) {
  //   let token = `Bearer ${localStorage.getItem('token')}`;
  //   let fastifyToken = `Bearer ${localStorage.getItem('fastify_token')}`;
  //  return new Promise((resolve,reject) => { 
  //         request.token = fastifyToken;
  //         Axios(DEV+url, {
  //           method: 'post',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'Authorization':token,
  //           },
  //           data: JSON.stringify(request),
  //           timeout,
  //         }).then((result) => {
  //           resolve(result);
  //         },function(error){
  //           reject(error);
  //         });
  //   }) ;
  // }
};
