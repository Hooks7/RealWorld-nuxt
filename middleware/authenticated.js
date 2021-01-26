// 判断是否有登录状态，如果没有登录状态，跳转到login

export default function ({ store, redirect }) {
  if (!store.state.user) {
    return redirect('/login')
  }
}
