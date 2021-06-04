
const formatRoutes = (aMenu) => {
  const aRouter = []
  aMenu.forEach(oMenu => {
    const {
      path,
      component,
      name,
      icon,
      children
    } = oMenu
    if (!validatenull(component)) {
      let filePath;
      const oRouter = {
        path: path,
        component(resolve) {
          let componentPath = ''
          if (component === 'Layout') {
            require(['../views/layout/Layout'], resolve)
            return
          } else {
            componentPath = component
          }
          require([`../${componentPath}.vue`], resolve)
        },
        name: name,
        icon: icon,
        children: validatenull(children) ? [] : formatRoutes(children)
      }
      aRouter.push(oRouter)
    }
  })
  return aRouter
}

initMenu(router, menu){
  if (menu.length === 0) {
    return
  }
  let menus = formatRoutes(menu);

  let unFound = { path: '*', redirect: '/404', hidden: true }
  menus.push(unFound) //404组件最后添加
  router.addRoutes(menus)
  store.commit('ADD_ROUTERS', menus)
}

router.beforeEach((to, from, next) => {
  NProgress.start()//进度条包 npm安装
  if (getToken()) {
    /*有 token，已经登录成功*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完 user_info 信息
        store.dispatch('GetInfo').then(res => { // 拉取 user_info
          const roles = res.roles
          store.dispatch("GetMenu").then(data => {
            initMenu(router, data);
          });
          next() // 路由继续
        }).catch((err) => {
          store.dispatch('FedLogOut').then(() => {
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' })
          })
        })
      } else {
        next()
      }
    }
  } else {
    /* 无 token*/
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})