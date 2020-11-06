const settings = {
  "name": "conceptuelle",
  "state": {
    "frontity": {
      "url": "localhost:3000",
      "title": "conceptuelle",
      "description": "Analytic philosophy from a phenomenological perspective"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Laws of Form",
              "/category/laws-of-form/"
            ],
            [
              "About Me",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost:8888/conceptuelle/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
