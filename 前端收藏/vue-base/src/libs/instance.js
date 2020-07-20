const instance = {}

const init = (_Vue, _router) => {
  // Vue不是vue实例
  instance.Vue = _Vue
  // router实例
  instance.router = _router
}

export {
  init,
  instance
}
