<template>
  <div v-if="type === 'reva'">
    <RevaLogin-component />
  </div>
  <div v-else-if="type === 'okta'">
    <OktaLoginComponent />
  </div>
</template>

<script>
// import OctaLoginComponent from '../OktaLogin.component';
import {OktaLoginComponent } from '../../../plugins/okta';

export default {
  components: {OktaLoginComponent},
  data() {
    return {
    }
  },
  computed:  {
    type: function () {
      console.log(this.$store.state.configuration.services.type);
      return this.$store.state.configuration.services.type;
    }
  }
}
</script>

<style scoped>

</style>
