<template>
  <div class="home">
    <h3>正在开发中...</h3>
    <div v-for="nav in navs" :key="nav.name">
      <!--<p class="side-nav-title">{{nav.name}}</p>-->
      <div class="side-nav-items" v-for="page in nav['groups']" :key="page.name">
        <router-link :class="$route.name===page.name ? 'active' : ''" v-if="page.name"
                     :to="{name: page.name}">
          {{page.description}}
        </router-link>
        <!--<p v-else class="side-nav-group">{{page.description}}</p>-->
      </div>
    </div>
  </div>
</template>

<script>
import navConfig from '../nav.config.json';

export default {
  name: 'home',

  data() {
    return {
      navs: navConfig.documentation,
    };
  },
};
</script>
<style scoped>
  .side-nav-items{
    display: inline-block;
    padding:5px;
    border:1px solid black;
    margin:5px;
  }
</style>
