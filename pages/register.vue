<script setup>
import { useAuthStore } from "~/store/auth";
import { useRouter } from "vue-router";

const { register } = useAuthStore();
const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");

const onRegister = async () => {
  if (email.value.trim() && password.value.trim() && name.value.trim()) {
    await register(name.value, email.value, password.value)
  } else {
    alert('Поля email и password объязательны и не должны быть пустыми')
  }
  name.value = "";
  email.value = "";
  password.value = "";
  router.push("/");
};
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <div class="w-96 p-4 border-2 rounded-lg">
      <h2 class="text-4xl font-semibold mb-6 text-center text-primaryColor">
        Регистрация
      </h2>
      <form @submit.prevent="onRegister" class="flex flex-col gap-4">
        <input class="border-2 p-2 outline-primaryColor text-lg text-primaryColor placeholder:font-normal font-medium"
          v-model="name" placeholder="Имя" type="text" />
        <input class="border-2 p-2 outline-primaryColor text-lg text-primaryColor placeholder:font-normal font-medium"
          v-model="email" placeholder="Email" type="email" />
        <input class="border-2 p-2 outline-primaryColor text-lg text-primaryColor placeholder:font-normal font-medium"
          v-model="password" placeholder="Пароль" type="password" />
        <button class="bg-primaryColor py-3 text-white rounded-md text-lg font-semibold">
          Зарегистрироваться
        </button>
      </form>
    </div>
  </div>
</template>