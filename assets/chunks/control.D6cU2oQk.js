import{m as v}from"./mqtt.esm.DWiH5-9w.js";import{b2 as E}from"./theme.NQjD_CgT.js";import{d as x,f as _,b as w,a5 as l,M as S,N as k,Z as y,P as d,k as s,S as c,Q as T,F as I}from"./framework.wLg4U0bT.js";var L={VITE_URL:"https://mx-codecraft.edgexie.top",VITE_ESP8266_URL:"http://edgexie.myddns.me:8001",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const M=x({__name:"control",setup(N){console.log(L.VITE_MQTT_USERNAME);const i="emqx_vue3_"+Math.random().toString(16).substring(2,8),{username:p,password:m}=E(),t=v.connect("wss://seab0915.ala.cn-hangzhou.emqxsl.cn:8084/mqtt",{clientId:i,username:p,password:m});t.on("connect",()=>{t.subscribe("esp8266/will",e=>{e&&console.log(e)}),t.subscribe("led/status",e=>{e&&console.log(e)})}),t.on("message",(e,n)=>{const o=n.toString();switch(console.log(e,o),e){case"esp8266/will":a.value=o=="online";break;case"led/status":r.value=JSON.parse(o).status}});const r=_(!1),a=_(!1),f=e=>{t.publish("led/ctl",e?"open":"close")};return w(()=>{console.log("取消订阅"),t.end()}),(e,n)=>{const o=l("a-typography-text"),u=l("a-col"),g=l("a-switch"),h=l("a-row");return S(),k(I,null,[y("div",null,[d(" 设备状态： "),s(o,{type:a.value?"success":"danger"},{default:c(()=>[d(T(a.value?"在线":"离线"),1)]),_:1},8,["type"])]),s(h,{gutter:16},{default:c(()=>[s(u,null,{default:c(()=>[d(" LED ")]),_:1}),s(u,null,{default:c(()=>[s(g,{checked:r.value,"onUpdate:checked":n[0]||(n[0]=b=>r.value=b),onClick:f,disabled:!a.value},null,8,["checked","disabled"])]),_:1})]),_:1})],64)}}});export{M as default};