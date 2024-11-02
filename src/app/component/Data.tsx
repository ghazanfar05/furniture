'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Typewriter } from 'react-simple-typewriter'

type FormData = {
  email: string
  password: string
  name?: string
}

function LoginForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setMessage('Login successful!')
    console.log('Login data:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {message && <p className="text-green-600 text-center">{message}</p>}
    </form>
  )
}

function SignupForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setMessage('Signup successful!')
    console.log('Signup data:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email"  className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
      >
        {isLoading ? 'Signing up...' : 'Sign Up'}
      </button>
      {message && <p className="text-gray-600 text-center">{message}</p>}
    </form>
  )
}

function Component() {
  const [activeForm, setActiveForm] = useState<'login' | 'signup' | null>(null)

  const closeForm = () => setActiveForm(null)

  return (
    <div id="Home"  className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold">
          <Typewriter
            words={['Welcome to New Designs', 'Your Furniture Hub', 'Sign Up Today']}
            loop={5}
            cursor
            cursorStyle="!"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Our Platform</h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover a world of possibilities. Join us today and experience the future of digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-6 py-3 rounded-full text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveForm('login')}
              >
                Login
              </motion.button>
              <motion.button
                className="px-6 py-3 rounded-full text-white font-semibold bg-gray-600 hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveForm('signup')}
              >
                Sign Up
              </motion.button>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-600 p-8 md:p-12 flex items-center justify-center">
            <img
              src="/dev0.png"
              alt="Hero Image"
              className="max-w-full h-auto rounded-lg shadow-lg"
              width="500"
              height="500"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full max-w-md relative"
            >
              <button
                onClick={closeForm}
                className="absolute top-2 right-2 text-white hover:text-gray-950"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-4">
                {activeForm === 'login' ? 'Login' : 'Sign Up'}
              </h2>
              {activeForm === 'login' ? (
                <LoginForm onClose={closeForm} />
              ) : (
                <SignupForm onClose={closeForm} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Data() {
  return <Component />
}

export default Data
