<template>
  <div>
    <h4>{{ $t('Choose your bank') }}</h4>
    <base-select
      class="col-xs-6 mb10"
      name="iDealIssuer"
      :options="idealIssuers"
      :selected="iDealIssuer"
      :placeholder="$t('Choose your bank')"
      v-model="iDealIssuer"
      autocomplete="ideal-issuer"
      @change="setIdealIssuer"
    />
  </div>
</template>

<script>
import BaseSelect from 'theme/components/core/blocks/Form/BaseSelect'

export default {
  components: {
    BaseSelect
  },
  data () {
    return {
      iDealIssuer: ''
    }
  },
  watch: {
    'iDealIssuer': function () {
      this.setIdealIssuer()
    }
  },
  computed: {
    payment () {
      return this.$store.state.checkout.paymentDetails
    },
    idealIssuers () {
      return this.$store.state.mollie.mollie_issuers.map((item) => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }
  },
  methods: {
    setIdealIssuer () {
      this.$bus.$emit('checkout-payment-method-changed', { issuer: this.iDealIssuer })
    }
  }
}
</script>
