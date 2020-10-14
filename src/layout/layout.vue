<template>
  <article class="app-wp">
    <section class="left-view">
      <Leftview></Leftview>
    </section>
    <section class="right-view"
             :class="togglestate.togglestate?'right-close':'right-open'">
      <Rightview></Rightview>
    </section>
  </article>
</template>

<script>
import Leftview from '@/layout/components/LeftView'
import Rightview from '@/layout/components/RightView'
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(["togglestate"]),
  },
  components: {
    Leftview,
    Rightview,
  },
  mounted () {

  }
}
</script>
<style scoped>
.app-wp {
  width: 100%;
  height: 100%;
}
.left-view {
  position: fixed;
  height: 100%;
  background: #333;
  z-index: 100;
}
.right-view {
  position: relative;
}
.right-open {
  margin-left: 200px;
  transition: margin-left ease-in-out 0.3s;
}
.right-close {
  margin-left: 64px;
  transition: margin-left ease-in-out 0.29s;
}
</style>
