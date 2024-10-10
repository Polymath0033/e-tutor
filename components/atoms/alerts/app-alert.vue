<script setup lang="ts">
import infoLabel from "~/components/icons/info-label.vue";
import errorLabel from "~/components/icons/error-label.vue";
import successLabel from "~/components/icons/success-label.vue";
import warningLabel from "~/components/icons/warning-label.vue";
defineProps<{
  type: "success" | "warning" | "info" | "error";
  value: string;
  label?: string;
}>();
defineEmits<{ (e: "close"): void }>();
</script>
<template>
  <div
    :class="[
      'flex p-2 pl-6 justify-between items-center gap-[50px] font-dm border shadow-[0px_4px_16px_0px_rgba(29,_32,_38,_0.12)]',
      type === 'info'
        ? 'border-gray-200 bg-gray-50 text-gray-900'
        : type === 'success'
        ? 'border-success-300 bg-success-100 text-success-700'
        : type === 'warning'
        ? 'border-warning-300 bg-warning-100 text-warning-800'
        : type === 'error'
        ? 'border-error-300 bg-error-100 text-error-700'
        : '',
    ]"
  >
    <div class="flex gap-3">
      <span>
        <info-label v-if="type === 'info'" />
        <error-label v-if="type === 'error'" />
        <success-label v-if="type === 'success'" />
        <warning-label v-if="type === 'warning'" />
      </span>
      <p class="text-base !leading-[150%] -tracking-[0.01em] font-dm">
        {{ value }}
      </p>
    </div>
    <div class="flex gap-2 items-center">
      <span class="px-6 flex gap-3 items-center text-button-m">{{
        label
      }}</span>
      <button type="button" class="p-3 flex gap-4 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M18.75 5.25L5.25 18.75"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.75 18.75L5.25 5.25"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
