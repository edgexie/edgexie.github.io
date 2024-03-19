import DefaultTheme from 'vitepress/theme';
import './custom.css';
import 'element-plus/dist/index.css';
import Layout from './Layout.vue';
import AboutMe from './AboutMe.vue';
import { onMounted, watch, nextTick } from 'vue';
import mediumZoom from 'medium-zoom';
import 'leaflet/dist/leaflet.css';
import { useRoute } from 'vitepress';
import {
  Button,
  Card,
  ConfigProvider,
  Form,
  FormItem,
  Input,
  Alert,
  Space,
  Popover,
  Col,
  Row,
  Collapse,
  CollapsePanel,
  Switch,
  Typography,
} from 'ant-design-vue';
import {
  ElButton,
  ElCard,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElRow,
  ElCol,
  ElInput,
} from 'element-plus';
const AArr = [
  Button,
  Card,
  ConfigProvider,
  Form,
  FormItem,
  Input,
  Alert,
  Space,
  Popover,
  Col,
  Row,
  Collapse,
  CollapsePanel,
  Switch,
  Typography,
];
const ElArr = [
  ElButton,
  ElCard,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElRow,
  ElCol,
  ElInput,
];
// import Mx from "@mx/button";
export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  Layout,
  enhanceApp(ctx) {
    const { app } = ctx;

    // register your custom global components

    [...AArr, ...ElArr].forEach((e) => app.use(e));
  },
};
