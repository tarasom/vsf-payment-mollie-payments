import { isServer } from '@vue-storefront/core/helpers'

export default {
  data () {
    return {
      productPageRoutes: [
        'product',
        'virtual-product',
        'bundle-product',
        'simple-product',
        'downloadable-product',
        'grouped-product',
        'configurable-product'
      ],
      isProductPage: false,
      isCheckoutPage: false
    }
  },
  watch: {
    '$route.name': function () {
      this.setCurrentPage()
    }
  },
  computed: {
    canGoBack () {
      return !this.isHistoryEmpty() && this.isProductPage
    },
    noHeaderFooterPage () {
      return (this.$route.name === 'order-status' && !this.$store.state.mollie.paymentStatusFetched) || this.$store.state.checkout.isThankYouPage
    }
  },
  created () {
    this.setCurrentPage()
  },
  methods: {
    setCurrentPage () {
      this.isProductPage = this.productPageRoutes.includes(this.$route.name)
      this.isCheckoutPage = this.$route.name === 'checkout'
    },
    // Check if history is empty
    isHistoryEmpty () {
      if (!isServer) {
        return window.history.length <= 1
      }

      return false
    }
  }
}
