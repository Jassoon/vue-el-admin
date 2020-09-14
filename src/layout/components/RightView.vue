<template>
  <section>
    <RightViewNav></RightViewNav>
    <RightViewTags></RightViewTags>
    <RightViewTabs></RightViewTabs>
    <RightViewMain></RightViewMain>
  </section>
</template>
<script>
import RightViewNav from '@/layout/components/right/rightview-nav'
import RightViewTags from '@/layout/components/right/rightview-tags'
import RightViewTabs from '@/layout/components/right/rightview-tabs'
import RightViewMain from '@/layout/components/right/rightview-main'
export default {
  data() {
    return {}
  },
  components: {
    RightViewNav,
    RightViewTags,
    RightViewTabs,
    RightViewMain,
  },
}
</script>
