<template>
  <GridPattern :width="100" :height="100" />

  <section class="border-b-2 border-border">
    <div class="container pt-8 intersect-once motion-safe:intersect:animate-fade-in-up">
      <HeroTwoGrid v-bind="data?.pageData?.hero">
        <div
          class="py-4"
          v-if="Boolean(data?.pageData?.hero?.ratings?.disabled) !== true">
          <HeroRatings />
        </div>
      </HeroTwoGrid>
    </div>
  </section>

  <section v-if="data?.pageData?.discover" class="py-20 bg-background">
    <div class="container">
      <FeaturesSimple v-bind="data.pageData.discover" />
    </div>
  </section>
</template>

<script setup lang="ts">
type Data = {
  meta?: any;
  pageData?: any;
};

const { data } = await useAsyncContent("homepage", (locale) => {
  return queryContent<Data>("/").locale(locale).findOne();
});

const pageMeta = computed(() => data.value?.meta);
watchImmediate(pageMeta, (meta) => useSeoMeta(meta));
</script>
