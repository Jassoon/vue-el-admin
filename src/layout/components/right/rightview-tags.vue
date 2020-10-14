<template>
  <section>
  <!-- <transition-group class="head-tags"  enter-active-class="animate__animated animate__tada" leave-active-class="animate__animated animate__bounceOutRight" > -->
  <transition-group class="head-tags" name="list" mode="out-in">
      <span
        class="tag"
        v-for="tag in tags"
        :key="tag.name"
        @click="tagclose(tag)"
      >
        {{ tag.title }}
      </span>
  </transition-group>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // tags: ""
      show:true
    };
  },
  computed: {
    ...mapGetters(["tagsview"]),
    tags() {
      return this.tagsview.editTabs;
    }
  },
  mounted() {
    // this.tags = this.tagsview.editTabs;
    // console.log(this.tags);
  },
  methods: {
    tagclose(tag) {
      // console.log(tag);
      this.$store.dispatch("removeTab", tag.name);
      // if (this.$route.path !== this.tagsview.ispath) {
      //   this.$router.push(this.tagsview.ispath);
      // }
    },
    afterEnter(e){
        console.log(e)
      }
  }
};
</script>
<style scoped>
.head-tags {
  height: 30px;
  background: #545c64;
  display: flex;
}
.tag {
  width: 100px;
  height: 26px;
  padding: 0 10px;
  margin: 2px 5px 0 0;
  background: #fff;
  border: #333;
  overflow: hidden;
}
.list-enter-active{
  width: 1px;
  transition: all .1s;
  /* transform:2s; */
}
.list-leave-active{
  width: 100px;
  transition: all .1s;
  /* transform:2s; */
}
.list-enter-to{
  width: 100px;
}
.list-leave-to{
  width: 0px;
  opacity: 0;
}
</style>
