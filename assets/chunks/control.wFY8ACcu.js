import{m as b}from"./mqtt.esm.NaeEf8Ew.js";import{a as v}from"./utils.VTZxRdCg.js";import{d as x,h as i,A as k,D as l,o as y,c as q,k as I,a as r,I as s,w as c,t as N,F as B}from"./framework.FXFKkhX9.js";const E=x({__name:"control",setup(C){console.log("edgex");const p="emqx_vue3_"+Math.random().toString(16).substring(2,8),{username:m,password:_}=v(),t=b.connect("wss://seab0915.ala.cn-hangzhou.emqxsl.cn:8084/mqtt",{clientId:p,username:m,password:_});t.on("connect",()=>{t.subscribe("esp8266/will",e=>{e&&console.log(e)}),t.subscribe("led/status",e=>{e&&console.log(e)})}),t.on("message",(e,a)=>{const o=a.toString();switch(console.log(e,o),e){case"esp8266/will":n.value=o=="online";break;case"led/status":u.value=JSON.parse(o).status}});const u=i(!1),n=i(!1),g=e=>{t.publish("led/ctl",e?"open":"close")};return k(()=>{console.log("取消订阅"),t.end()}),(e,a)=>{const o=l("a-typography-text"),d=l("a-col"),f=l("a-switch"),h=l("a-row");return y(),q(B,null,[I("div",null,[r(" 设备状态： "),s(o,{type:n.value?"success":"danger"},{default:c(()=>[r(N(n.value?"在线":"离线"),1)]),_:1},8,["type"])]),s(h,{gutter:16},{default:c(()=>[s(d,null,{default:c(()=>[r(" LED ")]),_:1}),s(d,null,{default:c(()=>[s(f,{checked:u.value,"onUpdate:checked":a[0]||(a[0]=w=>u.value=w),onClick:g,disabled:!n.value},null,8,["checked","disabled"])]),_:1})]),_:1})],64)}}});export{E as default};
