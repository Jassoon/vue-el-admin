<template>
  <div style="margin-bottom: 20px;">
    <el-tabs
      v-model="tagsview.editableTabsValue"
      type="card"
      closable
      addable
      editable
      @tab-remove="removeTab"
      @tab-click="clickTab"
    >
      <!-- <router-link to="/icons"> -->
      <el-tab-pane
        v-for="item in tagsview.editTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
        <router-view></router-view>
      </el-tab-pane>
      <!-- </router-link> -->
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // editableTabsValue: "2",
    };
  },
  computed: {
    ...mapGetters(["tagsview"]),
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {
    removeTab(targetName) {
      this.$store.dispatch("removeTab", targetName);
    },
    clickTab(tab) {
      let sopath = this.tagsview.editTabs;
      let pat = sopath.filter((item) => {
        return item.name === tab.name;
      });
      this.$router.push(pat[0].ispath);
      let un = this.routes.forEach((el,i ) => {
        if(el.children){
         el.children.forEach(it =>{
            if(it.path == pat[0].ispath){
              this.$store.dispatch("menuco", el);
            }
          })
        }
      });

    },
  },
};
</script>
<style scoped></style>
