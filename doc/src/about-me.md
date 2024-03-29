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
  const handleSubmit = ()=>{
    fetch(getUrl('/auth/validate-code?code=')+ formState.value.code).then(res=>res.json()).then(res=>{
      if(res.data) {
        message.success('验证成功');
        a.value = false
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

<div v-else>

# 关于我

起初专注于工业自动化，并主要负责 PLC 和 组态软件 编程。随着时间的推移，逐渐将目光转向了前端开发，成了一名全栈开发。

在 2015 年下半年，我开始了前端实习生的职业生涯。我熟练掌握了 jQuery 和 AngularJS，并学习了 PHP，对 MVC 模式有了深入的理解，同时也开始接触了 ThinkPHP 框架。

随后的职业生涯中，我涉足了煤炭行业，以及大数据环保公司，其中，我主要使用 Vue、Angular 以及 React 等技术栈。在煤炭行业，我参与了煤炭监管系统、电力监控系统等项目的开发，专注于 GIS 和可视化图表的实现。在大数据环保公司，我带领团队开发了车联网生态系统以及太原环保大数据系统，同时也涉足了小程序开发，与移动端进行协同开发。

在开发效率上，使用版本管理工具和持续集成 CI-CD 手段，并开发了一些团队共用组件库，借助工具约束了团队的代码规范和提交规范。

自 2020 年起，我转入了军工行业，专注于技术型产品的开发。我带领团队，在用户使用交互方面提供专业建议，并确保作战指控系统具有良好的交互体验和合理的数据流转。

在我的职业生涯中，我不断拓展技术栈，积累了丰富的开发经验，善于团队合作，以专业的态度为项目的成功贡献力量。

## 工作经验

| 时间              | 公司                     | 职位                                     |
| ----------------- | ------------------------ | ---------------------------------------- |
| 2020/04 - 今      | 上海广琛信息科技有限公司 | 前端开发工程师(军工领域 `GIS` 方向)      |
| 2018/09 - 2020/04 | 罗克佳华科技股份有限公司 | 前端开发工程师(`vue + es6` `react + ts`) |
| 2017/02 - 2018/05 | 山西阳光三极科技有限公司 | 前端开发工程师(`angular` 技术栈)         |
| 2016/03 - 2016/11 | 太原易讯科技有限公司     | PHP 开发工程师(`ThinkPHP`)               |
| 2011/10 - 2015/09 | 山西中泰科技工程有限公司 | PLC 开发工程师(西门子)                   |

## 我的技术栈

### 前端

- 熟悉`html+css+js`，`typescript`，`es6`。
- 各种前端 ui 框架，熟悉`flex`布局。
- 熟悉`jquery`传统 js 框架，`vue、react、angularjs、angular4`现代前端框架。
- 熟悉`http`协议，对高并发下`缓存为王`有一定了解。
- 熟悉`nodejs`，主要应用场景为做数据中间件。 熟悉 node 模块：socketio(websocket), serialport(串口模块)等。
- 熟悉`ionic`，开发`web-app`。
- 熟悉`微信小程序`
- 熟悉`webpack`前端自动化构建工具。

### 数据可视化：

- 百度：`echarts, map`
- 高德: `map`
- 熟悉 canvas API ，在地图图层渲染中使用过 canvas 图层对海量点自定义渲染
- 阿里系 `antv`
- `echarts`底层库`zrender`
- `leaflet` 一个开源的`map`库
- `3js、d3`（简单使用）
- `mapbox`

### linux 服务器：

- 熟悉一些 linux 基本指令和脚本。
- 了解 docker，能编写简单的`DockerFile`。
- 在 linux 搭建 lamp 环境，lnmp 环境。

### web 服务器：

- `nginx, apache`。
- `nodejs express`。

### 协同

- git， 熟悉`github flow`协同模式。
- 对 `devops` 协作流程有一定了解。

## 想做的事

### 团队

- 建立技术文档，沉淀技术心得，打造乐于分享的技术氛围
- 推动前端招聘标准流程建设
- 推动前端技术考核标准建设
- 规范前后端交互流程
- 规范开发流程

### 技术

- 推动`typescript`在项目中的运用
- 封装业务组件库
- 开发前端基架
- 推动微前端技术
- 推动运维团队的建设
- 推动项目产品化
- 为开源社区贡献内容

## 项目经验

### 智慧环保

项目使用 `react + typescript + mapbox + 公司自研组件`构建。
![项目实拍](https://bucket.edgexie.top/for-work/sentry.jpg){data-zoomable}

### 生态环境物联网平台

项目使用 `vue + axios + elementUI + 高德地图 + G2` 构建。

在渲染海量点时，原`marker`标注方案在 150 个点时，页面拖动能明显感觉到卡。为提高地图渲染性能，引入了自定义`canvas layer`，在标注点数为 2000 时表现依然良好。

与后台配合开发权限系统，可添加采集设备，创建用户。应用在全国清徐、郑州新区、亳州、威海、通州等多个地市。

- 项目大量使用`canvas`和`地图`相关知识，封装了一些常用的业务组件。
  ![项目实拍](https://bucket.edgexie.top/for-work/rk-che.jpg){data-zoomable}

### 保单管理系统

项目使用若依进行二次开发，系统分为后台管理和 H5 页。并对接微信相关接口，获取用户在微信的唯一身份。在保单到期前通过微信通知用户。
使用户了解保单更方便，更及时。

![项目实拍](https://bucket.edgexie.top/for-work/warranty.png){data-zoomable}

### 中山智慧环保数据大屏

![项目实拍](https://bucket.edgexie.top/for-work/zhong-shan-onemap-v1.0.0.jpg){data-zoomable}
![项目实拍](https://bucket.edgexie.top/for-work/zhongshan.jpg){data-zoomable}

### 煤炭安全监管平台大屏

- 项目使用`4X2` 1080P 拼接屏，实时展示煤矿`安全 人员 产量` 的状态与报警。
- 使用`flex`布局，字体大小自适应，`GIS` 使用 百度地图，`echarts`可视化展示数据，`websocket`。

![项目实拍](https://bucket.edgexie.top/for-work/jumbotron-real.jpg){data-zoomable}

### 某大型煤厂电力需求侧

- 对厂内某车间用电量、用电效率、用电状态、用电分析的全方位实时可视化监控。前端项目使用`angular 4`进行构建。

![img](https://bucket.edgexie.top/for-work/power-2.png){data-zoomable}

</div>
</ClientOnly>
