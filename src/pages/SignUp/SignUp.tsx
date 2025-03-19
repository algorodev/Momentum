import Button from '@components/Button.tsx'
import CallToAction from '@components/CallToAction.tsx'
import FormControl from '@components/FormControl.tsx'
import { FormEvent, useState } from 'react'

const SignUpPage = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')

	const handleSignUp = (e: FormEvent) => {
		e.preventDefault()

		if (!name || !email || !password || !confirmPassword) {
			setError('Please fill out all fields.')
			return
		}

		if (password !== confirmPassword) {
			setError('Passwords do not match.')
			return
		}

		console.log('Signing up:', { name, email, password })
		setError('')
	}

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='w-full max-w-md p-6 bg-white rounded shadow'>
				<h2 className='typography-2xl-bold mb-6 text-center text-text-primary'>
					Create an Account
				</h2>
				{error && (
					<div className='mb-4 text-red-600 typography-md-semibold text-center'>
						{error}
					</div>
				)}
				<form onSubmit={handleSignUp} className='flex flex-col space-y-4'>
					<FormControl
						name='name'
						label='Name'
						type='text'
						value={name}
						placeholder='John Doe'
						onValueChange={setName} />
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
					<FormControl
						name='confirm'
						label='Confirm Password'
						type='password'
						value={confirmPassword}
						placeholder='********'
						onValueChange={setConfirmPassword} />
					<Button
						type='submit'
						variant='primary'
					>
						Sign Up
					</Button>
				</form>
				<p className='mt-4 text-center typography-md-regular text-text-secondary'>
					Already have an account?{' '}
					<CallToAction
						path='/login'
						type='link'
					>
						Log In
					</CallToAction>
				</p>
			</div>
		</div>
	)
}

export default SignUpPage
