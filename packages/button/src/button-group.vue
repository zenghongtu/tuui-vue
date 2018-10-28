/**
* Created by zenghongtu on 28/10/2018
* Desc: button-group
*/

<template>
    <div class="field"
         :class="[addon?'has-addons':'is-grouped']">
        <p class="control">
            <slot></slot>
        </p>
    </div>
</template>
<script>
export default {
  name: 'TuButtonGroup',
  props: {
    addon: Boolean,
  },
};
</script>
