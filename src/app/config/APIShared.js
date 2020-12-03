export const DEV = 'http://localhost:5000/auth'
export const SIT = 'https://pruforce-uat.prudential.co.id';
//export const PROD = 'https://pruforce-uat.prudential.co.id/service-nonface2face';
export const PROD = 'https://pruforce.prudential.co.id';
export const PROXY = '/proxy';
export const API_LOGIN = '/auth/api/login';
export const API_VALIDATE = '/api/validate';
export const SERVICE_NAME = '/service-nonface2face';

export const SERVICE_DOMAIN_NAME = 'http://prudential.co.id/';

export const xxx = 'admin';
export const yyy = 'admin';
export const zzz = 'user';
//export const PROD = 'https://pruforce.prudential.co.id';
//need to switch by npm start
//var env = process.env.NODE_ENV || 'prod'
console.log(process.env.NODE_ENV);
//console.log("using " +(env === 'development'? DEV : PROD) +" as path");
export const PATH = SIT;
export const SITEKEY = (process.env.NODE_ENV === 'development') ? "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI":"6LeKGPAUAAAAADgSFpAhw9Xk7TJIqqoN_uGF2OHx";