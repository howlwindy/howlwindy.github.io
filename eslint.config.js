import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: true,
  ignores: [
    'node_modules/**/*',
  ],
})
