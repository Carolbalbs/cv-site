module.exports = {
    plugins: {
      'tailwindcss': {},
      'autoprefixer': {},
      'postcss-import': {},
    },
  }
  {{ with resources.Get "css/main.css" | postCSS }}
  <link rel="stylesheet" href="{{ .RelPermalink }}">
{{ end }}