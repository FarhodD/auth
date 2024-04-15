<script setup>
import { useAuthStore } from "~/store/auth";
const { login } = useAuthStore();

const email = ref("");
const password = ref("");

const onLogin = async () => {
  await login(email.value, password.value);
};
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <div class="w-96 p-4 border-2 rounded-lg">
      <h2 class="text-4xl font-semibold mb-6 text-center text-primaryColor">
        Вход
      </h2>
      <form @submit.prevent="onLogin" class="flex flex-col gap-4">
        <input
          class="border-2 p-2 outline-primaryColor text-lg"
          v-model="email"
          placeholder="Email"
          type="email"
        />
        <input
          class="border-2 p-2 outline-primaryColor text-lg"
          v-model="password"
          placeholder="Пароль"
          type="password"
        />
        <button
          class="bg-primaryColor py-3 text-white rounded-md text-lg font-semibold"
        >
          Войти
        </button>
      </form>
    </div>
  </div>
</template>