/**
* Created by zenghongtu on 26/10/2018.
* Desc: button
*/

<template>
    <button
            class="button"
            :class="[
              color ? 'is-' + color : '',
              size ? 'is-' + size : '',
              state ? 'is-' + state : '',
              {
                'is-fullwidth': fullwidth,
                'is-outlined': plain,
                'is-inverted': invert,
                'is-rounded': round,
              }
            ]"
            @click="handleClick"
            :disabled="disabled"
            :autofocus="autofocus"
            :type="nativeType"
    >
         <span v-if="icon" class="icon">
             <i :class="icon"></i>
         </span>
         <span v-if="$slots.default">
            <slot></slot>
         </span>
    </button>
</template>

<script>
export default {
  name: 'TuButton',

  props: {
    color: String,
    size: String,
    fullwidth: Boolean,
    plain: Boolean,
    invert: Boolean,
    round: Boolean,
    state: String,
    disabled: Boolean,
    icon: {
      type: String,
      default: '',
    },
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button',
    },
  },
  methods: {
    handleClick(ev) {
      this.$emit('click', ev);
    },
  },
};
</script>

