<template>
  <section class="head-nav">
    <el-row class="head-menu">
      <el-col :span="8">星期一</el-col>
      <el-col :span="8">欢迎登录“admin”</el-col>
      <el-col :span="4">放大</el-col>
      <el-col :span="4">头像</el-col>
    </el-row>
  </section>
</template>
<style scoped>
.head-nav {
  height: 30px;
  background: #545c64;
}
.head-menu {
  width: 500px;
  float: right;
  overflow: hidden;
}
</style>
