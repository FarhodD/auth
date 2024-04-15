import { useStorage } from '@vueuse/core'

export default defineNuxtRouteMiddleware((to) => {
    const isAuth = useStorage('token')
    if (isAuth.value) {
        if (to.name === 'login' || to.name === 'register') {
            return navigateTo('/')
        }
    }
    else {
        if (to.name === 'login' || to.name === 'register') {
            return
        } else {
            return navigateTo('/login')
        }
    }
})