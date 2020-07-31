<template>
  <div class="product">
    <NavBar transparent="not"></NavBar>
    <main>
      <MeetStratos></MeetStratos>
      <Philosophy></Philosophy>
      <OurProduct></OurProduct>
      <SeeInAction></SeeInAction>
      <Interested></Interested>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import MeetStratos from '@/components/Product/MeetStratos.vue';
import Philosophy from '@/components/Product/Philosophy.vue';
import OurProduct from '@/components/Product/OurProduct.vue';
import SeeInAction from '@/components/Product/SeeInAction.vue';
import Interested from '@/components/Product/Interested.vue';
export default {
  name: 'Product',
  components: {
    MeetStratos,
    Philosophy,
    OurProduct,
    SeeInAction,
    Interested
  },
  mounted() {
    document.body.classList.remove('open');
    document.documentElement.classList.remove('open');
  }
};
</script>
<style lang="sass" scoped>

.product
  display: grid
  grid-template-rows: auto 1fr auto
</style>
