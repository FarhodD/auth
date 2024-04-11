<script setup>
import { useAuthStore } from '../store/auth.store';

const { login } = useAuthStore();
console.log(login);
const onLogin = async () => {
    const email = 'example@email.com';
    const password = 'password';
    await login(email, password);
};
</script>

<template>
    <div class="flex flex-col items-center w-full ">
        <div class="w-96 p-4 border rounded-lg">
            <h2 class="text-4xl font-semibold mb-6 text-center text-slate-500">Вход</h2>
            <form class="flex flex-col gap-4">
                <input class="border p-2 outline-slate-400 text-lg" placeholder="Email" type="email">
                <input class="border p-2 outline-slate-400 text-lg" placeholder="Пароль" type="password">
                <button class="bg-slate-500 py-3 text-white rounded-md text-lg font-semibold">Войти</button>
            </form>
        </div>
    </div>
</template>