import { useStorage } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/store/auth'


export default defineNuxtRouteMiddleware((to) => {
    let { isAuth } = storeToRefs(useAuthStore())
    const token = useStorage('token').value
    if (token) {
        return isAuth.value = true
    }
    return navigateTo('/login')
})