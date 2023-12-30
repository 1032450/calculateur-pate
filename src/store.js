import {reactive} from 'vue'

export const store = reactive({
    routes: [
        {
            path: "/",
            name: "Accueil",
            component: () => import('./views/AccueilView.vue')
        },
        {
            path: "/ancienne",
            name: "Ancienne",
            component: () => import('./views/AncienneView.vue')
        },
        {
            path: "/blanche",
            name: "Blanche",
            component: () => import('./views/BlancheView.vue')
        },
        {
            path: "/ble",
            name: "Blé",
            component: () => import('./views/BleView.vue')
        },
        {
            path: "/italienne",
            name: "Italienne",
            component: () => import('./views/IntalienneView.vue')
        },
        {
            path: "/integral",
            name: "Intégral",
            component: () => import('./views/IntegralView.vue')
        },
        {
            path: "/mie",
            name: "Mie",
            component: () => import('./views/MieView.vue')
        },
    ]
})