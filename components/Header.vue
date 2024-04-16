<script setup>
import { useAuthStore } from '~/store/auth'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const router = useRouter()
const store = useAuthStore()
const { logout } = store
let { isAuth } = storeToRefs(store)
console.log(isAuth.value);

const onLogout = async () => {
    await logout()
    router.push('/login')
}
</script>

<template>
    <header class="bg-primaryColor min-h-12 w-full flex items-center">
        <nav class="flex justify-end w-3/4 mx-auto">
            <ul v-if="!isAuth" class="flex gap-5 text-white font-medium text-lg">
                <li>
                    <NuxtLink to="/register">Регистрация</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login">Вход</NuxtLink>
                </li>
            </ul>
            <div v-else @click="onLogout" class="flex items-center gap-4">
                <NuxtLink class="text-white font-medium text-lg" to="/login">
                    Выйти
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>