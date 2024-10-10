<script setup lang="ts">
const props =
withDefaults(
  defineProps<{
  type?: "button" | "submit" | "reset";
  customClass?: string;
  size?: "sm" | "md" | "lg";
  value?: string;
  varieties?:
  | "primary"
  | "primary-secondary"
  | "primary-gray"
  | "secondary-primary"
  | "secondary"
  | "secondary-gray"
  | "tertiary-primary"
  | "tertiary-secondary"
  | "tertiary-gray";
}>(),
  {
    type: "button",
    customClass: "",
    size: "md",
    varieties: "primary",
    value: ""
  }
);

const varietiesClass =
  props.varieties === "primary"
    ? "bg-primary-500 text-white hover:bg-primary-600 hover:shadow-btn-shadow-primary disabled:bg-primary-200"
    : props.varieties === "primary-secondary"
    ? "bg-secondary-500 text-white hover:bg-secondary-600 hover:shadow-btn-shadow-primary-secondary "
    : props.varieties === "primary-gray"
    ? "bg-gray-900 text-white hover:bg-gray-800 hover:shadow-btn-shadow-gray disabled:bg-gray-200"
    : props.varieties === "secondary-primary"
    ? "bg-primary-100 text-primary-500 hover:bg-primary-200 hover:text-primary-600 disabled:bg-primary-100 disabled:text-primary-300"
    : props.varieties === "secondary"
    ? "bg-secondary-100 text-secondary-500 hover:bg-secondary-200 hover:text-secondary-600 disabled:bg-secondary-100 disabled:text-secondary-300"
    : props.varieties === "secondary-gray"
    ? "bg-gray-50 text-gray-900 hover:bg-gray-100 hover:text-gray-800 disabled:bg-gray-50 disabled:text-gray-300"
    : props.varieties === "tertiary-primary"
    ? "bg-transparent text-primary-500 hover:bg-primary-100 hover:text-primary-600 disabled:bg-transparent disabled:text-primary-300"
    : props.varieties === "tertiary-secondary"
    ? "bg-transparent text-secondary-500 hover:bg-secondary-100 hover:text-secondary-600 disabled:bg-transparent disabled:text-secondary-300"
    : props.varieties === "tertiary-gray"
    ? "bg-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 disabled:bg-transparent disabled:text-gray-300"
    : "";
</script>

<template>
  <button
    :type="type"
    :class="[
      'flex justify-center items-center py-0 ',
      props.customClass,
      props.size === 'sm'
        ? 'px-4'
        : props.size === 'md'
        ? 'px-6'
        : props.size === 'lg'
        ? ''
        : 'px-8',
     varietiesClass,
    ]"
  ><span class="text-button-m">{{ value }}</span>
    <slot></slot>
  </button>
</template>

<style scoped></style>
