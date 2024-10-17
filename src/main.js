import { createApp } from 'vue'
import VMdEditor from '@kangc/v-md-editor';
import './reset.css'
import App from './App.vue'

createApp(App).use(VMdEditor).mount('#app')
