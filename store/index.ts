import { Module } from 'vuex'
import { MollieState } from '../types/MollieState'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'

export const module: Module<MollieState, any> = {
  namespaced: true,
  state: {
    mollie_methods: [],
    mollie_issuers: [],
    issuer: null,
    paymentMethod: '',
    paymentStatusFetched: false
  },
  mutations,
  actions,
  getters
}
