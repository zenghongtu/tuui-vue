/**
* Created by zenghongtu on 12/11/2018.
* Desc: main
*/

<template>
  <transition name="fade"
              style="animation-duration: .5s">
    <div class="modal is-active"
         v-if="$slots.default"
         v-show="visible"
    >
      <div class="modal-background"
           v-if="modal"
           @click.prevent="handleBgClick"></div>
      <div class="modal-card"
           :style="{width,top}"
      >
        <header class="modal-card-head">
          <slot name="title">
            <p class="modal-card-title">{{title}}</p>
          </slot>
          <button class="delete" aria-label="close"
                  @click="close"
                  v-show="showClose"></button>
        </header>
        <section class="modal-card-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot" v-if="$slots.default">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TuModal',
  props: {
    title: {
      type: String,
      default: '',
    },
    modal: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: '',
    },
    top: {
      type: String,
      default: '',
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
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
    handleBgClick() {
      if (!this.closeOnClickModal) return;
      this.visible = false;
    },
  },
};
</script>
