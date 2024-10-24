<template>
  <div class="flex flex-col md:flex-row gap-4 md:items-center">
    <div class="flex-shrink-0">
      <div class="flex -space-x-3">
        <AvatarRoot v-for="(image, idx) in images" :key="idx">
          <AvatarImage
            v-bind="image"
            class="flex items-center justify-center size-10 bg-muted rounded-full ring-2 ring-border" />
          <AvatarFallback
            class="flex items-center justify-center size-10 bg-muted rounded-full ring-2 ring-border">
            JD
          </AvatarFallback>
        </AvatarRoot>
        <span
          class="flex size-10 items-center justify-center rounded-full bg-muted ring-2 ring-foreground/10">
          <span class="text-xs font-semibold uppercase leading-none text-white">7k+</span>
        </span>
      </div>
    </div>

    <div class="hidden md:flex py-3 w-0.5 rounded-xl bg-foreground/40" />

    <div class="flex flex-col">
      <div class="inline-flex items-center gap-2">
        <Ratings
          disable-click
          :star-size="16"
          :model-value="RATINGS"
          style="--vue3StarRatingsInnerColor: var(--color-muted-foreground)" />
        <div class="mt-1 text-sm text-foreground/60">
          <span class="text-foreground">{{ RATINGS }}</span>
          <span class="font-semibold"> / 5</span>
        </div>
      </div>

      <div class="text-foreground/60">
        From over <strong class="text-primary">12.8k</strong> reviews.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Ratings from "vue3-star-ratings";
import { AvatarFallback, AvatarImage, AvatarRoot } from "reka-ui";

const RATINGS = 4.43;

const images = [
  { src: "https://screwfast.uk/_astro/photo-1568602471122-7832951cc4c5_dsUJE.webp" },
  { src: "https://screwfast.uk/_astro/photo-1531927557220-a9e23c1e4794_ZJoxE2.webp" },
  { src: "https://screwfast.uk/_astro/photo-1541101767792-f9b2b1c4f127_cas9w.webp" },
  { src: "https://screwfast.uk/_astro/photo-1492562080023-ab3db95bfbce_2ij1mG.webp" }
];
</script>
