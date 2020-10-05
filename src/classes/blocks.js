import {col, css, row} from '../utils';

export class Block {
  constructor(value, options = {}) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('toHTML should be implemented')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {wrap = 'h1', styles} = this.options
    return row(col(`<${wrap}>${this.value}</${wrap}>`), css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {alt = '', imageStyles, styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(styles))
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {styles} = this.options
    return row(this.value.map(col).join(''), css(styles))
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {styles} = this.options
    return row(col(`<p>${this.value}</p>`), css(styles))
  }
}