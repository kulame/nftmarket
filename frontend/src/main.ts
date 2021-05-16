import { createApp } from 'vue'
import App from './App.vue'
import Antd from "ant-design-vue";
import router, {setupRouter} from './router'
import "ant-design-vue/dist/antd.css"



(async() => {
    console.log("start main ts");
    const app = createApp(App);
    app.use(Antd)
    setupRouter(app);
    app.mount('#app');
    console.log("end main ts");
})()
