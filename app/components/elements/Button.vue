<template>
  <Primitive
    :type="type"
    :href="href"
    :as-child="asChild"
    :as="href ? defineNuxtLink({}) : as"
    :disabled="disabled || isLoading"
    :class="ui.base({ class: $props.class })"
    @click="handleClicks">
    <slot name="leading">
      <Icon
        v-if="leadingIconName"
        :name="leadingIconName"
        :class="ui.leadingIcon({ class: leadingIconClass })" />
    </slot>

    <slot>
      <span v-if="label" class="truncate">{{ label }}</span>
    </slot>

    <slot name="trailing">
      <Icon
        v-if="trailingIcon"
        :name="trailingIcon"
        :class="ui.trailingIcon({ class: trailingIconClass })" />
    </slot>
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive } from "reka-ui";
import { buttonVariants } from "~/theme/button";
import { type ButtonProps } from "~/types/props";
import { formLoadingInjectionKey } from "~/composables/useFormField";

defineSlots<{
  leading(props?: unknown): any;
  default(props?: unknown): any;
  trailing(props?: unknown): any;
}>();

const props = withDefaults(defineProps<ButtonProps>(), {
  as: "button"
});

const autoLoadingState = ref(false);
const formLoading = inject<Ref<boolean> | undefined>(formLoadingInjectionKey, undefined);

const isLoading = computed(() => {
  if (props.loading) return true;
  if (props.autoLoading) {
    return autoLoadingState.value || (formLoading?.value && props.type === "submit");
  }

  return false;
});

const leadingIconName = computed(() => {
  if (isLoading.value) return "lucide:loader";
  return props.leadingIcon;
});

async function handleClicks(event: MouseEvent) {
  autoLoadingState.value = true;
  const callbacks = Array.isArray(props.onClick) ? props.onClick : [props.onClick];

  Promise.all(callbacks.map((fn) => fn?.(event))).finally(() => {
    autoLoadingState.value = false;
  });
}

const ui = computed(() => {
  return buttonVariants({
    size: props.size,
    block: props.block,
    square: props.square,
    variant: props.variant,
    loading: isLoading.value
  });
});
</script>
