<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { message} from 'ant-design-vue';
  import mqtt from 'mqtt'
  const client = mqtt.connect("wss://broker.emqx.io:8084/mqtt")

  client.on("connect", ()=>{
    client.subscribe('esp8266/will',(err) =>{
      if(err){console.log(err)}
    })
    client.subscribe('led/status',(err) =>{
      if(err){console.log(err)}
    })
  })
  client.on("message", (topic, msg)=>{
    console.log(topic, msg.toString())
    switch(topic) {
      case 'esp8266/will' : {
        status.value  = msg =='online'   
      };break;
      case 'led/status' : {
        LED_BUILTIN.value = JSON.parse(msg).status
      }
    }
  })
  const LED_BUILTIN = ref<boolean>(false)
  const status = ref<boolean>(false)
  const handleLed = async (checked)=>{
    const res = await client.publishAsync('led/ctl', checked?'open':'close')
  }


</script>
<div>
 设备状态： <a-typography-text :type="status?'success':'danger'">{{status?'在线':'离线'}}</a-typography-text>
</div>

## 内置 LED 灯控制

<a-row :gutter="16">
  <a-col>
  LED
  </a-col>
    <a-col>
    <a-switch v-model:checked="LED_BUILTIN" @click="handleLed" :disabled="!status"/>
  </a-col>
</a-row>

<!-- <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { getUrl } from '/utils'
  import axios from 'axios'
  import { message} from 'ant-design-vue';
  const LED_BUILTIN = ref<boolean>(false)
  const ledButtonLoading = ref<boolean>(false)
  // 获取LED 状态
  onMounted(()=>{
    ledButtonLoading.value = true
    axios.get(getUrl('/esp8266/led'))
    .then(res=>{
      LED_BUILTIN.value = !res.data.data.status
    })
    .catch(err=>{
      message.error('获取状态失败，可能设备不在线');
    }).finally(()=>{
        ledButtonLoading.value = false
    })
  })

  const handleLed = (checked)=>{
      ledButtonLoading.value = true
    axios.post(getUrl('/esp8266/led'), {checked})
    .then(res=>{
      message.success(res.data.data)})
    .catch(err=>{
      message.error('操作失败');
      LED_BUILTIN.value = false
    }).finally(()=>{
        ledButtonLoading.value = false
    })
  }

</script>

## 内置 LED 灯控制

<div>
 <a-switch v-model:checked="LED_BUILTIN" @click="handleLed" :loading="ledButtonLoading"/>
</div> -->
