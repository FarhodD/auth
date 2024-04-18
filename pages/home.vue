<script setup>
definePageMeta({
    middleware: 'auth'
})

const { x, y } = useMouse()
</script>

<template>
    <div>
        <h1 class="text-2xl font-bold">Home:</h1>
        <p class="text-xl font-medium">
            Положение мыши: {{ x }}, {{ y }}
        </p>
    </div>
</template>