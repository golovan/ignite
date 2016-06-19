#! /usr/bin/env node
'use strict'

import Generators from 'yeoman-generator'

const copyOverContainer = (context) => {
  // copy container template
  context.fs.copyTpl(
    context.templatePath('container.js.template'),
    context.destinationPath(`./App/Containers/${context.name}.js`),
    { name: context.name }
  )

  // copy container style template
  context.fs.copyTpl(
    context.templatePath('container-style.js.template'),
    context.destinationPath(`./App/Containers/Styles/${context.name}Style.js`),
    { name: context.name }
  )
}

class ContainerGenerator extends Generators.Base {

  constructor (args, options) {
    super(args, options)
    this.argument('name', { type: String, required: true })
  }

  generateApp () {
    // Copy over component files.
    copyOverContainer(this)
  }

  end () {
    console.log('Time to get cooking! 🍽 ')
  }
}

module.exports = ContainerGenerator
