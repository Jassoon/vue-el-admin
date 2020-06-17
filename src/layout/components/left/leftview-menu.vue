<template>
  <section>
    <div class="logo">LOGO</div>
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
        ></Sidebar>
      </el-menu>
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Sidebar from "./sidebar";
export default {
  data() {
    return {
      // addtags: null,
      menuname: "选项1",
    };
  },
  watch:{
    routerpath:"menuoc"
  },
  computed: {
    ...mapGetters(["tagsview"]),
    routes() {
      return this.$router.options.routes;
    },
    routerpath(){
     return this.$route.path
    }
  },
  mounted(){
  },
  components: {
    Sidebar,
  },
  methods: {
    // ...mapActions({"addtags"}),
    // addtag() {
    //   this.$store.dispatch("addtags", this.menuname);
    // },
    menuoc(){
      let sopath = this.tagsview.editTabs;
      let path = sopath.filter((item) => {
        return item.ispath === this.routerpath;
      });
      this.routes.forEach((el,i ) => {
        if(el.children){
         el.children.forEach(it =>{
            if(it.path == path[0].ispath){
              this.$refs.menus.open(el.path)
            }
          })
        }
      });

    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
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
