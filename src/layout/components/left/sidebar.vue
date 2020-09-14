<template>
  <div>
    <el-submenu :index="routes.path" v-if="!routes.hidden">
      <template slot="title">
        <i :class="'el-icon-' + routes.meta.icon"></i>
        <span>{{ routes.meta.title }}</span>
      </template>
      <template :index="citem.index" v-for="citem in routes.children">
        <Links :to="citem.path" :key="citem.path">
          <el-menu-item
            @click="
              addtab(
                {
                  editableTabsValue: tabsview.editableTabsValue,
                  title: citem.meta.title,
                  path: citem.path,
                },
                0
              )
            "
          >
            {{ citem.meta.title }}
          </el-menu-item>
        </Links>
      </template>
    </el-submenu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Links from '../links'
export default {
  data() {
    return {}
  },
  components: {
    Links,
  },
  props: {
    routes: Object,
  },
  computed: {
    ...mapGetters(['tabsview']),
  },
  methods: {
    addtab(editcons, num) {
      let sopath = this.tabsview.editTabs
      // if(sopath.length!==0){
      this.$store.dispatch('addtabs', editcons)
      // }
    },
  },
}
</script>
<style lang="scss" scoped>
.router-link-active li {
  background: coral;
}
</style>
