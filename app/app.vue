<template>
  <ConfigProvider :use-id="() => useId()" :locale="$i18n.locale">
    <TooltipProvider>
      <ToastProvider>
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </ToastProvider>
    </TooltipProvider>
  </ConfigProvider>
</template>

<script setup lang="ts">
import "~/assets/tailwind.css";
import { ConfigProvider, TooltipProvider, ToastProvider } from "reka-ui";

useSeoMeta({
  title: "Welcome",
  titleTemplate: `%s | ${SITE_CONFIG.title}`
});

onMounted(() => {
  // devtool for mobiles
  if (import.meta.env.DEV) {
    import("eruda").then((m) => m.default.init()).catch(undefined);
  }

  // intersect: variant handler
  document.querySelectorAll('[class*="intersect"]').forEach((element) => {
    const options: IntersectionObserverInit = {
      threshold: (() => {
        if (element.classList.contains("intersect-full")) return 0.99;
        if (element.classList.contains("intersect-quarter")) return 0.75;
        if (element.classList.contains("intersect-half")) return 0.55;
        return 0;
      })()
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return element.setAttribute("no-intersect", "");
        element.removeAttribute("no-intersect");
        if (element.classList.contains("intersect-once")) observer.disconnect();
      });
    }, options);
    observer.observe(element);
  });
});
</script>
