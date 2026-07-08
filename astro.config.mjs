import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  // 解决图片Sharp库冲突
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },
  // 解决rollup依赖解析报错
  ssr: {
    noExternal: ['fuwari']
  }
});
