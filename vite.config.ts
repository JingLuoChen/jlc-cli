import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            },
        },
    },
    plugins: [vue(), vueJsx({})],
    build: {
        outDir: 'lib',
        rollupOptions: {
            // 请确保外部化那些你的库中不需要的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
            }
        },
        lib: {
            entry: './packages/index.ts',
            name: 'micoCom',
            fileName: "mico-com",
            formats: ["es", "umd"],
        }
    },
})
