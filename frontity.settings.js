const settings = {
  name: "codesandbox-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Hola",
      description: "Soy Ramo y me conecté a nuestro WordPress"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Noticias", "/category/noticias/"]
          ],
          featured: {
            showOnList: false,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://new.tvpublica.com.ar/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
