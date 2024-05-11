---
navbar: true
footer: false
editLink: false
lastUpdated: false
sidebar: false
outline: false
---

<script setup>
  import {ref} from 'vue'
  import { theme,message} from 'ant-design-vue';
  import {useData} from 'vitepress'
  import {getUrl} from '/utils'
  const a = ref(true)
  const formState = ref({code: ''})
  const content = ref('')
  const handleSubmit = ()=>{
    fetch(getUrl('/auth/validate-code?code=')+ formState.value.code).then(res=>res.json()).then(res=>{
      console.log(res.data)
      if(res.data.flag) {
        message.success('验证成功');
        a.value = false
        content.value = res.data.content
      } else {
        message.error('验证失败');
      }
    })
  }
  const {isDark} = useData() 
</script>

<ClientOnly>
<div v-if="a">
  <a-config-provider
    :theme="{
      algorithm:isDark ? theme.darkAlgorithm: theme.defaultAlgorithm,
    }"
  >
    <a-space size="middle" direction="vertical" >
      <a-alert message="个人介绍涉及隐私，请联系博主取邀请码，多谢 	😁" type="info" />
      <a-form :model="formState" >
        <a-form-item label="邀请码">
          <a-input v-model:value="formState.code" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24 }" style="text-align:right">
          <a-button type="primary" size="small" @click="handleSubmit">验证</a-button>
        </a-form-item>
      </a-form>
    </a-space>
  </a-config-provider>
</div>
<div v-else v-html="content">
</div>

</ClientOnly>
