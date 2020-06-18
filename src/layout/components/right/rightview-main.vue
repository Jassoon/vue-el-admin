<template>
  <div style="margin-bottom: 20px; position:relative; min-height:500px;">
    <el-tabs
      v-model="tagsview.editableTabsValue"
      type="card"
      closable
      addable
      editable
      @tab-remove="removeTab"
      @tab-click="clickTab"
      @contextmenu.prevent.native="operationMenu(tagsview,$event)"
    >
    
      <!-- <router-link to="/icons"> -->
      <el-tab-pane
        v-for="item in tagsview.editTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
        <p style="height:500px;">111111111111111</p>
        <router-view></router-view>
      </el-tab-pane>
      <!-- </router-link> -->
      <ul v-show="menushow" :style="{left:left+'px',top:top+'px'}"  class="opmenu">
        <li @click="removeTab(tagsview.editableTabsValue)">关闭当前</li>
        <li @click="removeTabother(tagsview.editableTabsValue)">关闭其他</li>
        <li @click="removeTaball">关闭所有</li>
      </ul>
    </el-tabs>
    
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      left:0,
      top:0,
      menushow: false,
    };
  },
  watch:{
     menushow(value) {
      if (value) {
        document.body.addEventListener("click", this.opcloseMenu);
      } else {
        document.body.removeEventListener("click", this.opcloseMenu);
      }
    }
  },
  computed: {
    ...mapGetters(["tagsview"]),
    routes() {
      return this.$router.options.routes;
    },
    routerpath(){
     return this.$route.path
    }
  },
  methods: {
    removeTab(targetName) {
        this.$store.dispatch("removeTab", targetName);
        if(this.$route.path!==this.tagsview.ispath){
          this.$router.push(this.tagsview.ispath);
        }
    },
    removeTabother(targetName){
      let tag = this.tagsview.editTabs;
      tag.forEach((e,i)=>{
        if(e.name !==targetName){
          this.removeTab(e.name)
        }
      })
    },
    removeTaball(){
      let tag = this.tagsview.editTabs;
      tag.forEach((e,i)=>{
        this.removeTab(e.name)
      })
    },
    clickTab(tab) {
      let sopath = this.tagsview.editTabs;
      let pat = sopath.filter((item) => {
        return item.name === tab.name;
      });
      if(this.routerpath!==pat[0].ispath){
        this.$router.push(pat[0].ispath);
        this.$store.dispatch("editTab",{tab:tab,path:this.routerpath})
      }      
      
    },
    operationMenu(t,e){
      const menuMinWidth = 105;
      const offsetLeft = this.$el.getBoundingClientRect().left;
      const offsetWidth = this.$el.offsetWidth; 
      const maxLeft = offsetWidth - menuMinWidth; 
      const left = e.clientX - offsetLeft + 15; 
      if (left > maxLeft) {
        this.left = maxLeft;
      } else {
        this.left = left;
      }
      this.top = e.offsetY;
      this.menushow = true
    },
    opcloseMenu(){
      this.menushow = false
    }
  },
  
};
</script>
<style lang="scss" scoped>
  .opmenu {
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
</style>
