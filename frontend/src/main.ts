import { createApp } from 'vue'

import App from './App.vue'
import router, {setupRouter} from './router'


(async() => {
    console.log("start main ts");
    const app = createApp(App)
    setupRouter(app);
    app.mount('#app');
    console.log("end main ts");
})()
