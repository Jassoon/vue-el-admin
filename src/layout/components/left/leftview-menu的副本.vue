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
        <el-submenu
          :index="item.id"
          v-for="item in menunames"
          :key="item.index"
        >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group title="分组1">
            <!-- <template slot="title">分组1</template> -->
            <el-menu-item
              :index="itemm.id"
              v-for="itemm in item.menu1"
              :key="itemm.index"
              @click="addtag"
            >
              {{ itemm.title }}
            </el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group title="分组2">
            <el-menu-item
              :index="itemm.id"
              v-for="itemm in item.menu2"
              :key="itemm.index"
            >
              {{ itemm.title }}
            </el-menu-item>
          </el-menu-item-group>

          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <!-- <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
      </el-menu>
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // addtags: null,

      menuname: "选项1",
      menunames: [
        {
          id: "1",
          title: "导航一",
          menu1: [
            { id: "1-1", title: "1", Path: "/" },
            { id: "1-2", title: "2", Path: "/" },
          ],
          menu2: [
            { id: "1-3", title: "1", Path: "/" },
            { id: "1-4", title: "2", Path: "/" },
            {
              id: "1-5",
              title: "3",
              Path: "/",
              menu: [{ id: "1-5-1", title: "4", Path: "/" }],
            },
          ],
        },
        {
          id: "2",
          title: "导航二",
          menus: [
            { id: "2-1", title: "3", Path: "/" },
            { id: "2-2", title: "4", Path: "/" },
          ],
        },
      ],
    };
  },
  computed: {
    // ...mapGetters(["addtags"]),
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
