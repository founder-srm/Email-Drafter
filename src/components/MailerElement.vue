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
    <v-md-editor v-model="content" height="30vw" :left-toolbar="customLeftToolbar"
      :right-toolbar="customRightToolbar" />
    <div class="line" style="width: 100%; background-color: #d1d1d1; height: 1px;"></div>
    <span class="bottom-bar">
      <span class="span-box-1">
        <div class="button-s2">Import Contacts</div>
        <div class="button-s2">Attach Files</div>
      </span>
      <div class="button-s1">Send</div>
    </span>
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

const content = ref('### Mail Client for Founders Club - DEI \n This is where your awesome E-Mail goes. To get started, **simply replace this text with your own!**');

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
.v-md-editor {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  overflow: hidden;
}

.main {
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 30%;
  width: 70vw;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding-top: 0.5rem;
}

.header {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.5rem;
  color: #282828;
}

.logo {
  margin-top: 0.5rem;
  max-height: 6rem;
  margin-right: 0.5rem;
}

.top-bar {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 0.5rem;
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
  color: #424242;
  padding-left: 0.5rem;
  font-weight: 600;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  height: 1.6rem;
  width: 35vw;
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

.bottom-bar {
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
}

.button-s1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0F1425;
  color: #fff;
  font-weight: 500;
  border-radius: 0.2rem;
  height: 2rem;
  padding: 0 2.5rem;
  cursor: pointer;
}

.button-s2 {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0F1425;
  color: #0F1425;
  border-radius: 0.2rem;
  height: 2rem;
  padding: 0 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
}
</style>
