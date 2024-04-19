import { useAuthStore } from "~/store/auth"

export function useAuthForm() {
    const { login, register } = useAuthStore()
    const router = useRouter()

    const email = ref('')
    const name = ref('')
    const password = ref('')

    const clearForm = () => {
        name.value = ''
        email.value = ''
        password.value = ''
    }

    const onSubmit = async (action) => {
        if (email.value.trim() && password.value.trim()) {
            if (action === "login") {
                await login(email.value, password.value)
                router.push('/')
            } else if (action === "register") {
                await register(name.value, email.value, password.value)
                router.push('/')
            } else {
                console.error("Invalid action provided to useAuthForm")
            }
        } else {
            alert("All fields are required")
        }
        clearForm()
    }

    return { email, password, name, onSubmit }
}