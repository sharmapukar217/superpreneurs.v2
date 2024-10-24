<template>
  <div class="grid lg:grid-cols-2 gap-8 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
    <div>
      <h1
        :class="
          twMerge(
            'text-4xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter',
            classes?.title
          )
        "
        v-html="title" />

      <p
        :class="
          twMerge(
            'font-medium text-lg mt-4 text-foreground/60 max-w-xl',
            classes?.description
          )
        "
        v-html="description" />

      <slot />

      <slot name="actions">
        <div
          v-if="actions?.length"
          :class="
            twMerge(
              'mt-6 flex flex-wrap flex-row gap-3 max-sm:*:flex-1 *:justify-center',
              classes?.actionsRoot
            )
          ">
          <Button v-for="(action, idx) in actions" :key="idx" v-bind="action" />
        </div>
      </slot>
    </div>

    <div class="py-6">
      <slot name="right-section">
        <img
          class="rounded-xl intersect-once motion-safe:intersect:animate-fade-left"
          src="https://screwfast.uk/_astro/hero-image.DRPoHq2O_ZtbEJF.avif" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import type { ButtonProps } from "~/types/props";

defineProps<{
  title: string;
  description: string;
  actions?: ButtonProps[];

  classes?: {
    title?: string;
    description?: string;

    actionsRoot?: string;
  };
}>();
</script>
