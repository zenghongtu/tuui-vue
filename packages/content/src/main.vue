/**
* Created by zenghongtu on 29/10/2018.
* Desc: content
*/

<template>
  <div class="content"
       :class="[size?'is-'+size:'',]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TuContent',
  props: {
    size: String,
  },
};
</script>
