# MQTT 简易客户端
<script setup>
import { defineClientComponent } from 'vitepress'

const MqttClient = defineClientComponent(() => {
  return import('./MqttClient.vue')
})
</script>

<MqttClient />
