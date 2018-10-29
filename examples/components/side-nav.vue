/**
* Created by zenghongtu on 26/10/2018.
* Desc: side-nav
*/

<template>
  <div class="side-nav">
    <div v-for="nav in navs" :key="nav.name">
      <p class="side-nav-title">{{nav.name}}</p>
      <div class="side-nav-items" v-for="page in nav['groups']" :key="page.name">
        <router-link :class="$route.name===page.name ? 'active' : ''" v-if="page.name"
                     :to="{name: page.name}">
          {{page.description}}
        </router-link>
        <p v-else class="side-nav-group">{{page.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import navConfig from '../nav.config.json';

export default {
  data() {
    return {
      navs: navConfig.documentation,
    };
  },
};
</script>
<style>
  .side-nav {
    display: inline-block;
    margin: 32px 0;
    padding: 0;
    color: #3F536E;
    background-color: #fff;
    border-right: 1px solid #ECECEC;
    z-index: 99;
  }

  .side-nav .side-nav-title {
    padding: 0 24px 8px;
    color: #8DABC4;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .side-nav .side-nav-items {
    margin: 0 0 32px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
  }

  .side-nav .side-nav-items a {
    display: block;
    position: relative;
    padding: 8px 24px;
    color: #3F536E;
    font-weight: normal;
    line-height: 1.5;
    cursor: pointer;
  }

  .side-nav .side-nav-items .side-nav-group {
    display: block;
    position: relative;
    padding: 6px 0 6px 24px;
    color: #2C405A;
    font-weight: bold;
  }

  .side-nav .side-nav-items .slid-nav-component {
    display: block;
    position: relative;
    padding: 6px 24px 6px 32px;
    color: #616367;
    font-size: 14px;
  }

  .side-nav .side-nav-items .active {
    color: #3FAAF5;
  }

</style>
