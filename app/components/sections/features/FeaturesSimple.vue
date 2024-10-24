<template>
  <h1
    :class="
      twMerge(
        'text-4xl lg:text-5xl font-bold lg:tracking-tight',
        classes?.title,
        centered && 'text-center'
      )
    "
    v-html="title" />

  <p
    v-if="description"
    :class="
      twMerge(
        'text-lg mt-4 text-muted-foreground',
        classes?.description,
        centered && 'text-center'
      )
    "
    v-html="description" />

  <div
    :class="
      twMerge('grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-y-8 gap-x-16', classes?.featureRoot)
    ">
    <div
      v-for="(feature, index) in features"
      :key="index"
      :class="twMerge('flex gap-4 items-start', classes?.featureGrid)">
      <div :class="twMerge('shrink-0', classes?.featureIconRoot)">
        <Icon :name="feature.icon" :class="twMerge('size-8', classes?.featureIcon)" />
      </div>

      <div>
        <h3
          :class="twMerge('font-semibold text-lg', classes?.featureTitle)"
          v-html="feature.title" />
        <p
          :class="
            twMerge(
              'text-muted-foreground mt-2 leading-relaxed',
              classes?.featureDescription
            )
          "
          v-html="feature.description" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import type { SimpleFeature } from "~/types/props";

defineProps<{
  title: string;
  centered?: boolean;
  description?: string;
  features: Array<SimpleFeature>;

  classes?: {
    title?: string;
    description?: string;

    featureRoot?: string;
    featureGrid?: string;

    featureIconRoot?: string;
    featureIcon?: string;

    featureTitle?: string;
    featureDescription?: string;
  };
}>();
</script>
