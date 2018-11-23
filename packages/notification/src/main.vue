/**
* Created by zenghongtu on 29/10/2018.
* Desc: box
*/

<template>
  <transition :name="transitions[position]"
              style="animation-duration: .5s">
    <div class="notification"
         :class="[color?'is-'+color:'',position]"
         :style="positionStyle"
         @mouseenter="clearTimer()"
         @mouseleave="startTimer()"
         v-show="visible"
         role="alert"
    >
      <button class="delete"
              v-if="showClose"
              @click.stop="close"
      ></button>
      <h1>
         <span class="icon" v-if="icon">
            <i class="fas" :class="[icon?'fa-'+icon:'']"></i>
         </span>
        {{title}}
      </h1>
      <slot>
        <p v-if="!dangerouslyUseHTMLString">{{ content }}</p>
        <p v-else v-html="content"></p>
      </slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TuNotification',
  data() {
    return {
      visible: false,
      closed: false,
      color: '',
      title: '',
      content: '',
      duration: 4500,
      icon: '',
      position: 'top-right',
      dangerouslyUseHTMLString: false,
      onClose: null,
      showClose: true,
      verticalOffset: 0,
      timer: null,
      transitions: {
        'top-right': 'fadeRight',
        'top-center': 'fadeDown',
        'top-left': 'fadeLeft',
        'bottom-right': 'fadeRight',
        'bottom-center': 'fadeUp',
        'bottom-left': 'fadeLeft',
      },
    };
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('animationend', this.destroyElement);
      }
    },
  },
  methods: {
    destroyElement() {
      this.$el.removeEventListener('animationend', this.destroyElement);
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      this.timer = setTimeout(() => this.visible && this.close(), this.duration);
    },
  },
  computed: {
    verticalProperty() {
      return /^top-/.test(this.position) ? 'top' : 'bottom';
    },
    positionStyle() {
      return {
        [this.verticalProperty]: `${this.verticalOffset}px`,
      };
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>
<style lang="scss" scoped>
  .notification {
    position: fixed;
    z-index: 1024 + 233;
    pointer-events: none;
    &.top-right {
      top: 20px;
      right: 0;
    }
    &.top-center {
      top: 20px;
      left: 50%;
    }
    &.top-left {
      top: 20px;
      left: 0;
    }
    &.bottom-left {
      bottom: 20px;
      left: 0;
    }
    &.bottom-center {
      bottom: 20px;
      left: 50%;
    }
    &.bottom-right {
      right: 0;
      bottom: 20px;
    }
  }
</style>
