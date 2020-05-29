<template>
  <div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ routes.name }}</span>
      </template>
      <el-menu-item
        :index="citem.index"
        v-for="citem in routes.children"
        :key="citem.path"
      >
        {{ citem.name }}
      </el-menu-item>
    </el-submenu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    routes: Object,
  },
  components: {},
  computed: {
    shjj() {
      console.log(this.routes);
      return routes;
    },
  },
};
</script>
<style lang="scss" scoped></style>
