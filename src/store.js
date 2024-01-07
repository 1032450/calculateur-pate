import {reactive} from 'vue'

export const store = reactive({
    routes: [
        {
            path: "/",
            name: "Accueil",
            component: () => import('./views/AccueilView.vue')
        },
        {
            path: "/_ancienne",
            name: "Ancienne",
            component: () => import('./views/AncienneView.vue')
        },
        {
            path: "/_blanche",
            name: "Blanche",
            component: () => import('./views/BlancheView.vue')
        },
        {
            path: "/_ble",
            name: "Blé",
            component: () => import('./views/BleView.vue')
        },
        {
            path: "/_italienne",
            name: "Italienne",
            component: () => import('./views/IntalienneView.vue')
        },
        {
            path: "/_integral",
            name: "Intégral",
            component: () => import('./views/IntegralView.vue')
        },
        {
            path: "/_mie",
            name: "Mie",
            component: () => import('./views/MieView.vue')
        },
        {
            path: "/:pate",
            name: "Pate",
            component: () => import ('./views/CalculateurPate.vue')
        }
    ]
})