<template>
  <section class="head-tags">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.head-tags {
  height: 30px;
  background: #e1e1e1;
}
.el-breadcrumb {
  line-height: 2;
}
</style>
