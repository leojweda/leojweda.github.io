const structuredData = {
  schema: {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Leo Jweda",
    "jobTitle": "Senior Software Developer",
    "url": "https://leojweda.com",
    "image": "https://leojweda.com/images/leo-jweda.png",
    "gender": "Male",
    "sameAs": [
      "https://github.com/leojweda",
      "https://twitter.com/leojweda",
      "https://stackoverflow.com/users/89512/leo-jweda",
      "https://www.linkedin.com/in/leojweda/",
      "https://www.youtube.com/@leojweda"
    ]
  },
  init: function () {
    const o = document.createElement('script')
    o.type = 'application/ld+json'
    o.innerHTML = JSON.stringify(structuredData.schema)
    const d = document; (d.head || d.body).appendChild(o)
  }
}
structuredData.init()