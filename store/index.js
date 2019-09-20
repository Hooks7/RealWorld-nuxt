// console.log('vuex')
// 此处在客户端和服务端都会执行

// cookieparser 是node.js中的第三方模块
// 作用：解析请求头中的cookie字符串，把cookie字符串解析成对象 name=zs&age=18 ==> {name:'zs', age:18}
const cookieparser = process.server ? require('cookieparser') : undefined

// 在node中获取cookie   req.headers.cookie

// nuxt中store中的state 必须是函数
export const state = () => {
  return {
    user: null
  }
}
export const mutations = {
  setUser (state, user) {
    state.user = user
  }
}
export const actions = {
  // nuxtServerInit 在服务器上执行
  // 项目在服务端初始化的时候，先获取浏览器传到服务器的cookie，判断是否有登录状态
  // 第一个参数，是一个对象这个对象的属性和store的属性和方法一样
  // 第二个参数，是一个对象，可以获取到req对象，node.js中的请求对象
  nuxtServerInit ({ commit }, { req }) {
    // 获取从cookie中获取到的登录状态
    let user = null
    if (req.headers.cookie) {
      // cookieparser 把字符串解析成对象 name=zs&age=18 ==> {name:'zs', age:18}
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  }
}
