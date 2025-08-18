import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-500 mb-2">TaskSP</h1>
          <p className="text-gray-400">Faça login para acessar sua conta</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
