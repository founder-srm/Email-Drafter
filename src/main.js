import { createApp } from 'vue'
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import './reset.css'
import App from './App.vue'

createApp(App).use(VMdEditor).mount('#app')
