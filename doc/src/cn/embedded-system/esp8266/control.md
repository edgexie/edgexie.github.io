<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { getEspUrl } from '/utils'
  import axios from 'axios'
  import { message} from 'ant-design-vue';
  const LED_BUILTIN = ref<boolean>(false)

  // 获取LED 状态 
  onMounted(()=>{
    axios.get(getEspUrl('/led'))
    .then(res=>{
      LED_BUILTIN.value = !res.data.status
    })
    .catch(err=>{
      message.error('获取状态失败，可能设备不在线');
    })
  })

  const handleLed = (checked)=>{
    axios.post(getEspUrl('/led'), {checked})
    .then(res=>{
      message.success(res.data)})
    .catch(err=>{
      message.error('操作失败');
      LED_BUILTIN.value = false
    })
  }

</script>

## 内置 LED 灯控制

<div>
 <a-switch v-model:checked="LED_BUILTIN" @click="handleLed"/>
</div>
