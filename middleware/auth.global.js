import { useAuthStore } from "~/store/auth"

export default defineNuxtRouteMiddleware((to) => {
    const { token } = storeToRefs(useAuthStore())

    // if (localStorageToken) {
    //     token = true
    // }

    // if (localStorageToken && to?.name === 'login') {
        // return navigateTo('/')
    // }

    // if (!localStorageToken && to?.name !== 'login') {
    //     abortNavigation()
    //     return navigateTo('/login')
    // }
})