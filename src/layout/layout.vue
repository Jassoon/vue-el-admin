<template>
  <el-row>
    <el-col :span="6">
      <Leftview></Leftview>
    </el-col>
    <el-col :span="18">
      <Rightview></Rightview>
    </el-col>
  </el-row>
</template>

<script>
import Leftview from "@/layout/components/LeftView";
import Rightview from "@/layout/components/RightView";

export default {
  data() {
    return {};
  },
  components: {
    Leftview,
    Rightview,
  },
};
</script>
