<script setup>
import { useAuthStore } from '../store/auth.store';


const { register } = useAuthStore

const onRegister = async () => {
    const name = 'Name'
    const email = 'example@email.com'
    const password = 'password'
    await register(name, email, password)
}
</script>

<template>
    <div class="flex flex-col items-center w-full ">
        <div class="w-96 p-4 border rounded-lg">
            <h2 class="text-4xl font-semibold mb-6 text-center text-slate-500">Регистрация</h2>
            <form @submit="onRegister" class="flex flex-col gap-4">
                <input class="border p-2 outline-slate-400 text-lg" v-model="name" placeholder="Имя" type="text">
                <input class="border p-2 outline-slate-400 text-lg" v-model="email" placeholder="Email" type="email">
                <input class="border p-2 outline-slate-400 text-lg" v-model="password" placeholder="Пароль" type="password">
                <button class="bg-slate-500 py-3 text-white rounded-md text-lg font-semibold">Зарегистрироваться</button>
            </form>
        </div>
    </div>
</template>