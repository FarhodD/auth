import axios from 'axios'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const api = 'https://077bb05296c26dd1.mokky.dev'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
    }),
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post(`${api}/auth`, {
                    email, password,
                })
                const { data, token } = response.data
                this.user = data
                useStorage('token', token)
                useStorage('user', data)

            } catch (error) {
                alert(`Пользователь не авторизован`)
            }
        },
        async register(name, email, password) {
            try {
                const response = await axios.post(`${api}/register`, {
                    name, email, password
                })
                const { data, token } = response.data
                this.user = data
                useStorage('token', token)
                useStorage('user', data)
            } catch (error) {
                console.log(error)
            }
        },
        logout() {
            this.user = null
            useStorage('token').value = null
            useStorage('user').value = null
        },
    },
})