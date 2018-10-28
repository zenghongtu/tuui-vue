/**
* Created by zenghongtu on 28/10/2018
* Desc: button-list
*/

<template>
    <div class="buttons"
         :class="[addon?'has-addons':'is-grouped',
         align?'is-'+align:'',
         {
         'is-selected':selected,
         }]">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TuButtonList',
  props: {
    addon: Boolean,
    align: String,
    selected: Boolean,
  },
};
</script>

<style scoped>

</style>
