import {resolve} from "path"
import {defineConfig} from "vite";

export default defineConfig({
    build:{
        lib: {
            entry: resolve(__dirname, "src", "index.ts"),
            name: 'service-usia-client',
            fileName: 'index',
            formats: ['es']
        },
        outDir: 'A:/Alone/PROJECTS/GTA5/LAtruckers/server/resources/ServiceUSIA/client',
        rollupOptions: {
            external: ["alt-client", "natives"]
        }
    }
})