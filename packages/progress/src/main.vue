/**
* Created by zenghongtu on 30/10/2018.
* Desc: main
*/

<template>
  <progress class="progress"
            :class="[
            color?'is-'+color:'',
            size?'is-'+size:'',]"
            :value="value" :max="max"></progress>
</template>

<script>
export default {
  name: 'TuProgress',
  props: {
    color: String,
    size: String,
    max: {
      type: Number,
      default: 100,
    },
    value: Number,
  },
};
</script>
