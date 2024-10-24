<template>
  <svg
    aria-hidden="true"
    :class="
      twMerge(
        'pointer-events-none absolute inset-0 h-full w-full fill-muted stroke-muted -z-50',
        $props.class
      )
    ">
    <defs>
      <pattern
        :id="id"
        :x="x"
        :y="y"
        :width="width"
        :height="height"
        patternUnits="userSpaceOnUse">
        <path
          :d="`M.5 ${height}V.5H${width}`"
          fill="none"
          :strokeDasharray="strokeDasharray" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" strokeWidth="{0}" :fill="`url(#${id})`" />
    <svg v-if="squares?.length" x="{x}" y="{y}" className="overflow-visible">
      <rect
        v-for="[pointX, pointY] in squares"
        :key="`${pointX}-${pointY}`"
        strokeWidth="0"
        :width="width - 1"
        :height="height - 1"
        :x="x * width + 1"
        :y="y * height + 1" />
    </svg>
  </svg>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import type { HTMLAttributes } from "vue";

interface GridPatternProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  strokeDasharray?: string;
  class?: HTMLAttributes["class"];
  squares?: Array<[x: number, y: number]>;
}

const id = useId();

withDefaults(defineProps<GridPatternProps>(), {
  x: -1,
  y: -1,
  width: 40,
  height: 40,
  class: undefined,
  squares: () => [],
  strokeDasharray: "0"
});
</script>
