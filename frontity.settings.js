const settings = {
  name: "codesandbox-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Hola",
      description: "Prueba de conexión"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Inicio", "/"],
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
          api: "http://api.tvpublica.com.ar/wp-json/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
