<template>
<button type="button" :class="cssClass" class="btn">
  <i v-if="isCalendar" class="bi bi-calendar-week me-2"></i>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "ButtonBootstrap",
  props: {
    cssClass: {
      type: String,
      required: true
    },
    isCalendar: {
      type: Boolean,
      default: false,
    }
  }
}
</script>