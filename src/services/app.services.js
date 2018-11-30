import Vue from 'vue'

export default {
  post (url, data) {
    return new Promise((resolve, reject) => {
      Vue.http.post(url, data, this.options()).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  get (url, config) {
    return new Promise((resolve, reject) => {
      Vue.http.get(url, Object.assign(this.options(), config)).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  put (url, data) {
    return new Promise((resolve, reject) => {
      Vue.http.put(url, data, this.options()).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  delete (url) {
    return new Promise((resolve, reject) => {
      Vue.http.delete(url, this.options()).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  }
}
