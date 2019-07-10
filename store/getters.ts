import { MollieState } from '../types/MollieState'
import { GetterTree } from 'vuex'
import { strictEqual } from 'assert'

export const getters: GetterTree<MollieState, any> = {
  paymentIssuers (state) {
    return state.mollie_issuers
  },
  methods (state) {
    return state.mollie_methods
  },
  issuer (state) {
    return state.issuer
  },
  paymentMethodDetails (state) {
    return state.paymentMethod
  }
}
