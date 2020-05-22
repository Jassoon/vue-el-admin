<template>
  <section>
    <Rightviewnav></Rightviewnav>
    <Rightviewtags></Rightviewtags>
    <Rightviewmain></Rightviewmain>
  </section>
</template>
<script>
import Rightviewnav from "@/layout/components/right/rightview-nav";
import Rightviewtags from "@/layout/components/right/rightview-tags";
import Rightviewmain from "@/layout/components/right/rightview-main";
export default {
  data() {
    return {};
  },
  components: {
    Rightviewnav,
    Rightviewtags,
    Rightviewmain,
  },
};
</script>
