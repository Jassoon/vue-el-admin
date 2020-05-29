<template>
  <section>
    <div class="logo">LOGO</div>
    <div class="menu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
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
  computed: {
    // ...mapGetters(["addtags"]),
    routes() {
      // console.log(this.$router);
      // console.log(this.$router.options.routes);
      return this.$router.options.routes;
    },
  },
  components: {
    Sidebar,
  },
  methods: {
    // ...mapActions({"addtags"}),
    addtag() {
      this.$store.dispatch("addtags", this.menuname);
    },
    handleOpen(key, keyPath) {
      // this.$store.dispatch("addtags", "1");
      // console.log(this.$store);
      console.log(key, keyPath);
      console.log(this.routes);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
