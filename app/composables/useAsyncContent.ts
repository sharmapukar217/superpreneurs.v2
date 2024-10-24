import type { AsyncDataOptions, NuxtApp } from "#app";

export const useAsyncContent = <T>(
  key: string,
  fn: (locale: string, ctx?: NuxtApp) => Promise<T>,
  opts?: AsyncDataOptions<T>
) => {
  const { locale } = useI18n();
  return useAsyncData(`${key}:${locale.value}`, (ctx) => fn(locale.value, ctx), {
    ...opts,
    watch: [locale, opts?.watch].filter(Boolean)
  });
};
