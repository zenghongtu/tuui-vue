/**
* Created by zenghongtu on 26/10/2018.
* Desc: header
*/

<template>
  <header class="page-header">
    <div class="header-container">
      <a href="/">
      <img src="../assets/logo.png" width="80">
       <span style="font-size: 30px;color:#14c2c3;margin-left:-30px;"> Tuui</span>
      </a>
      <!--<p>组件</p>-->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
  .page-header {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
    opacity: 0.98;
    position: relative !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    transition: all .3s;
    z-index: 100;
  }

  .page-header .header-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
  }

</style>
