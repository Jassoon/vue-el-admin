<template>
  <section class="head-tags">
    <div>
      <!-- <el-button size="small" @click="addTab(editableTabsValue)">
        add tab
      </el-button> -->
      {{ editableTabs }}
    </div>
    <el-tabs v-model="addtags" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in addtags"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      editableTabsValue: "2",
      editableTabs: 0,
      // editableTabs: $store.getters.addtags,
      // editableTabs: [
      //   {
      //     title: "Tab 1",
      //     name: "1",
      //     content: "Tab 1 content",
      //   },
      // ],
      tabIndex: 0,
    };
  },
  computed: {
    ...mapGetters(["addtags"]),
  },
  methods: {
    // addtags(targetName) {},
    // addTab(targetName) {
    //   console.log(this.addtags);
    //   let newTabName = ++this.tabIndex + "";
    //   this.editableTabs.push({
    //     title: this.addtags,
    //     name: newTabName,
    //     content: "New Tab content",
    //   });
    //   this.editableTabsValue = newTabName;
    // },
    removeTab(targetName) {
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
