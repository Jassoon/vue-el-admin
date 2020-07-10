<template>
  <section class="head-tags">
    <el-tag 
    v-for="tag in tags"
    :key="tag.name"
    closable
    >{{tag.title}}</el-tag>
  </section>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  data(){
    return {
      tags:''
    }
  },
  computed:{
    ...mapGetters(["tagsview"])
  },
  mounted(){
    this.tags = this.tagsview.editTabs
    console.log(this.tags)
  },
  methods:{

  }
}
</script>
<style scoped>
.head-tags {
  height: 30px;
  background: #545c64;
}
</style>
