<template>
  <article class="app-wp">
    <section class="left-view">
      <Leftview></Leftview>
    </section>
    <section class="right-view">
      <Rightview></Rightview>
    </section>
  </article>
</template>

<script>
import Leftview from '@/layout/components/LeftView'
import Rightview from '@/layout/components/RightView'

export default {
  data() {
    return {}
  },
  components: {
    Leftview,
    Rightview,
  },
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
  margin-left: 200px;
  position: relative;
}
</style>
