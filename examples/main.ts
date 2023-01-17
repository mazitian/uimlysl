import { createApp } from 'vue'
import App from './app.vue'
// import 'mlysl-ui/es/style.css'
import mlyslui from '../packages/components/index'
const app = createApp(App)
app.use(mlyslui)
app.mount('#app')
