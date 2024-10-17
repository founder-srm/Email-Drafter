<template>
  <div class="main">
    <v-md-editor v-model="content" height="40vw" :left-toolbar="customLeftToolbar"
      :right-toolbar="customRightToolbar" />
  </div>
</template>

<script setup>
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import VuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import enUS from '@kangc/v-md-editor/lib/lang/en-US';
import hljs from 'highlight.js';

import { ref, onMounted } from 'vue';

const content = ref('# Hello, Markdown! \n This is a **markdown editor**.');

onMounted(() => {
  const editorElement = document.querySelector('.v-md-editor');
  if (editorElement) {
    console.log('Editor is ready', editorElement);
  }
});

VMdEditor.use(VuepressTheme, {
  Hljs: hljs,
});
VMdEditor.lang.use('en-US', enUS);

const customLeftToolbar = "undo redo clear | h bold italic strikethrough quote | ul ol table hr | link code"
const customRightToolbar = "preview sync-scroll"
</script>

<style scoped>
.main {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 40vw;
  width: 70vw;
}
</style>
