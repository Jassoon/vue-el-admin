<template>
  <section>
    <div class="logo"></div>
    <div class="menu">
      <el-menu
        default-active="2"
        unique-opened
        class="el-menu-vertical-demo"
        @open="2"
        @close="handleClose"
        ref="menus"
      >
        <Sidebar
          :index="item.index"
          v-for="item in routes"
          :key="item.path"
          :routes="item"
          ref="sidebar"
        ></Sidebar>
      </el-menu>
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Sidebar from './sidebar'
export default {
  data() {
    return {
      menuname: '选项1',
    }
  },
  watch: {
    routerpath: 'toMenupath',
  },
  computed: {
    ...mapGetters(['tabsview']),
    routes() {
      return this.$router.options.routes
    },
    routerpath() {
      return this.$route.path
    },
  },
  mounted() {
    this.toMenupath()
  },
  components: {
    Sidebar,
  },
  methods: {
    // ...mapActions({"addtabs"}),
    // addtag() {
    //   this.$store.dispatch("addtabs", this.menuname);
    // },
    toMenupath() {
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
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
}
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 120px;
  background: #000;
  color: #fff;
  text-align: center;
}
.menu {
  background: #545c64;
}
.el-menu {
  border: none;
}
</style>
