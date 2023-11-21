import react from '@vitejs/plugin-react'
// import * as path from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// const aliases = ['components', 'utils', 'hooks', 'configs']

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
})
