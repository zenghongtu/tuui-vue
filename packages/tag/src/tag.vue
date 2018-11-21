/**
* Created by zenghongtu on 21/11/2018.
* Desc: main.vue
*/

<template>
  <transition name="fade"
              style="animation-duration: .5s">
  <span class="tag"
        :class="[color?'is-'+color:'',
  size?'is-'+size:'',
  {'is-rounded':round}]"
  v-if="visible">
  <slot></slot>
    <button v-if="closable" @click="handleClose" class="delete"
    :class="[deleteBtnSize?'is-'+deleteBtnSize:'']"></button>
  </span>
  </transition>
</template>
<script>
export default {
  name: 'TuTag',
  data() {
    return {
      visible: true,
    };
  },
  props: {
    color: String,
    size: String,
    deleteBtnSize: String,
    closable: Boolean,
    round: Boolean,
  },
  methods: {
    handleClose(event) {
      event.stopPropagation();
      this.visible = false;
      this.$emit('close', event);
    },
  },
};
</script>

