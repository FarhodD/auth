<script setup>
import { useStorage } from '@vueuse/core'

const storedUserInfo = useStorage('user').value
const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : { name: 'Guest' }
</script>

<template>
    <div>
        <h1 class="text-4xl font-semibold uppercase text-center text-primaryColor">Welcome to main page {{ userInfo.name }}!
        </h1>
    </div>
</template>