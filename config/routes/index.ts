export default [
  // 基于 src/page 路径
  { path: '/', component: './demo/index' },
  { path: '/footerPage', component: './footerPage/index' },
  { exact: true, path: '/', redirect: '/' },
]
