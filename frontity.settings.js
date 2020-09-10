const settings = {
  name: "codesandbox-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Agarrala",
      description: "que no muerde"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"]
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
          
          <!-- api: "https://test.frontity.org/wp-json" -->
           
          

          api: "https://new.tvpublica.com.ar/wp-json"
          
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
