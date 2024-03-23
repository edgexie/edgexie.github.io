import{m as j}from"./mqtt.esm.NaeEf8Ew.js";import{d as z,aa as A,h as _,D as m,o as y,c as I,I as e,w as l,m as g,t as T,a as q,b as B,e as D,F as M,E as N,k}from"./framework.FXFKkhX9.js";const G={class:"mqtt-demo"},J=k("h1",null,"设置",-1),K=k("h1",null,"订阅",-1),Q=k("h1",null,"发布",-1),W=k("h1",null,"接收",-1),ee=z({__name:"MqttClient",setup(X){const $=[0,1,2],d=A({protocol:"wss",host:"broker.emqx.io",port:8083,clientId:"emqx_vue3_"+Math.random().toString(16).substring(2,8),username:"emqx_test",password:"emqx_test",clean:!0,connectTimeout:30*1e3,reconnectPeriod:4e3}),v=_({topic:"topic/mqttx",qos:0}),b=_({topic:"topic/browser",qos:0,payload:'{ "msg": "Hello, I am browser." }'});let a=_({connected:!1});const w=_(""),f=_(!1),s=_(""),U=_(0),S=()=>{a.value={connected:!1},U.value=0,s.value="",f.value=!1},L=()=>{if(U.value+=1,U.value>5)try{a.value.end(),S(),console.log("connection maxReconnectTimes limit, stop retry")}catch(u){console.log("handleOnReConnect catch error:",u)}},P=()=>{try{s.value="connect";const{protocol:u,host:o,port:c,...p}=d,r=`${u}://${o}:${c}/mqtt`;a.value=j.connect(r,p),a.value.on&&(a.value.on("connect",()=>{s.value="",console.log("connection successful")}),a.value.on("reconnect",L),a.value.on("error",n=>{console.log("connection error:",n)}),a.value.on("message",(n,i)=>{w.value=w.value.concat(i.toString()),console.log(`received message: ${i} from topic: ${n}`)}))}catch(u){s.value="",console.log("mqtt.connect error:",u)}},R=()=>{s.value="subscribe";const{topic:u,qos:o}=v.value;a.value.subscribe(u,{qos:o},(c,p)=>{if(s.value="",c){console.log("subscribe error:",c);return}f.value=!0,console.log("subscribe successfully:",p)})},E=()=>{s.value="unsubscribe";const{topic:u,qos:o}=v.value;a.value.unsubscribe(u,{qos:o},c=>{if(s.value="",f.value=!1,c){console.log("unsubscribe error:",c);return}console.log(`unsubscribed topic: ${u}`)})},F=()=>{s.value="publish";const{topic:u,qos:o,payload:c}=b.value;a.value.publish(u,c,{qos:o},p=>{if(s.value="",p){console.log("publish error:",p);return}console.log(`published message: ${c}`)})},O=()=>{if(a.value.connected){s.value="disconnect";try{a.value.end(!1,()=>{S(),console.log("disconnected successfully")})}catch(u){s.value="",console.log("disconnect error:",u)}}},H=u=>{d.port=u==="wss"?8084:8083};return(u,o)=>{const c=m("el-option"),p=m("el-select"),r=m("el-form-item"),n=m("el-col"),i=m("el-input"),V=m("el-button"),h=m("el-row"),x=m("el-form"),C=m("el-card");return y(),I("div",G,[e(C,null,{default:l(()=>[J,e(x,{"label-position":"top",model:d},{default:l(()=>[e(h,{gutter:20},{default:l(()=>[e(n,{span:8},{default:l(()=>[e(r,{prop:"protocol",label:"协议"},{default:l(()=>[e(p,{modelValue:d.protocol,"onUpdate:modelValue":o[0]||(o[0]=t=>d.protocol=t),onChange:H},{default:l(()=>[e(c,{label:"ws://",value:"ws"}),e(c,{label:"wss://",value:"wss"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(r,{prop:"host",label:"主机"},{default:l(()=>[e(i,{modelValue:d.host,"onUpdate:modelValue":o[1]||(o[1]=t=>d.host=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(r,{prop:"port",label:"端口"},{default:l(()=>[e(i,{modelValue:d.port,"onUpdate:modelValue":o[2]||(o[2]=t=>d.port=t),modelModifiers:{number:!0},type:"number",placeholder:"8083/8084"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(r,{prop:"clientId",label:"客户端ID"},{default:l(()=>[e(i,{modelValue:d.clientId,"onUpdate:modelValue":o[3]||(o[3]=t=>d.clientId=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(r,{prop:"username",label:"用户名"},{default:l(()=>[e(i,{modelValue:d.username,"onUpdate:modelValue":o[4]||(o[4]=t=>d.username=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(r,{prop:"password",label:"密码"},{default:l(()=>[e(i,{modelValue:d.password,"onUpdate:modelValue":o[5]||(o[5]=t=>d.password=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:24},{default:l(()=>[e(V,{type:"primary",disabled:g(a).connected,onClick:P,loading:s.value==="connect"},{default:l(()=>[q(T(g(a).connected?"已连接":"连接"),1)]),_:1},8,["disabled","loading"]),g(a).connected?(y(),B(V,{key:0,type:"danger",onClick:O,loading:s.value==="disconnect"},{default:l(()=>[q(" 断开连接 ")]),_:1},8,["loading"])):D("",!0)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(C,null,{default:l(()=>[K,e(x,{"label-position":"top",model:v.value},{default:l(()=>[e(h,{gutter:20},{default:l(()=>[e(n,{span:8},{default:l(()=>[e(r,{prop:"topic",label:"主题"},{default:l(()=>[e(i,{modelValue:v.value.topic,"onUpdate:modelValue":o[6]||(o[6]=t=>v.value.topic=t),disabled:f.value},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(n,{span:4},{default:l(()=>[e(r,{prop:"qos",label:"通信质量"},{default:l(()=>[e(p,{modelValue:v.value.qos,"onUpdate:modelValue":o[7]||(o[7]=t=>v.value.qos=t),disabled:f.value},{default:l(()=>[(y(),I(M,null,N($,t=>e(c,{key:t,label:t,value:t},null,8,["label","value"])),64))]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(n,{span:12},{default:l(()=>[e(V,{type:"primary",class:"sub-btn",loading:s.value==="subscribe",disabled:!g(a).connected||f.value,onClick:R},{default:l(()=>[q(T(f.value?"已订阅":"订阅"),1)]),_:1},8,["loading","disabled"]),f.value?(y(),B(V,{key:0,type:"primary",class:"sub-btn",loading:s.value==="unsubscribe",disabled:!g(a).connected,onClick:E},{default:l(()=>[q(" 取消订阅 ")]),_:1},8,["loading","disabled"])):D("",!0)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(C,null,{default:l(()=>[Q,e(x,{"label-position":"top",model:b.value},{default:l(()=>[e(h,{gutter:20},{default:l(()=>[e(n,{span:8},{default:l(()=>[e(r,{prop:"topic",label:"主题"},{default:l(()=>[e(i,{modelValue:b.value.topic,"onUpdate:modelValue":o[8]||(o[8]=t=>b.value.topic=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(r,{prop:"payload",label:"有效载荷"},{default:l(()=>[e(i,{modelValue:b.value.payload,"onUpdate:modelValue":o[9]||(o[9]=t=>b.value.payload=t)},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{span:8},{default:l(()=>[e(r,{prop:"qos",label:"通信质量"},{default:l(()=>[e(p,{modelValue:b.value.qos,"onUpdate:modelValue":o[10]||(o[10]=t=>b.value.qos=t)},{default:l(()=>[(y(),I(M,null,N($,t=>e(c,{key:t,label:t,value:t},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),e(n,{span:24,class:"text-right"},{default:l(()=>[e(V,{type:"primary",loading:s.value==="publish",disabled:!g(a).connected,onClick:F},{default:l(()=>[q(" 发布 ")]),_:1},8,["loading","disabled"])]),_:1})]),_:1}),e(C,null,{default:l(()=>[W,e(n,{span:24},{default:l(()=>[e(i,{type:"textarea",rows:3,modelValue:w.value,"onUpdate:modelValue":o[11]||(o[11]=t=>w.value=t),readonly:""},null,8,["modelValue"])]),_:1})]),_:1})])}}});export{ee as default};