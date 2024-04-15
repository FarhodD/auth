import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to) => {
    const { token } = storeToRefs(useAuthStore());

    // if (token.value) {
    //     if (to.name === 'login' || to.name === 'register') {
    //         return navigateTo('/');
    //     }
    // }
    // else {
    //     if (to.name === 'login' || to.name === 'register') {
    //         return;
    //     } else {
    //         abortNavigation();
    //         return navigateTo('/login');
    //     }
    // }
});
