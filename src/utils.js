export const row = (content, styles = '') => `<div class="row" style="${styles}">${content}</div>`

export const col = content => `<div class="col-sm">${content}</div>`

export const css = (styles = {}) => typeof(styles) === 'string'
  ? styles
  : Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';')

export const block = (type) => `
  <form name="${type}">
    <h5>${type}</h5>
    <div class="form-group">
      <input class="form-control form-control-sm" name="value" placeholder="value">
    </div>
    <div class="form-group">
      <input class="form-control form-control-sm" name="styles" placeholder="styles">
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Add</button>
  </form>
  <hr />
`
