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
        'query-string',
        '@chakra-ui/react',
        '@emotion/react',
        '@fingerprintjs/fingerprintjs',
        'ajv',
        'framer-motion',
        'graphql',
        'graphql-ws',
        'libphonenumber-js',
        'react',
        'react-dom',
        'react-intl',
        'styled-components',
      ],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
})
