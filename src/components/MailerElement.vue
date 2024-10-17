<template>
  <div class="main">
    <div class="top-bar">
      <img src="../assets/logo.png" alt="LOGO" class="logo">
      <span class="header">
        <h1 class="title">Compose a new email</h1>
        <span class="span-wrapper-2">
          <span class="span-box-1">
            <h1>To: </h1>
            <input type="text" style="margin-left: 1.8rem;">
          </span>
          <span class="span-box-2">
            <h1 @click="CCToggle = !CCToggle" :class="{ active: CCToggle }">CC</h1>
            <h1 @click="BCCToggle = !BCCToggle" :class="{ active: BCCToggle }">BCC</h1>
          </span>
        </span>
        <span class="span-wrapper-1" v-show="CCToggle">
          <h1>CC: </h1>
          <input type="text" style="margin-left: 1.6rem;">
        </span>
        <span class="span-wrapper-1" v-show="BCCToggle">
          <h1>BCC: </h1>
          <input type="text" style="margin-left: 1rem;">
        </span>
        <span class="span-wrapper-1">
          <h1>Sub: </h1>
          <input type="text" style="margin-left: 1.1rem;">
        </span>
      </span>
    </div>
    <v-md-editor v-model="content" height="29vw" :left-toolbar="customLeftToolbar"
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

import { ref } from 'vue';

const content = ref('# Hello, Markdown! \n This is a **markdown editor**.');

VMdEditor.use(VuepressTheme, {
  Hljs: hljs,
});
VMdEditor.lang.use('en-US', enUS);

const customLeftToolbar = "undo redo clear | h bold italic strikethrough quote | ul ol table hr | link code"
const customRightToolbar = "preview sync-scroll"

let CCToggle = ref(false)
let BCCToggle = ref(false)
</script>

<style scoped>
.main {
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 40vw;
  width: 70vw;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding: 0.5rem;
}

.header {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem;
  color: #282828;
}

.logo {
  max-height: 6rem;
  margin-right: 0.5rem;
}

.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.header {
  width: 100%;
}

.title {
  text-decoration: underline;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.span-wrapper-1 {
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1rem;
  color: rgb(131, 131, 131);
  margin-bottom: 0.6rem;
}

.span-wrapper-1 input,
.span-wrapper-2 input {
  margin-left: 0.5rem;
  border: 1px solid #d5d5d5;
  outline: transparent;
  border-radius: 0.2rem;
  font-size: 1rem;
  height: 1.4rem;
  width: 25rem;
}

.span-box-1,
.span-box-2 {
  display: flex;
}

.span-box-2>h1 {
  text-decoration: underline;
  margin-left: 0.5rem;
  cursor: pointer;
}

.span-wrapper-2 {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: rgb(131, 131, 131);
  margin-bottom: 0.6rem;
}

.active {
  color: #000000
}
</style>
