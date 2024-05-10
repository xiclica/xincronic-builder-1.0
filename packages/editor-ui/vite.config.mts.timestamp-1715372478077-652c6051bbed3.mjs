// vite.config.mts
import vue2 from "file:///Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve as resolve2 } from "path";
import { defineConfig as defineConfig2, mergeConfig as mergeConfig2 } from "file:///Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/node_modules/.pnpm/vite@5.1.6_sass@1.64.1/node_modules/vite/dist/node/index.js";
import { sentryVitePlugin } from "file:///Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/node_modules/.pnpm/@sentry+vite-plugin@2.5.0/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
import checker2 from "file:///Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/node_modules/.pnpm/vite-plugin-checker@0.6.4_patch_hash=emhml6hz55p6dz7xjncbjppjdm_typescript@5.4.2_vite@5.1.6_vue-tsc@2.0.6/node_modules/vite-plugin-checker/dist/esm/main.js";

// package.json
var package_default = {
  name: "n8n-editor-ui",
  version: "1.41.0",
  description: "Workflow Editor UI for n8n",
  license: "SEE LICENSE IN LICENSE.md",
  homepage: "https://n8n.io",
  author: {
    name: "Jan Oberhauser",
    email: "jan@n8n.io"
  },
  main: "index.js",
  repository: {
    type: "git",
    url: "git+https://github.com/n8n-io/n8n.git"
  },
  scripts: {
    clean: "rimraf dist .turbo",
    build: 'cross-env VUE_APP_PUBLIC_PATH="/{{BASE_PATH}}/" NODE_OPTIONS="--max-old-space-size=8192" vite build',
    typecheck: "vue-tsc --noEmit",
    dev: "pnpm serve",
    lint: "eslint src --ext .js,.ts,.vue --quiet",
    lintfix: "eslint src --ext .js,.ts,.vue --fix",
    format: "prettier --write . --ignore-path ../../.prettierignore",
    serve: "cross-env VUE_APP_URL_BASE_API=http://localhost:5678/ vite --host 0.0.0.0 --port 8080 dev",
    test: "vitest run",
    "test:dev": "vitest"
  },
  dependencies: {
    "@codemirror/autocomplete": "^6.11.1",
    "@codemirror/commands": "^6.3.2",
    "@codemirror/lang-javascript": "^6.2.1",
    "@codemirror/lang-json": "^6.0.1",
    "@codemirror/lang-python": "^6.1.3",
    "@codemirror/language": "^6.9.3",
    "@codemirror/lint": "^6.4.2",
    "@codemirror/state": "^6.3.3",
    "@codemirror/view": "^6.22.3",
    "@fontsource/open-sans": "^4.5.0",
    "@jsplumb/browser-ui": "^5.13.2",
    "@jsplumb/common": "^5.13.2",
    "@jsplumb/connector-bezier": "^5.13.2",
    "@jsplumb/core": "^5.13.2",
    "@jsplumb/util": "^5.13.2",
    "@lezer/common": "^1.0.4",
    "@n8n/chat": "workspace:*",
    "@n8n/codemirror-lang-sql": "^1.0.2",
    "@n8n/permissions": "workspace:*",
    "@vueuse/components": "^10.5.0",
    "@vueuse/core": "^10.5.0",
    axios: "1.6.7",
    "chart.js": "^4.4.0",
    "codemirror-lang-html-n8n": "^1.0.0",
    "@n8n/codemirror-lang": "workspace:*",
    dateformat: "^3.0.3",
    "email-providers": "^2.0.1",
    "esprima-next": "5.8.4",
    "fast-json-stable-stringify": "^2.1.0",
    "file-saver": "^2.0.2",
    flatted: "^3.2.4",
    "humanize-duration": "^3.27.2",
    jsonpath: "^1.1.1",
    "lodash-es": "^4.17.21",
    luxon: "^3.3.0",
    "n8n-design-system": "workspace:*",
    "n8n-workflow": "workspace:*",
    pinia: "^2.1.6",
    prettier: "^3.1.0",
    "qrcode.vue": "^3.3.4",
    "stream-browserify": "^3.0.0",
    "timeago.js": "^4.0.2",
    uuid: "^8.3.2",
    "v3-infinite-loading": "^1.2.2",
    vue: "^3.4.21",
    "vue-agile": "^2.0.0",
    "vue-chartjs": "^5.2.0",
    "vue-i18n": "^9.2.2",
    "vue-json-pretty": "2.2.4",
    "vue-markdown-render": "^2.0.1",
    "vue-router": "^4.2.2",
    "vue3-touch-events": "^4.1.3",
    xss: "^1.0.14"
  },
  devDependencies: {
    "@faker-js/faker": "^8.0.2",
    "@pinia/testing": "^0.1.3",
    "@sentry/vite-plugin": "^2.5.0",
    "@types/dateformat": "^3.0.0",
    "@types/file-saver": "^2.0.1",
    "@types/humanize-duration": "^3.27.1",
    "@types/jsonpath": "^0.2.0",
    "@types/lodash-es": "^4.17.6",
    "@types/luxon": "^3.2.0",
    "@types/uuid": "^8.3.2",
    miragejs: "^0.1.48",
    "unplugin-icons": "^0.17.0"
  },
  peerDependencies: {
    "@fortawesome/fontawesome-svg-core": "*",
    "@fortawesome/free-regular-svg-icons": "*",
    "@fortawesome/free-solid-svg-icons": "*",
    "@fortawesome/vue-fontawesome": "*"
  }
};

// ../design-system/vite.config.mts
import vue from "file:///Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { defineConfig, mergeConfig } from "file:///Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/node_modules/.pnpm/vite@5.1.6_sass@1.64.1/node_modules/vite/dist/node/index.js";
import checker from "file:///Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/node_modules/.pnpm/vite-plugin-checker@0.6.4_patch_hash=emhml6hz55p6dz7xjncbjppjdm_typescript@5.4.2_vite@5.1.6_vue-tsc@2.0.6/node_modules/vite-plugin-checker/dist/esm/main.js";
import { defineConfig as defineVitestConfig } from "file:///Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/node_modules/.pnpm/vitest@1.3.1/node_modules/vitest/dist/config.js";
var __vite_injected_original_dirname = "/Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/packages/design-system";
var vitestConfig = defineVitestConfig({
  test: {
    silent: true,
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/__tests__/setup.ts"],
    ...process.env.COVERAGE_ENABLED === "true" ? {
      coverage: {
        enabled: true,
        provider: "v8",
        reporter: process.env.CI === "true" ? "cobertura" : "text-summary",
        all: true
      }
    } : {},
    css: {
      modules: {
        classNameStrategy: "non-scoped"
      }
    }
  }
});
var plugins = [vue()];
if (process.env.ENABLE_TYPE_CHECKING === "true") {
  plugins.push(checker({ vueTsc: true }));
}
var vite_config_default = mergeConfig(
  defineConfig({
    plugins,
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src"),
        "n8n-design-system": resolve(__vite_injected_original_dirname, "src"),
        lodash: "lodash-es"
      }
    },
    build: {
      lib: {
        entry: resolve(__vite_injected_original_dirname, "src", "main.ts"),
        name: "N8nDesignSystem",
        fileName: (format) => `n8n-design-system.${format}.js`
      },
      rollupOptions: {
        // make sure to externalize deps that shouldn't be bundled
        // into your library
        external: ["vue"],
        output: {
          exports: "named",
          // Provide global variables to use in the UMD build
          // for externalized deps
          globals: {
            vue: "Vue"
          }
        }
      }
    }
  }),
  vitestConfig
);

// vite.config.mts
import icons from "file:///Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/node_modules/.pnpm/unplugin-icons@0.17.4/node_modules/unplugin-icons/dist/vite.mjs";
var __vite_injected_original_dirname2 = "/Volumes/Jeff-SSD/Dev/xincronic/xincronic-builder-1.0/packages/editor-ui";
var vendorChunks = ["vue", "vue-router"];
var n8nChunks = ["n8n-workflow", "n8n-design-system", "@n8n/chat"];
var ignoreChunks = [
  "@fontsource/open-sans",
  "@vueuse/components",
  // TODO: remove this. It's currently required by xml2js in NodeErrors
  "stream-browserify",
  "vue-markdown-render"
];
var isScopedPackageToIgnore = (str) => /@codemirror\//.test(str);
function renderChunks() {
  const { dependencies } = package_default;
  const chunks = {};
  Object.keys(dependencies).forEach((key) => {
    if ([...vendorChunks, ...n8nChunks, ...ignoreChunks].includes(key)) {
      return;
    }
    if (isScopedPackageToIgnore(key))
      return;
    chunks[key] = [key];
  });
  return chunks;
}
var publicPath = process.env.VUE_APP_PUBLIC_PATH || "/";
var { NODE_ENV } = process.env;
var alias = [
  { find: "@", replacement: resolve2(__vite_injected_original_dirname2, "src") },
  { find: "stream", replacement: "stream-browserify" },
  {
    find: /^n8n-design-system$/,
    replacement: resolve2(__vite_injected_original_dirname2, "..", "design-system", "src", "main.ts")
  },
  {
    find: /^n8n-design-system\//,
    replacement: resolve2(__vite_injected_original_dirname2, "..", "design-system", "src") + "/"
  },
  {
    find: /^@n8n\/chat$/,
    replacement: resolve2(__vite_injected_original_dirname2, "..", "@n8n", "chat", "src", "index.ts")
  },
  {
    find: /^@n8n\/chat\//,
    replacement: resolve2(__vite_injected_original_dirname2, "..", "@n8n", "chat", "src") + "/"
  },
  ...["orderBy", "camelCase", "cloneDeep", "startCase"].map((name) => ({
    find: new RegExp(`^lodash.${name}$`, "i"),
    replacement: `lodash-es/${name}`
  })),
  {
    find: /^lodash\.(.+)$/,
    replacement: "lodash-es/$1"
  }
];
var plugins2 = [
  icons({
    compiler: "vue3"
  }),
  vue2()
];
if (process.env.ENABLE_TYPE_CHECKING === "true") {
  plugins2.push(checker2({ vueTsc: true }));
}
var { SENTRY_AUTH_TOKEN: authToken, RELEASE: release } = process.env;
if (release && authToken) {
  plugins2.push(
    sentryVitePlugin({
      org: "n8nio",
      project: "instance-frontend",
      // Specify the directory containing build artifacts
      include: "./dist",
      // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      // and needs the `project:releases` and `org:read` scopes
      authToken,
      telemetry: false,
      release
    })
  );
}
var vite_config_default2 = mergeConfig2(
  defineConfig2({
    define: {
      // This causes test to fail but is required for actually running it
      // ...(NODE_ENV !== 'test' ? { 'global': 'globalThis' } : {}),
      ...NODE_ENV === "development" ? { "process.env": {} } : {},
      BASE_PATH: `'${publicPath}'`
    },
    plugins: plugins2,
    resolve: { alias },
    base: publicPath,
    envPrefix: "VUE_APP",
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '\n@use "@/n8n-theme-variables.scss" as *;\n'
        }
      }
    },
    build: {
      assetsInlineLimit: 0,
      minify: !!release,
      sourcemap: !!release,
      rollupOptions: {
        treeshake: !!release,
        output: {
          manualChunks: {
            vendor: vendorChunks,
            n8n: n8nChunks,
            ...renderChunks()
          }
        }
      }
    }
  }),
  vitestConfig
);
export {
  vite_config_default2 as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInBhY2thZ2UuanNvbiIsICIuLi9kZXNpZ24tc3lzdGVtL3ZpdGUuY29uZmlnLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Wb2x1bWVzL0plZmYtU1NEL0Rldi94aW5jcm9uaWMveGluY3JvbmljLWJ1aWxkZXItMS4wL3BhY2thZ2VzL2VkaXRvci11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1ZvbHVtZXMvSmVmZi1TU0QvRGV2L3hpbmNyb25pYy94aW5jcm9uaWMtYnVpbGRlci0xLjAvcGFja2FnZXMvZWRpdG9yLXVpL3ZpdGUuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVm9sdW1lcy9KZWZmLVNTRC9EZXYveGluY3JvbmljL3hpbmNyb25pYy1idWlsZGVyLTEuMC9wYWNrYWdlcy9lZGl0b3ItdWkvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBtZXJnZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHsgc2VudHJ5Vml0ZVBsdWdpbiB9IGZyb20gJ0BzZW50cnkvdml0ZS1wbHVnaW4nO1xuaW1wb3J0IGNoZWNrZXIgZnJvbSAndml0ZS1wbHVnaW4tY2hlY2tlcic7XG5cbmltcG9ydCBwYWNrYWdlSlNPTiBmcm9tICcuL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyB2aXRlc3RDb25maWcgfSBmcm9tICcuLi9kZXNpZ24tc3lzdGVtL3ZpdGUuY29uZmlnLm10cyc7XG5pbXBvcnQgaWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSc7XG5cbmNvbnN0IHZlbmRvckNodW5rcyA9IFsndnVlJywgJ3Z1ZS1yb3V0ZXInXTtcbmNvbnN0IG44bkNodW5rcyA9IFsnbjhuLXdvcmtmbG93JywgJ244bi1kZXNpZ24tc3lzdGVtJywgJ0BuOG4vY2hhdCddO1xuY29uc3QgaWdub3JlQ2h1bmtzID0gW1xuXHQnQGZvbnRzb3VyY2Uvb3Blbi1zYW5zJyxcblx0J0B2dWV1c2UvY29tcG9uZW50cycsXG5cdC8vIFRPRE86IHJlbW92ZSB0aGlzLiBJdCdzIGN1cnJlbnRseSByZXF1aXJlZCBieSB4bWwyanMgaW4gTm9kZUVycm9yc1xuXHQnc3RyZWFtLWJyb3dzZXJpZnknLFxuXHQndnVlLW1hcmtkb3duLXJlbmRlcicsXG5dO1xuXG5jb25zdCBpc1Njb3BlZFBhY2thZ2VUb0lnbm9yZSA9IChzdHI6IHN0cmluZykgPT4gL0Bjb2RlbWlycm9yXFwvLy50ZXN0KHN0cik7XG5cbmZ1bmN0aW9uIHJlbmRlckNodW5rcygpIHtcblx0Y29uc3QgeyBkZXBlbmRlbmNpZXMgfSA9IHBhY2thZ2VKU09OO1xuXHRjb25zdCBjaHVua3M6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdE9iamVjdC5rZXlzKGRlcGVuZGVuY2llcykuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0aWYgKFsuLi52ZW5kb3JDaHVua3MsIC4uLm44bkNodW5rcywgLi4uaWdub3JlQ2h1bmtzXS5pbmNsdWRlcyhrZXkpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGlzU2NvcGVkUGFja2FnZVRvSWdub3JlKGtleSkpIHJldHVybjtcblxuXHRcdGNodW5rc1trZXldID0gW2tleV07XG5cdH0pO1xuXG5cdHJldHVybiBjaHVua3M7XG59XG5cbmNvbnN0IHB1YmxpY1BhdGggPSBwcm9jZXNzLmVudi5WVUVfQVBQX1BVQkxJQ19QQVRIIHx8ICcvJztcblxuY29uc3QgeyBOT0RFX0VOViB9ID0gcHJvY2Vzcy5lbnY7XG5cbmNvbnN0IGFsaWFzID0gW1xuXHR7IGZpbmQ6ICdAJywgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJykgfSxcblx0eyBmaW5kOiAnc3RyZWFtJywgcmVwbGFjZW1lbnQ6ICdzdHJlYW0tYnJvd3NlcmlmeScgfSxcblx0e1xuXHRcdGZpbmQ6IC9ebjhuLWRlc2lnbi1zeXN0ZW0kLyxcblx0XHRyZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICdkZXNpZ24tc3lzdGVtJywgJ3NyYycsICdtYWluLnRzJyksXG5cdH0sXG5cdHtcblx0XHRmaW5kOiAvXm44bi1kZXNpZ24tc3lzdGVtXFwvLyxcblx0XHRyZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLicsICdkZXNpZ24tc3lzdGVtJywgJ3NyYycpICsgJy8nLFxuXHR9LFxuXHR7XG5cdFx0ZmluZDogL15AbjhuXFwvY2hhdCQvLFxuXHRcdHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJ0BuOG4nLCAnY2hhdCcsICdzcmMnLCAnaW5kZXgudHMnKSxcblx0fSxcblx0e1xuXHRcdGZpbmQ6IC9eQG44blxcL2NoYXRcXC8vLFxuXHRcdHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJy4uJywgJ0BuOG4nLCAnY2hhdCcsICdzcmMnKSArICcvJyxcblx0fSxcblx0Li4uWydvcmRlckJ5JywgJ2NhbWVsQ2FzZScsICdjbG9uZURlZXAnLCAnc3RhcnRDYXNlJ10ubWFwKChuYW1lKSA9PiAoe1xuXHRcdGZpbmQ6IG5ldyBSZWdFeHAoYF5sb2Rhc2guJHtuYW1lfSRgLCAnaScpLFxuXHRcdHJlcGxhY2VtZW50OiBgbG9kYXNoLWVzLyR7bmFtZX1gLFxuXHR9KSksXG5cdHtcblx0XHRmaW5kOiAvXmxvZGFzaFxcLiguKykkLyxcblx0XHRyZXBsYWNlbWVudDogJ2xvZGFzaC1lcy8kMScsXG5cdH0sXG5dO1xuXG5jb25zdCBwbHVnaW5zID0gW1xuXHRpY29ucyh7XG5cdFx0Y29tcGlsZXI6ICd2dWUzJyxcblx0fSksXG5cdHZ1ZSgpLFxuXTtcbmlmIChwcm9jZXNzLmVudi5FTkFCTEVfVFlQRV9DSEVDS0lORyA9PT0gJ3RydWUnKSB7XG5cdHBsdWdpbnMucHVzaChjaGVja2VyKHsgdnVlVHNjOiB0cnVlIH0pKTtcbn1cblxuY29uc3QgeyBTRU5UUllfQVVUSF9UT0tFTjogYXV0aFRva2VuLCBSRUxFQVNFOiByZWxlYXNlIH0gPSBwcm9jZXNzLmVudjtcbmlmIChyZWxlYXNlICYmIGF1dGhUb2tlbikge1xuXHRwbHVnaW5zLnB1c2goXG5cdFx0c2VudHJ5Vml0ZVBsdWdpbih7XG5cdFx0XHRvcmc6ICduOG5pbycsXG5cdFx0XHRwcm9qZWN0OiAnaW5zdGFuY2UtZnJvbnRlbmQnLFxuXHRcdFx0Ly8gU3BlY2lmeSB0aGUgZGlyZWN0b3J5IGNvbnRhaW5pbmcgYnVpbGQgYXJ0aWZhY3RzXG5cdFx0XHRpbmNsdWRlOiAnLi9kaXN0Jyxcblx0XHRcdC8vIEF1dGggdG9rZW5zIGNhbiBiZSBvYnRhaW5lZCBmcm9tIGh0dHBzOi8vc2VudHJ5LmlvL3NldHRpbmdzL2FjY291bnQvYXBpL2F1dGgtdG9rZW5zL1xuXHRcdFx0Ly8gYW5kIG5lZWRzIHRoZSBgcHJvamVjdDpyZWxlYXNlc2AgYW5kIGBvcmc6cmVhZGAgc2NvcGVzXG5cdFx0XHRhdXRoVG9rZW4sXG5cdFx0XHR0ZWxlbWV0cnk6IGZhbHNlLFxuXHRcdFx0cmVsZWFzZSxcblx0XHR9KSxcblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VDb25maWcoXG5cdGRlZmluZUNvbmZpZyh7XG5cdFx0ZGVmaW5lOiB7XG5cdFx0XHQvLyBUaGlzIGNhdXNlcyB0ZXN0IHRvIGZhaWwgYnV0IGlzIHJlcXVpcmVkIGZvciBhY3R1YWxseSBydW5uaW5nIGl0XG5cdFx0XHQvLyAuLi4oTk9ERV9FTlYgIT09ICd0ZXN0JyA/IHsgJ2dsb2JhbCc6ICdnbG9iYWxUaGlzJyB9IDoge30pLFxuXHRcdFx0Li4uKE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8geyAncHJvY2Vzcy5lbnYnOiB7fSB9IDoge30pLFxuXHRcdFx0QkFTRV9QQVRIOiBgJyR7cHVibGljUGF0aH0nYCxcblx0XHR9LFxuXHRcdHBsdWdpbnMsXG5cdFx0cmVzb2x2ZTogeyBhbGlhcyB9LFxuXHRcdGJhc2U6IHB1YmxpY1BhdGgsXG5cdFx0ZW52UHJlZml4OiAnVlVFX0FQUCcsXG5cdFx0Y3NzOiB7XG5cdFx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG5cdFx0XHRcdHNjc3M6IHtcblx0XHRcdFx0XHRhZGRpdGlvbmFsRGF0YTogJ1xcbkB1c2UgXCJAL244bi10aGVtZS12YXJpYWJsZXMuc2Nzc1wiIGFzICo7XFxuJyxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRidWlsZDoge1xuXHRcdFx0YXNzZXRzSW5saW5lTGltaXQ6IDAsXG5cdFx0XHRtaW5pZnk6ICEhcmVsZWFzZSxcblx0XHRcdHNvdXJjZW1hcDogISFyZWxlYXNlLFxuXHRcdFx0cm9sbHVwT3B0aW9uczoge1xuXHRcdFx0XHR0cmVlc2hha2U6ICEhcmVsZWFzZSxcblx0XHRcdFx0b3V0cHV0OiB7XG5cdFx0XHRcdFx0bWFudWFsQ2h1bmtzOiB7XG5cdFx0XHRcdFx0XHR2ZW5kb3I6IHZlbmRvckNodW5rcyxcblx0XHRcdFx0XHRcdG44bjogbjhuQ2h1bmtzLFxuXHRcdFx0XHRcdFx0Li4ucmVuZGVyQ2h1bmtzKCksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSksXG5cdHZpdGVzdENvbmZpZyxcbik7XG4iLCAie1xuICBcIm5hbWVcIjogXCJuOG4tZWRpdG9yLXVpXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuNDEuMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV29ya2Zsb3cgRWRpdG9yIFVJIGZvciBuOG5cIixcbiAgXCJsaWNlbnNlXCI6IFwiU0VFIExJQ0VOU0UgSU4gTElDRU5TRS5tZFwiLFxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9uOG4uaW9cIixcbiAgXCJhdXRob3JcIjoge1xuICAgIFwibmFtZVwiOiBcIkphbiBPYmVyaGF1c2VyXCIsXG4gICAgXCJlbWFpbFwiOiBcImphbkBuOG4uaW9cIlxuICB9LFxuICBcIm1haW5cIjogXCJpbmRleC5qc1wiLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidHlwZVwiOiBcImdpdFwiLFxuICAgIFwidXJsXCI6IFwiZ2l0K2h0dHBzOi8vZ2l0aHViLmNvbS9uOG4taW8vbjhuLmdpdFwiXG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJjbGVhblwiOiBcInJpbXJhZiBkaXN0IC50dXJib1wiLFxuICAgIFwiYnVpbGRcIjogXCJjcm9zcy1lbnYgVlVFX0FQUF9QVUJMSUNfUEFUSD1cXFwiL3t7QkFTRV9QQVRIfX0vXFxcIiBOT0RFX09QVElPTlM9XFxcIi0tbWF4LW9sZC1zcGFjZS1zaXplPTgxOTJcXFwiIHZpdGUgYnVpbGRcIixcbiAgICBcInR5cGVjaGVja1wiOiBcInZ1ZS10c2MgLS1ub0VtaXRcIixcbiAgICBcImRldlwiOiBcInBucG0gc2VydmVcIixcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgc3JjIC0tZXh0IC5qcywudHMsLnZ1ZSAtLXF1aWV0XCIsXG4gICAgXCJsaW50Zml4XCI6IFwiZXNsaW50IHNyYyAtLWV4dCAuanMsLnRzLC52dWUgLS1maXhcIixcbiAgICBcImZvcm1hdFwiOiBcInByZXR0aWVyIC0td3JpdGUgLiAtLWlnbm9yZS1wYXRoIC4uLy4uLy5wcmV0dGllcmlnbm9yZVwiLFxuICAgIFwic2VydmVcIjogXCJjcm9zcy1lbnYgVlVFX0FQUF9VUkxfQkFTRV9BUEk9aHR0cDovL2xvY2FsaG9zdDo1Njc4LyB2aXRlIC0taG9zdCAwLjAuMC4wIC0tcG9ydCA4MDgwIGRldlwiLFxuICAgIFwidGVzdFwiOiBcInZpdGVzdCBydW5cIixcbiAgICBcInRlc3Q6ZGV2XCI6IFwidml0ZXN0XCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNvZGVtaXJyb3IvYXV0b2NvbXBsZXRlXCI6IFwiXjYuMTEuMVwiLFxuICAgIFwiQGNvZGVtaXJyb3IvY29tbWFuZHNcIjogXCJeNi4zLjJcIixcbiAgICBcIkBjb2RlbWlycm9yL2xhbmctamF2YXNjcmlwdFwiOiBcIl42LjIuMVwiLFxuICAgIFwiQGNvZGVtaXJyb3IvbGFuZy1qc29uXCI6IFwiXjYuMC4xXCIsXG4gICAgXCJAY29kZW1pcnJvci9sYW5nLXB5dGhvblwiOiBcIl42LjEuM1wiLFxuICAgIFwiQGNvZGVtaXJyb3IvbGFuZ3VhZ2VcIjogXCJeNi45LjNcIixcbiAgICBcIkBjb2RlbWlycm9yL2xpbnRcIjogXCJeNi40LjJcIixcbiAgICBcIkBjb2RlbWlycm9yL3N0YXRlXCI6IFwiXjYuMy4zXCIsXG4gICAgXCJAY29kZW1pcnJvci92aWV3XCI6IFwiXjYuMjIuM1wiLFxuICAgIFwiQGZvbnRzb3VyY2Uvb3Blbi1zYW5zXCI6IFwiXjQuNS4wXCIsXG4gICAgXCJAanNwbHVtYi9icm93c2VyLXVpXCI6IFwiXjUuMTMuMlwiLFxuICAgIFwiQGpzcGx1bWIvY29tbW9uXCI6IFwiXjUuMTMuMlwiLFxuICAgIFwiQGpzcGx1bWIvY29ubmVjdG9yLWJlemllclwiOiBcIl41LjEzLjJcIixcbiAgICBcIkBqc3BsdW1iL2NvcmVcIjogXCJeNS4xMy4yXCIsXG4gICAgXCJAanNwbHVtYi91dGlsXCI6IFwiXjUuMTMuMlwiLFxuICAgIFwiQGxlemVyL2NvbW1vblwiOiBcIl4xLjAuNFwiLFxuICAgIFwiQG44bi9jaGF0XCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBuOG4vY29kZW1pcnJvci1sYW5nLXNxbFwiOiBcIl4xLjAuMlwiLFxuICAgIFwiQG44bi9wZXJtaXNzaW9uc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAdnVldXNlL2NvbXBvbmVudHNcIjogXCJeMTAuNS4wXCIsXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeMTAuNS4wXCIsXG4gICAgXCJheGlvc1wiOiBcIjEuNi43XCIsXG4gICAgXCJjaGFydC5qc1wiOiBcIl40LjQuMFwiLFxuICAgIFwiY29kZW1pcnJvci1sYW5nLWh0bWwtbjhuXCI6IFwiXjEuMC4wXCIsXG4gICAgXCJAbjhuL2NvZGVtaXJyb3ItbGFuZ1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJkYXRlZm9ybWF0XCI6IFwiXjMuMC4zXCIsXG4gICAgXCJlbWFpbC1wcm92aWRlcnNcIjogXCJeMi4wLjFcIixcbiAgICBcImVzcHJpbWEtbmV4dFwiOiBcIjUuOC40XCIsXG4gICAgXCJmYXN0LWpzb24tc3RhYmxlLXN0cmluZ2lmeVwiOiBcIl4yLjEuMFwiLFxuICAgIFwiZmlsZS1zYXZlclwiOiBcIl4yLjAuMlwiLFxuICAgIFwiZmxhdHRlZFwiOiBcIl4zLjIuNFwiLFxuICAgIFwiaHVtYW5pemUtZHVyYXRpb25cIjogXCJeMy4yNy4yXCIsXG4gICAgXCJqc29ucGF0aFwiOiBcIl4xLjEuMVwiLFxuICAgIFwibG9kYXNoLWVzXCI6IFwiXjQuMTcuMjFcIixcbiAgICBcImx1eG9uXCI6IFwiXjMuMy4wXCIsXG4gICAgXCJuOG4tZGVzaWduLXN5c3RlbVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJuOG4td29ya2Zsb3dcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwicGluaWFcIjogXCJeMi4xLjZcIixcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMS4wXCIsXG4gICAgXCJxcmNvZGUudnVlXCI6IFwiXjMuMy40XCIsXG4gICAgXCJzdHJlYW0tYnJvd3NlcmlmeVwiOiBcIl4zLjAuMFwiLFxuICAgIFwidGltZWFnby5qc1wiOiBcIl40LjAuMlwiLFxuICAgIFwidXVpZFwiOiBcIl44LjMuMlwiLFxuICAgIFwidjMtaW5maW5pdGUtbG9hZGluZ1wiOiBcIl4xLjIuMlwiLFxuICAgIFwidnVlXCI6IFwiXjMuNC4yMVwiLFxuICAgIFwidnVlLWFnaWxlXCI6IFwiXjIuMC4wXCIsXG4gICAgXCJ2dWUtY2hhcnRqc1wiOiBcIl41LjIuMFwiLFxuICAgIFwidnVlLWkxOG5cIjogXCJeOS4yLjJcIixcbiAgICBcInZ1ZS1qc29uLXByZXR0eVwiOiBcIjIuMi40XCIsXG4gICAgXCJ2dWUtbWFya2Rvd24tcmVuZGVyXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjQuMi4yXCIsXG4gICAgXCJ2dWUzLXRvdWNoLWV2ZW50c1wiOiBcIl40LjEuM1wiLFxuICAgIFwieHNzXCI6IFwiXjEuMC4xNFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBmYWtlci1qcy9mYWtlclwiOiBcIl44LjAuMlwiLFxuICAgIFwiQHBpbmlhL3Rlc3RpbmdcIjogXCJeMC4xLjNcIixcbiAgICBcIkBzZW50cnkvdml0ZS1wbHVnaW5cIjogXCJeMi41LjBcIixcbiAgICBcIkB0eXBlcy9kYXRlZm9ybWF0XCI6IFwiXjMuMC4wXCIsXG4gICAgXCJAdHlwZXMvZmlsZS1zYXZlclwiOiBcIl4yLjAuMVwiLFxuICAgIFwiQHR5cGVzL2h1bWFuaXplLWR1cmF0aW9uXCI6IFwiXjMuMjcuMVwiLFxuICAgIFwiQHR5cGVzL2pzb25wYXRoXCI6IFwiXjAuMi4wXCIsXG4gICAgXCJAdHlwZXMvbG9kYXNoLWVzXCI6IFwiXjQuMTcuNlwiLFxuICAgIFwiQHR5cGVzL2x1eG9uXCI6IFwiXjMuMi4wXCIsXG4gICAgXCJAdHlwZXMvdXVpZFwiOiBcIl44LjMuMlwiLFxuICAgIFwibWlyYWdlanNcIjogXCJeMC4xLjQ4XCIsXG4gICAgXCJ1bnBsdWdpbi1pY29uc1wiOiBcIl4wLjE3LjBcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI6IFwiKlwiLFxuICAgIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjogXCIqXCIsXG4gICAgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjogXCIqXCIsXG4gICAgXCJAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lXCI6IFwiKlwiXG4gIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1ZvbHVtZXMvSmVmZi1TU0QvRGV2L3hpbmNyb25pYy94aW5jcm9uaWMtYnVpbGRlci0xLjAvcGFja2FnZXMvZGVzaWduLXN5c3RlbVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1ZvbHVtZXMvSmVmZi1TU0QvRGV2L3hpbmNyb25pYy94aW5jcm9uaWMtYnVpbGRlci0xLjAvcGFja2FnZXMvZGVzaWduLXN5c3RlbS92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1ZvbHVtZXMvSmVmZi1TU0QvRGV2L3hpbmNyb25pYy94aW5jcm9uaWMtYnVpbGRlci0xLjAvcGFja2FnZXMvZGVzaWduLXN5c3RlbS92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIG1lcmdlQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJztcbmltcG9ydCB7IHR5cGUgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGVzdCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgYXMgZGVmaW5lVml0ZXN0Q29uZmlnIH0gZnJvbSAndml0ZXN0L2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCB2aXRlc3RDb25maWcgPSBkZWZpbmVWaXRlc3RDb25maWcoe1xuXHR0ZXN0OiB7XG5cdFx0c2lsZW50OiB0cnVlLFxuXHRcdGdsb2JhbHM6IHRydWUsXG5cdFx0ZW52aXJvbm1lbnQ6ICdqc2RvbScsXG5cdFx0c2V0dXBGaWxlczogWycuL3NyYy9fX3Rlc3RzX18vc2V0dXAudHMnXSxcblx0XHQuLi4ocHJvY2Vzcy5lbnYuQ09WRVJBR0VfRU5BQkxFRCA9PT0gJ3RydWUnXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRjb3ZlcmFnZToge1xuXHRcdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdHByb3ZpZGVyOiAndjgnLFxuXHRcdFx0XHRcdFx0cmVwb3J0ZXI6IHByb2Nlc3MuZW52LkNJID09PSAndHJ1ZScgPyAnY29iZXJ0dXJhJyA6ICd0ZXh0LXN1bW1hcnknLFxuXHRcdFx0XHRcdFx0YWxsOiB0cnVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHQgIH1cblx0XHRcdDoge30pLFxuXHRcdGNzczoge1xuXHRcdFx0bW9kdWxlczoge1xuXHRcdFx0XHRjbGFzc05hbWVTdHJhdGVneTogJ25vbi1zY29wZWQnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxufSkgYXMgVXNlckNvbmZpZztcblxuY29uc3QgcGx1Z2lucyA9IFt2dWUoKV07XG5pZiAocHJvY2Vzcy5lbnYuRU5BQkxFX1RZUEVfQ0hFQ0tJTkcgPT09ICd0cnVlJykge1xuXHRwbHVnaW5zLnB1c2goY2hlY2tlcih7IHZ1ZVRzYzogdHJ1ZSB9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlQ29uZmlnKFxuXHRkZWZpbmVDb25maWcoe1xuXHRcdHBsdWdpbnMsXG5cdFx0cmVzb2x2ZToge1xuXHRcdFx0YWxpYXM6IHtcblx0XHRcdFx0J0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuXHRcdFx0XHQnbjhuLWRlc2lnbi1zeXN0ZW0nOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuXHRcdFx0XHRsb2Rhc2g6ICdsb2Rhc2gtZXMnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGJ1aWxkOiB7XG5cdFx0XHRsaWI6IHtcblx0XHRcdFx0ZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJywgJ21haW4udHMnKSxcblx0XHRcdFx0bmFtZTogJ044bkRlc2lnblN5c3RlbScsXG5cdFx0XHRcdGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgbjhuLWRlc2lnbi1zeXN0ZW0uJHtmb3JtYXR9LmpzYCxcblx0XHRcdH0sXG5cdFx0XHRyb2xsdXBPcHRpb25zOiB7XG5cdFx0XHRcdC8vIG1ha2Ugc3VyZSB0byBleHRlcm5hbGl6ZSBkZXBzIHRoYXQgc2hvdWxkbid0IGJlIGJ1bmRsZWRcblx0XHRcdFx0Ly8gaW50byB5b3VyIGxpYnJhcnlcblx0XHRcdFx0ZXh0ZXJuYWw6IFsndnVlJ10sXG5cdFx0XHRcdG91dHB1dDoge1xuXHRcdFx0XHRcdGV4cG9ydHM6ICduYW1lZCcsXG5cdFx0XHRcdFx0Ly8gUHJvdmlkZSBnbG9iYWwgdmFyaWFibGVzIHRvIHVzZSBpbiB0aGUgVU1EIGJ1aWxkXG5cdFx0XHRcdFx0Ly8gZm9yIGV4dGVybmFsaXplZCBkZXBzXG5cdFx0XHRcdFx0Z2xvYmFsczoge1xuXHRcdFx0XHRcdFx0dnVlOiAnVnVlJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KSxcblx0dml0ZXN0Q29uZmlnLFxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFksT0FBT0EsVUFBUztBQUM1WixTQUFTLFdBQUFDLGdCQUFlO0FBQ3hCLFNBQVMsZ0JBQUFDLGVBQWMsZUFBQUMsb0JBQW1CO0FBQzFDLFNBQVMsd0JBQXdCO0FBQ2pDLE9BQU9DLGNBQWE7OztBQ0pwQjtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLEVBQ1gsVUFBWTtBQUFBLEVBQ1osUUFBVTtBQUFBLElBQ1IsTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLEVBQ1g7QUFBQSxFQUNBLE1BQVE7QUFBQSxFQUNSLFlBQWM7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLEtBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFXO0FBQUEsSUFDVCxPQUFTO0FBQUEsSUFDVCxPQUFTO0FBQUEsSUFDVCxXQUFhO0FBQUEsSUFDYixLQUFPO0FBQUEsSUFDUCxNQUFRO0FBQUEsSUFDUixTQUFX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Q0Y7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxFQUNkO0FBQ0Q7QUFFQSxJQUFNQyxXQUFVO0FBQUEsRUFDZixNQUFNO0FBQUEsSUFDTCxVQUFVO0FBQUEsRUFDWCxDQUFDO0FBQUEsRUFDREMsS0FBSTtBQUNMO0FBQ0EsSUFBSSxRQUFRLElBQUkseUJBQXlCLFFBQVE7QUFDaEQsRUFBQUQsU0FBUSxLQUFLRSxTQUFRLEVBQUUsUUFBUSxLQUFLLENBQUMsQ0FBQztBQUN2QztBQUVBLElBQU0sRUFBRSxtQkFBbUIsV0FBVyxTQUFTLFFBQVEsSUFBSSxRQUFRO0FBQ25FLElBQUksV0FBVyxXQUFXO0FBQ3pCLEVBQUFGLFNBQVE7QUFBQSxJQUNQLGlCQUFpQjtBQUFBLE1BQ2hCLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQTtBQUFBLE1BRVQsU0FBUztBQUFBO0FBQUE7QUFBQSxNQUdUO0FBQUEsTUFDQSxXQUFXO0FBQUEsTUFDWDtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFDRDtBQUVBLElBQU9HLHVCQUFRQztBQUFBLEVBQ2RDLGNBQWE7QUFBQSxJQUNaLFFBQVE7QUFBQTtBQUFBO0FBQUEsTUFHUCxHQUFJLGFBQWEsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDO0FBQUEsTUFDMUQsV0FBVyxJQUFJLFVBQVU7QUFBQSxJQUMxQjtBQUFBLElBQ0EsU0FBQUw7QUFBQSxJQUNBLFNBQVMsRUFBRSxNQUFNO0FBQUEsSUFDakIsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0oscUJBQXFCO0FBQUEsUUFDcEIsTUFBTTtBQUFBLFVBQ0wsZ0JBQWdCO0FBQUEsUUFDakI7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ04sbUJBQW1CO0FBQUEsTUFDbkIsUUFBUSxDQUFDLENBQUM7QUFBQSxNQUNWLFdBQVcsQ0FBQyxDQUFDO0FBQUEsTUFDYixlQUFlO0FBQUEsUUFDZCxXQUFXLENBQUMsQ0FBQztBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ1AsY0FBYztBQUFBLFlBQ2IsUUFBUTtBQUFBLFlBQ1IsS0FBSztBQUFBLFlBQ0wsR0FBRyxhQUFhO0FBQUEsVUFDakI7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNELENBQUM7QUFBQSxFQUNEO0FBQ0Q7IiwKICAibmFtZXMiOiBbInZ1ZSIsICJyZXNvbHZlIiwgImRlZmluZUNvbmZpZyIsICJtZXJnZUNvbmZpZyIsICJjaGVja2VyIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgInJlc29sdmUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicGx1Z2lucyIsICJ2dWUiLCAiY2hlY2tlciIsICJ2aXRlX2NvbmZpZ19kZWZhdWx0IiwgIm1lcmdlQ29uZmlnIiwgImRlZmluZUNvbmZpZyJdCn0K
