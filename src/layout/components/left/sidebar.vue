<template>
  <div>
    <el-submenu :index="routes.path" v-if="!routes.hidden">
      <template slot="title">
        <i :class="'el-icon-' + routes.meta.icon"></i>
        <span>{{ routes.meta.title }}</span>
      </template>
      <template :index="citem.index" v-for="citem in routes.children">
        <!-- <Links :to="citem.path" :key="citem.path" > -->
        <router-link :to="citem.path" :key="citem.path">
          <!-- <el-menu-item @click="addtag(citem.meta.title)" to="/guide"> -->
          <el-menu-item @click="addtag({editableTabsValue:tagsview.editableTabsValue ,title:citem.meta.title})" to="/guide">
            {{ citem.meta.title }}
          </el-menu-item>
        </router-link>  
        <!-- </Links> -->
      </template>
    </el-submenu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Links from "../links"
export default {
  data() {
    return {
      
    };
  },
  components:{
    Links
  },
  props: {
    routes: Object,
  },
  computed: {
    ...mapGetters(["tagsview"]),
  },
  methods:{
     addtag(title) {
      this.$store.dispatch("addtags", title);
    },
  }
};
</script>
<style lang="scss" scoped></style>
