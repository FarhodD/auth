<script setup>
import { useStorage } from '@vueuse/core'

const userInfo = JSON.parse(useStorage('user').value)

</script>

<template>
    <div>
        <h1 class="text-4xl font-semibold uppercase text-center text-primaryColor">Welcome to main page {{ userInfo.name }}!
        </h1>
    </div>
</template>