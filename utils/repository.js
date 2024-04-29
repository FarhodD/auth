export const repository = () => ({
    async get() {
        return $fetch('https://077bb05296c26dd1.mokky.dev/users')
    }
})