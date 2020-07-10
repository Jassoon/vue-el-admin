<template>
  <section>
    <Rightviewnav></Rightviewnav>
    <Rightviewbreadcrumb></Rightviewbreadcrumb>
    <Rightviewtags></Rightviewtags>
    <Rightviewmain></Rightviewmain>
  </section>
</template>
<script>
import Rightviewnav from "@/layout/components/right/rightview-nav";
import Rightviewtags from "@/layout/components/right/rightview-tags";
import Rightviewbreadcrumb from "@/layout/components/right/rightview-breadcrumb";
import Rightviewmain from "@/layout/components/right/rightview-main";
export default {
  data() {
    return {};
  },
  components: {
    Rightviewnav,
    Rightviewtags,
    Rightviewbreadcrumb,
    Rightviewmain,
  },
};
</script>
