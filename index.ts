// This is VS module entry point.
// Read more about modules: https://github.com/DivanteLtd/vue-storefront/blob/master/doc/api-modules/about-modules.md
import { module } from './store'
import { afterRegistration } from './hooks/afterRegistration'
import {
  VueStorefrontModule,
  VueStorefrontModuleConfig
} from '@vue-storefront/core/lib/module'
import { routes } from './router/routes'
import { initCacheStorage } from '@vue-storefront/core/helpers/initCacheStorage'
// This key will be used for creating extension keys in vuex and other key-based plugins.
// In case of conflicting keys across modules they'll be merged in favor of the least recently registered one
export const KEY = 'mollie'
// If you want to use cache storage for offline browsing you cna init it here
export const cacheStorage = initCacheStorage(KEY)
// Put everything that should extend the base app here so it can be later registered as VS module
const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: { modules: [{ key: KEY, module }] },
  afterRegistration,
  router: { routes }
}

export const Mollie = new VueStorefrontModule(moduleConfig)
