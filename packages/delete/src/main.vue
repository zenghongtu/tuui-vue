/**
* Created by zenghongtu on 30/10/2018.
* Desc: main
*/

<template>
  <button class="delete"
     :class="[size?'is-'+size:'']"></button>
</template>

<script>
export default {
  name: 'TuDelete',
  props: {
    size: String,
  },
};
</script>
