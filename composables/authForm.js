import { useAuthStore } from "~/store/auth";

export function useAuthForm() {
    const { login, register } = useAuthStore()
    const router = useRouter()

    const email = ref('')
    const name = ref('')
    const password = ref('')

    const onSubmit = async (action) => {
        if (email.value.trim() && password.value.trim()) {
            if (action === "login") {
                await login(email.value, password.value);
            } else if (action === "register") {
                await register(name.value, email.value, password.value);
            } else {
                console.error("Invalid action provided to useAuthForm");
            }
        } else {
            alert("Email and password are required");
        }
        name.value = '';
        email.value = '';
        password.value = '';
        router.push("/");
    }

    return { email, password, name, onSubmit }
}