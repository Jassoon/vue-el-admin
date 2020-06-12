<template>
  <section>
    <div class="logo"  @click="menuoc">LOGO</div>
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
    
  },
  computed: {
    ...mapGetters(["tagsview"]),
    routes() {
      // console.log(this.$router.options);
      // console.log(this.$router.options.routes);
      return this.$router.options.routes;
    },
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
      this.$refs.menus.open('this.tagsview')
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
