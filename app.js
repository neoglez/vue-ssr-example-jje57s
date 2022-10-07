import { createSSRApp } from 'vue';

export function createApp() {
  return createSSRApp({
    data: () => ({ count: 1 }),
    template: `<div style="height: 30px; width: 40px; background-color: green" @click="count++">{{ count }}</div>`,
  });
}
