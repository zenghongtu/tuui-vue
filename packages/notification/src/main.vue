/**
* Created by zenghongtu on 29/10/2018.
* Desc: box
*/

<template>
  <div class="notification"
       :class="[color?'is-'+color:'']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TuNotification',
  props: {
    color: String,
  },
};
</script>
