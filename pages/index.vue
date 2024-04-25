<script setup>
import { useStorage } from '@vueuse/core'
import { useAuthStore } from '~/store/auth';
definePageMeta({
    middleware: 'auth'
})

const users = ref([])
const userInfo = JSON.parse(useStorage('user').value)
const { getUsers, logout } = useAuthStore()
const router = useRouter()

const showUsers = async () => {
    const token = useStorage('token').value

    if (token) {
        const userData = await getUsers()
        users.value = userData
    } else {
        alert('Для того чтобы посмотреть на список пользователей Вам неоюходимо авторизоваться')
        await logout()
        router.push('/login')
    }

}


</script>

<template>
    <div>

        <div class="flex flex-col items-center text-center gap-2 text-primaryColor">
            <h1 class="text-4xl font-semibold uppercase">Welcome to main page {{ userInfo.name }}!
            </h1>
            <p class="text-3xl font-medium">
                ID: {{ userInfo.id }}
            </p>
            <p class="text-3xl font-medium">
                Email: {{ userInfo.email }}
            </p>
        </div>

        <div class="flex justify-center">
            <button @click="showUsers" class="bg-primaryColor text-white rounded-md py-2 px-4 text-lg my-4">Показать список
                пользователей</button>
        </div>
        <div v-if="users" class="py-5">
            <h2 class="text-3xl font-semibold mb-2">User List</h2>
            <ul>
                <li class="flex border justify-between p-2 text-xl" v-for="user in users" :key="user.id">
                    <span class="font-medium">{{ user.name }}</span>
                    <span>{{ user.email }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>