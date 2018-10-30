/**
* Created by zenghongtu on 30/10/2018.
* Desc: main
*/

<template>
  <figure class="image"
          :class="[
          size?`is-${size}x${size}`:'',
          ratio?'is-'+ratio:'',
          ]">
    <img :src="url" :class="{'is-rounded':rounded}">
  </figure>
</template>

<script>
export default {
  name: 'TuImage',
  props: {
    color: String,
    size: Number,
    url: String,
    rounded: Boolean,
    ratio: String,
  },
};
</script>
