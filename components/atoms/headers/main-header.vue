<script setup lang="ts">
import logo from "../molecules/logo.vue";
import chevronDown from "~/components/icons/chevron-down.vue";
import appButton from "../buttons/app-button.vue";
</script>
<template>
  <header class="fixed top-0 left-0 w-full">
    <nav class="bg-gray-900 px-8 flex justify-between items-center w-full">
      <ul class="flex gap-2 items-center justify-center">
        <li>
          <nuxt-link
            to="/"
            class="flex p-4 items-start gap-[10px] text-body-medium-500 text-gray-500"
            exact-active-class="shadow-[0px_2px_0px_0px_#FF6636_inset] text-white"
            >Home</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/courses"
            class="flex p-4 items-start gap-[10px] text-body-medium-500 text-gray-500"
            exact-active-class="shadow-[0px_2px_0px_0px_#FF6636_inset] text-white"
            >Courses</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/about"
            class="flex p-4 items-start gap-[10px] text-body-medium-500 text-gray-500"
            exact-active-class="shadow-[0px_2px_0px_0px_#FF6636_inset] text-white"
            >About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/contact"
            class="flex p-4 items-start gap-[10px] text-body-medium-500 text-gray-500"
            exact-active-class="shadow-[0px_2px_0px_0px_#FF6636_inset] text-white"
            >Contact</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/become-instructor"
            class="flex p-4 items-start gap-[10px] text-body-medium-500 text-gray-500"
            exact-active-class="shadow-[0px_2px_0px_0px_#FF6636_inset] text-white"
            >Become an instructor</nuxt-link
          >
        </li>
      </ul>
      <div class="flex gap-6 items-start">
        <button
          type="button"
          class="flex gap-[6px] justify-center items-center"
        >
          <span class="text-body-medium-400 text-gray-400">USD</span>
          <i class="text-gray-400"> <chevron-down /> </i>
        </button>
        <button
          type="button"
          class="flex gap-[6px] justify-center items-center"
        >
          <span class="text-gray-400 text-body-medium-400">English</span>
          <i class="text-gray-400"><chevron-down /> </i>
        </button>
      </div>
    </nav>
    <div
      class="flex items-center py-6 px-8 justify-between bg-gray-white shadow-[0px_-1px_0px_0px_#E9EAF0_inset]"
    >
      <div class="flex gap-[50px] items-center justify-center">
        <logo />
        <div class="flex items-start gap-4">
          <button
            type="button"
            class="flex justify-between items-center py-3 px-[18px] w-[200px] gap-[91px] h-12 border-gray-100 border bg-gray-white"
          >
            <span class="text-gray-700 text-body-large-400">Browse</span>
            <i class="text-gray-700">
              <chevron-down />
            </i>
          </button>
          <label
            for="search-header"
            class="relative items-center bg-gray-white border border-gray-100 px-[18px]"
          >
            <input
              type="search"
              name="search-header"
              class="h-full w-full border-0 focus:border-0 outline-0 py-3 pl-8 text-gray-700 text-body-large-400"
              id="search-header"
              placeholder="What do you want learn..."
            />
            <i class="absolute top-1/2 -translate-y-1/2 left-[18px] z-10"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
                  stroke="#1D2026"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4434 16.4438L20.9997 21.0001"
                  stroke="#1D2026"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></i>
          </label>
        </div>
      </div>
      <div class="flex gap-6">
        <button>
          <Icon
            name="material-symbols:notifications-outline"
            style="color: #1d2026"
            size="24"
          />
        </button>
        <button>
          <Icon name="material-symbols:favorite-outline-rounded" size="24" />
        </button>
        <button>
          
          <Icon name="material-symbols:garden-cart-outline-rounded" size="24" style="color:#1d2026"/>
        </button>
        <div class="flex items-start gap-3">
          <app-button value="Create account" varieties="secondary-primary" />
          <app-button value="Sign in" varieties="primary" />
        </div>
      </div>
    </div>
  </header>
</template>
