import Vue from 'vue'

export default {
  post (url, data) {
    return new Promise((resolve, reject) => {
      Vue.http.post(url, data).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  get (url) {
    return new Promise((resolve, reject) => {
      Vue.http.get(url).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  put (url, data) {
    return new Promise((resolve, reject) => {
      Vue.http.put(url, data).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  },
  delete (url) {
    return new Promise((resolve, reject) => {
      Vue.http.delete(url).then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
    })
  }
}
