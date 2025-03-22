import CallToAction from '@components/CallToAction.tsx'
import FormControl from '@components/FormControl.tsx'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/auth.slice.ts'

const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleLogin = (e: FormEvent) => {
		e.preventDefault()

		if (!email || !password) {
			setError('Please fill out all fields.')
			return
		}

		dispatch(login({ email, password }))
		console.log('Logging in:', { email, password })
		navigate('/habits')
		setError('')
	}

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='w-full max-w-md p-6 bg-white rounded shadow'>
				<h1 className='typography-2xl-bold mb-6 text-center text-text-primary'>
					Log In
				</h1>
				{error && (
					<div className='mb-4 text-red-600 typography-md-semibold text-center'>
						{error}
					</div>
				)}
				<form onSubmit={handleLogin} className='flex flex-col space-y-4'>
					<FormControl
						name='email'
						label='Email'
						type='email'
						value={email}
						placeholder='you@example.com'
						onValueChange={setEmail} />
					<FormControl
						name='password'
						label='Password'
						type='password'
						value={password}
						placeholder='********'
						onValueChange={setPassword} />
					<button
						type='submit'
						className='bg-primary hover:bg-primary-dark text-white font-semibold py-2 rounded transition-colors'
					>
						Log In
					</button>
				</form>
				<p className='mt-4 text-center typography-md-regular text-text-secondary'>
					Don’t have an account?{' '}
					<CallToAction
						path='/signup'
						type='link'
					>
						Sign Up
					</CallToAction>
				</p>
			</div>
		</div>
	)
}

export default LoginPage
