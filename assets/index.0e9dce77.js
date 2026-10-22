import{a as e}from"./index.fcc0ab7e.js";const a=s=>e.get(`auth/sendSMSCode?phone=${s}`),o=s=>e.post("auth/checkCodeAndGetUsers",s),p=s=>e.post("auth/updatePassword",s);export{o as c,a as s,p as u};
