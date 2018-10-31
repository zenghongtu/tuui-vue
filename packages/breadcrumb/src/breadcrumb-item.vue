/**
* Created by zenghongtu on 31/10/2018.
* Desc: breadcrumb-item
*/

<template>
  <li :class="{'is-active':!to}">
    <a aria-current="page" @click="handleClick">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'TuBreadcrumbItem',
  props: {
    to: null,
    replace: Boolean,
  },
  methods: {
    handleClick() {
      const { to, $router, replace } = this;
      if (!to || !$router) return;
      if (replace) {
        $router.replace(to);
      } else {
        $router.push(to);
      }
    },
  },
};
</script>

