import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://simon86000s.github.io/MontanesService',
  plugins: [react()],
})
