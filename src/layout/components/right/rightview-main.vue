<template>
  <div style="margin-bottom: 20px;">
    <el-tabs
      v-model="tagsview.editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="(item, index) in tagsview.editTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // editableTabsValue: "2",
      // tabIndex: 2,
    };
  },
  computed: {
    ...mapGetters(["tagsview"]),
  },
  methods: {
    removeTab(targetName) {
      this.$store.dispatch("removeTab", targetName);
    },


    removeTab1(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>
<style scoped></style>
