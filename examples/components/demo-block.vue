/**
* Created by zenghongtu on 26/10/2018.
* Desc: demo-block
*/

<template>
  <div class="docs-demo-wrapper">
    <div :style="{maxHeight: isExpand ? '700px' : '0'}" class="demo-container">
      <div>
        <div class="docs-demo docs-demo--expand">
          <div class="highlight-wrapper">
            <slot name="highlight"></slot>
          </div>
        </div>
      </div>
    </div>
    <span class="docs-trans docs-demo__triangle" @click="toggle">{{isExpand ? '隐藏代码' : '显示代码'}}</span>
  </div>
</template>

<script>
/* eslint-disable */
  import Vue from 'vue';

  export default {
    data() {
      return {
        isExpand: false
      };
    },
    methods: {
      toggle() {
        this.isExpand = !this.isExpand;
      }
    }
  };
</script>

<style>
  .docs-demo-wrapper{
    margin:20px;
  }

  .demo-container {
    transition: max-height .3s ease;
    overflow: hidden;
  }

  .docs-demo {
    width: 100%;
    min-height: 60px;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #F7F7F7;
    border: 1px solid #e2ecf4;
    border-top: none;
  }

  .docs-demo pre code {
    font-family: Consolas, Menlo, Courier, monospace;
    line-height: 22px;
    border: none;
  }

  .docs-trans {
    width: 100%;
    text-align: center;
    display: inline-block;
    color: #4857d9;
    font-size: 12px;
    padding: 10px 0;
    background-color: #FAFBFC;
  }

  .docs-demo__code,
  .highlight-wrapper,
  .docs-demo__meta {
    padding: 0 20px;
  }

  .docs-demo__code {
    border-bottom: 1px solid #eee;
  }

  .docs-demo.docs-demo--expand .docs-demo__meta {
    border-bottom: 1px dashed #e9e9e9;
  }

  .docs-demo.docs-demo--expand .docs-demo__triangle {
    transform: rotate(180deg);
  }

  .highlight-wrapper {
    display: none;
  }

  .highlight-wrapper p,
  .highlight-wrapper pre {
    margin: 0;
  }

  .highlight-wrapper .hljs {
    padding: 0;
  }

  .docs-demo.docs-demo--expand .highlight-wrapper {
    display: block;
  }

  .docs-demo__code__mobi {
    height: 620px;
    margin: 20px 0;
  }

  .docs-demo__code__mobi__header {
    border-radius: 4px 4px 0 0;
    background: -webkit-linear-gradient(rgba(55, 55, 55, 0.98), #545456);
    background: linear-gradient(rgba(55, 55, 55, 0.98), #545456);
    text-align: center;
    padding: 8px;
  }

  .docs-demo__code__mobi__header img {
    width: 100%;
  }

  .docs-demo__code__mobi__header .url-box {
    height: 28px;
    line-height: 28px;
    color: #fff;
    padding: 0 3px;
    background-color: #a2a2a2;
    margin: 10px auto 0;
    border-radius: 4px;
    white-space: nowrap;
    overflow-x: auto;
  }

  .docs-demo__code__mobi__content iframe {
    width: 100%;
    border: 0;
    height: 548px;
  }

</style>
