import faker from '@faker-js/faker'
var fs = require('fs')
var path = require('path')

for (var i = 0; i < 1000; i++) {
  generateMD()
}

function generateMD () {
  var fileName = faker.lorem.word() + '-' + faker.lorem.word()
  var fileContents = `---
title: "${faker.lorem.words()}"
layout: Page
---
${faker.lorem.sentence()}
`
  var outputPath = path.join('./', `${fileName}.md`)

  fs.writeFile(outputPath, fileContents, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log(outputPath + ' file generated')
  })
}