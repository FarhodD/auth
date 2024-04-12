<script setup>
import { useAuthStore } from '~/store/auth'

const { register } = useAuthStore()

const name = ref('')
const email = ref('')
const password = ref('')

const onRegister = async () => {
    const registerData = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    await register(registerData)
}
</script>

<template>
    <div class="flex flex-col items-center w-full ">
        <div class="w-96 p-4 border-2 rounded-lg">
            <h2 class="text-4xl font-semibold mb-6 text-center text-primaryColor">Регистрация</h2>
            <form @submit="onRegister" class="flex flex-col gap-4">
                <input class="border-2 p-2 outline-primaryColor text-lg" v-model="name" placeholder="Имя" type="text">
                <input class="border-2 p-2 outline-primaryColor text-lg" v-model="email" placeholder="Email" type="email">
                <input class="border-2 p-2 outline-primaryColor text-lg" v-model="password" placeholder="Пароль"
                    type="password">
                <button class="bg-primaryColor py-3 text-white rounded-md text-lg font-semibold">Зарегистрироваться</button>
            </form>
        </div>
    </div>
</template>