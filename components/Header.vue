<script setup>
import { useStorage } from '@vueuse/core'
import { useAuthStore } from '~/store/auth'

const isAuth = useStorage('token').value
const { logout } = useAuthStore()
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
            <div v-else @click="logout" class="flex items-center gap-4">
                <NuxtLink class="text-white font-medium text-lg" to="/login">
                    Выйти
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>