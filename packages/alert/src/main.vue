/**
* Created by zenghongtu on 12/11/2018.
* Desc: main
*/

<template>
  <div class="notification" role="alert"  v-show="visible" :class="[color?'is-'+color:'']">
    <button class="delete" v-show="closable" @click="close()"></button>
    <div class="content">
      <h1 v-if="title || $slots.title">
        <slot name="title">{{ title }}</slot>
      </h1>
      <slot>
        <p v-if="description">{{ description }}</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TuAlert',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    closable: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit('close');
    },
  },
};
</script>
