<script setup>
import { defineClientComponent } from 'vitepress'

const Control = defineClientComponent(() => {
  return import('../../../components/control.vue')
})
</script>

## ESP8266 内置灯控制

<Control />
