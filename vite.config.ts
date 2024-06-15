import {resolve} from "path"
import {defineConfig} from "vite";

export default defineConfig({
    build:{
        lib: {
            entry: resolve(__dirname, "src", "index.ts"),
            name: 'USIA-client',
            fileName: 'index',
            formats: ['es']
        },
        outDir: resolve(__dirname, "dist"),
        rollupOptions: {
            external: ["alt-client", "natives"]
        }
    }
})