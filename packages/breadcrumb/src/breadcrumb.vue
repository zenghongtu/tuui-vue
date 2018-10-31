/**
* Created by zenghongtu on 31/10/2018.
* Desc: breadcrumb
*/

<template>
  <nav class="breadcrumb"
       :class="[
        align?'is-'+align:'',
        size?'is-'+size:'',
        separator?`has-${separator}-separator`:'',
       ]" aria-label="breadcrumbs">
    <ul>
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TuBreadcrumb',
  props: {
    align: String,
    size: String,
    separator: String,
  },
};
</script>

