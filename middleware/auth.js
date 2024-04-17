import { useStorage } from '@vueuse/core'

export default defineNuxtRouteMiddleware((to) => {
    const token = useStorage('token').value
    if (!token) {
        return navigateTo('/login')
    }
})