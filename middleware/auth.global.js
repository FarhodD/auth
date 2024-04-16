import { useStorage } from '@vueuse/core'
import { useAuthStore } from '~/store/auth'
import { storeToRefs } from 'pinia'

export default defineNuxtRouteMiddleware((to) => {
    const token = useStorage('token').value
    const store = useAuthStore()
    let { isAuth } = storeToRefs(store)
    console.log(isAuth.value);
    if (token) {
        if (to.name === 'login' || to.name === 'register') {
            isAuth.value = true
            return navigateTo('/')
        }
    }
    else {
        if (to.name === 'login' || to.name === 'register') {
            return
        } else {
            isAuth.value = false
            return navigateTo('/login')
        }
    }
})