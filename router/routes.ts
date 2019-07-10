import { RouteConfig } from 'vue-router'
import OrderStatus from '../pages/OrderStatus.vue'

export const routes: RouteConfig[] = [
  { name: 'order-status', path: '/order-status/:order_token', component: OrderStatus }
]
