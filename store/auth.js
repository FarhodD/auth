import axios from 'axios'
import { defineStore } from 'pinia'

const api = 'https://077bb05296c26dd1.mokky.dev'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        user: null,
    }),
    actions: {
        async login(email, password) {
            try {
                const response = await axios.post(`${api}/auth`, {
                    email, password
                })

                const { token, data } = response
                this.token = token
                this.user = data
                localStorage.setItem('token', token)
            } catch (error) {
                console.log(error)
            }
        },
        async register(name, email, password) {
            try {
                const response = axios.post(`${api}/register`, {
                    name, email, password
                })
                const { token, user } = response.data
                this.token = token
                this.user = user
                localStorage.setItem('token', token)
            } catch (error) {
                console.log(error)
            }
        },
        // async getUser() {
        //     if (!this.token) return

        //     try {
        //         const { data } = await axios.post(`${api}/users`, {
        //             headers: {
        //                 Authorization: `Bearer ${this.token}`,
        //             },
        //         })
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },
        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
        },
    },
})