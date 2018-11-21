/**
* Created by zenghongtu on 21/11/2018.
* Desc: main.vue
*/

<template>
  <div class="tags"
       :class="{'has-addons':addon}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TuTagList',
  props: {
    addon: Boolean,
  },
};
</script>

