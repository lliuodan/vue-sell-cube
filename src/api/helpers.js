import axios from 'axios'

const ERR_OK = 0
// 封装get方法
export function get(url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      // 通过结构赋值，获取对象里面的errno,和 data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {

    })
  }
}
