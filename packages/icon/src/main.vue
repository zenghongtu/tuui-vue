/**
* Created by zenghongtu on 30/10/2018.
* Desc: main
*/

<template>
  <span class="icon"
        :class="[
          color?'has-text-'+color:'',
          size?'is-'+size:'',
        ]">
  <i class="fas"
     :class="[
       icon?'fa-'+icon:'',
       iconSize?'fa-'+iconSize:'',
       {
       'fa-fw':fixed,
       'fa-border':bordered,
       'fa-pulse':animated,
       }
     ]"
  ></i>
  </span>
</template>

<script>
export default {
  name: 'TuIcon',
  props: {
    icon: String,
    color: String,
    size: String,
    iconSize: String,
    fixed: Boolean,
    bordered: Boolean,
    animated: Boolean,
  },
};
</script>
