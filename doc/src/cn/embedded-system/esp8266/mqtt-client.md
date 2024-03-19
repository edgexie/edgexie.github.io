# MQTT 简易客户端
<script setup>
import { defineClientComponent } from 'vitepress'

const MqttClient = defineClientComponent(() => {
  return import('./MqttClient.vue')
})
</script>

## ESP8266 内置灯控制

<MqttClient />
