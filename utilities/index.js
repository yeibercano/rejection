export const localStorageDefaults = {
  score: 0,
  accept: [],
  reject: []
}

export const checkSetKeys = function (defaults) {
  for(var key in defaults) {
    if (Array.isArray(defaults[key])) {
      if (localStorage.getItem(key) === null ) {
        localStorage.setItem(key, []);
      }
    } else {
      if (localStorage.getItem(key) === null) {
        localStorage.setItem('score', 0 )
      }
    }
  }
}
