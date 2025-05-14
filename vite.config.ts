import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'LodestarAppElement',
      fileName: format => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
        '@emotion/react',
        '@chakra-ui/react',
        'framer-motion',
        'graphql',
        'graphql-ws',
        'react-intl',
        '@apollo/client',
        'libphonenumber-js',
        'ajv',
        'query-string'
      ],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
})
