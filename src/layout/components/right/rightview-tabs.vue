<template>
  <div>
    <scrollPane>
      <div class="edittabs">
        <div
          v-for="item in tabsview.editTabs"
          ref="tab"
          :key="item.name"
          class="tab"
        >
          <router-link
            :to="item.ispath"
            @contextmenu.prevent.native="operationMenu(item.name, $event)"
          >
            {{ item.title }}
          </router-link>
          <el-button
            v-if="item.title !== '首页'"
            type=""
            round
            size="mini"
            icon="el-icon-close"
            class="tab-close"
            @click="removeTab(item.name)"
          ></el-button>
        </div>
      </div>
    </scrollPane>
    <ul
      v-show="menushow"
      :style="{ left: left + 'px', top: top + 'px' }"
      class="opmenu"
    >
      <li @click="removeTab(nowtab)">关闭当前</li>
      <li @click="removeTabother(nowtab)">关闭其他</li>
      <li @click="removeTaball">关闭所有</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ScrollPane from '@/components/ScrollPane'
export default {
  data() {
    return {
      left: 0,
      top: 0,
      menushow: false,
      nowtab: -1,
    }
  },
  components: {
    ScrollPane,
  },
  mounted() {},
  watch: {
    menushow(value) {
      if (value) {
        document.body.addEventListener('click', this.opcloseMenu)
      } else {
        document.body.removeEventListener('click', this.opcloseMenu)
      }
    },
    routerpath: 'editclickTab',
  },
  computed: {
    ...mapGetters(['tabsview']),
    routes() {
      return this.$router.options.routes
    },
    routerpath() {
      return this.$route.path
    },
  },
  methods: {
    removeTab(targetEvent) {
      this.$store.dispatch('removeTab', targetEvent)
      if (this.$route.path !== this.tabsview.ispath) {
        this.$router.push(this.tabsview.ispath)
      }
    },
    removeTabother(targetName) {
      let tag = this.tabsview.editTabs
      tag.forEach((e, i) => {
        if (e.name !== targetName) {
          this.removeTab(e.name)
        }
      })
    },
    removeTaball() {
      let tag = this.tabsview.editTabs
      tag.forEach((e, i) => {
        this.removeTab(e.name)
      })
    },
    clickTab(tab) {
      let sopath = this.tabsview.editTabs
      let path = sopath.filter((item) => {
        return item.name === tab.name
      })
      if (this.routerpath !== path[0].ispath) {
        this.$router.push(path[0].ispath)
      }
    },
    editclickTab(tab) {
      let sopath = this.tabsview.editTabs
      let path = sopath.filter((item) => {
        return item.ispath === tab
      })
    },
    operationMenu(i, e) {
      this.nowtab = i
      const menuMinWidth = 100
      const offsetLeft = this.$el.getBoundingClientRect().left
      const offsetWidth = this.$el.offsetWidth
      const maxLeft = offsetWidth - menuMinWidth
      const left = e.clientX - offsetLeft
      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }
      this.top = e.clientY
      this.menushow = true
    },
    opcloseMenu() {
      this.menushow = false
    },
  },
}
</script>
<style lang="scss" scoped>
.el-button.tab-close {
  padding: 5px 5px;
  width: 23px;
  height: 23px;
  background: none;
}
.edittabs {
  display: flex;
  height: 30px;
  line-height: 30px;
  text-align: center;
  padding: 5px;
  background: #eee;
  .tab {
    width: 120px;
    margin: 0 10px 0 0;
    border: 1px solid #ccc;
    background: #eee;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      width: 70%;
    }
    span {
      width: 30%;
    }
  }
}
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
