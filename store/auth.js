import axios from 'axios'
import { defineStore } from 'pinia'

const api = 'https://077bb05296c26dd1.mokky.dev'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null
    }),
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post(`${api}/auth`, {
                    email, password
                })

                const { data, token } = response.data
                this.user = data
                this.token = token
                localStorage.setItem('token', token)
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        },
        async register(name, email, password) {
            try {
                const response = await axios.post(`${api}/register`, {
                    name, email, password
                })
                const { data, token } = response.data
                this.token = token
                this.user = data
                localStorage.setItem('token', token)
            } catch (error) {
                console.log(error)
            }
        },
        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
        },
    },
})