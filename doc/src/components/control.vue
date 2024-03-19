<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { message } from 'ant-design-vue';
import mqtt from 'mqtt';
import { getMqttAuthInfo } from '/utils';

const clientId = 'emqx_vue3_' + Math.random().toString(16).substring(2, 8);
// [TO DO] how to hide the name and pwd
const { username, password } = getMqttAuthInfo();

const client = mqtt.connect(
  'wss://seab0915.ala.cn-hangzhou.emqxsl.cn:8084/mqtt',
  {
    clientId,
    username,
    password,
  }
);

client.on('connect', () => {
  client.subscribe('esp8266/will', (err) => {
    if (err) {
      console.log(err);
    }
  });
  client.subscribe('led/status', (err) => {
    if (err) {
      console.log(err);
    }
  });
});
client.on('message', (topic, msg) => {
  const msgTrans = msg.toString();
  console.log(topic, msgTrans);
  switch (topic) {
    case 'esp8266/will':
      {
        status.value = msgTrans == 'online';
      }
      break;
    case 'led/status': {
      LED_BUILTIN.value = JSON.parse(msgTrans).status;
    }
  }
});
const LED_BUILTIN = ref<boolean>(false);
const status = ref<boolean>(false);
const handleLed = (checked) => {
  client.publish('led/ctl', checked ? 'open' : 'close');
};

onUnmounted(() => {
  console.log('取消订阅');
  client.end();
});
</script>

<template>
  <div>
    设备状态：
    <a-typography-text :type="status ? 'success' : 'danger'">{{
      status ? '在线' : '离线'
    }}</a-typography-text>
  </div>

  <a-row :gutter="16">
    <a-col> LED </a-col>
    <a-col>
      <a-switch
        v-model:checked="LED_BUILTIN"
        @click="handleLed"
        :disabled="!status"
      />
    </a-col>
  </a-row>
</template>
