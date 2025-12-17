import path from "path"
import { fileURLToPath } from "url" // Thêm dòng này
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// Giả lập __dirname cho ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})