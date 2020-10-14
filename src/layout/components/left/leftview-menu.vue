<template>
  <section>
    <div class="logo"></div>
    <div class="menu">
      <div class="menutoggle"
           @click="ToggleMenu">
        <i class="menuarrow"
           :class="togglestate.togglestate ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left'"></i>
      </div>
      <el-menu :collapse="togglestate.togglestate"
               default-active="2"
               unique-opened
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               ref="menus">
        <SideBar :index="item.index"
                 v-for="item in routes"
                 :key="item.path"
                 :routes="item"
                 ref="sidebar"></SideBar>
      </el-menu>
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import SideBar from './sidebar'
export default {
  data () {
    return {
    }
  },
  watch: {
    routerpath: 'ToMenuPath',
  },
  computed: {
    ...mapGetters(['tabsview', 'togglestate']),
    routes () {
      return this.$router.options.routes
    },
    routerpath () {
      return this.$route.path
    },
  },
  mounted () {
    this.ToMenuPath()
  },
  components: {
    SideBar,
  },
  methods: {
    //左侧导航伸缩控制
    ToggleMenu () {
      this.$store.dispatch('togglemenu')
    },
    ToMenuPath () {
      let sopath = this.tabsview.editTabs
      let editcons = {
        editableTabsValue: '0',
        title: '首页',
        path: '/home',
      }
      if (sopath.length !== 0) {
        let path = sopath.filter((item) => {
          return item.ispath === this.routerpath
        })
        if (path.length !== 0) {
          this.routes.forEach((el, i) => {
            if (el.children) {
              el.children.forEach((it) => {
                if (it.path == path[0].ispath && it.path !== '/home') {
                  this.$refs.menus.open(el.path)
                  editcons.editableTabsValue = path[0].name
                  editcons.title = it.meta.title
                  editcons.path = it.path
                }
              })
            }
          })
        } else {
          let nameNum = sopath.slice(-1)[0].name
          this.routes.forEach((el, i) => {
            if (el.children) {
              el.children.forEach((it) => {
                if (it.path == this.routerpath) {
                  this.$refs.menus.open(el.path)
                  editcons.editableTabsValue = nameNum++
                  editcons.title = it.meta.title
                  editcons.path = it.path
                }
              })
            }
          })
        }
        this.$store.dispatch('addtabs', editcons)
      } else {
        this.$store.dispatch('addtabs', editcons)
      }
    },
    handleOpen (key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    },
  },
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.logo {
  width: 100%;
  height: 120px;
  background: #333;
  color: #fff;
  text-align: center;
}
.menu {
  position: relative;
}
.menutoggle {
  width: 23px;
  height: 70px;
  position: absolute;
  background: #333;
  right: -25px;
  top: 300px;
  cursor: pointer;
  padding: 50px 0 0 2px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  .menuarrow {
    font-size: 20px;
    color: #fff;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border: none;
  background: #333;
}

::v-deep .el-submenu__title {
  color: #fff;
}
::v-deep .el-submenu__title:hover {
  background: #666;
}
::v-deep .el-menu-item:hover {
  background: #ccc;
}
::v-deep .router-link-active li:hover {
  background: coral;
}
</style>
