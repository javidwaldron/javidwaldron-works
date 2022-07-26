export default {
  loading: {
    color: '#27C9ED',
    height: '2px'
  },
  css: [
    'public/style.css'
  ],
  modules: ["@nuxtjs/svg", "nuxt-pdf"],
  build: {
    extend(config) {
      const assetsLoader = config.module.rules.find(rule => rule.test.test('.png'));
      // Overwrite the test regex and add `pdf`
      assetsLoader.test = /\.(png|jpe?g|gif|webp|pdf)$/i;
      return config;
    },
  },
  env: {
    cvpw: process.env.cvpw,
    API_URL: process.env.API_URL,
    CONTENT_KEY: process.env.CONTENT_KEY
  },
  pwa: {
    icon: {
      source: 'https://cdn.glitch.global/c2f99bc4-f921-4cee-90b5-df019f304eee/favicon.png?v=1652244090700'
    }
  },
  target: 'static',
  generate: {
    fallback: "404.html"
  },
  router: {
    base: '/'
  },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
}