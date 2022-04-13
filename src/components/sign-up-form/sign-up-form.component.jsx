import { useState } from 'react'

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFrom = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFrom)
  const { displayName, email, password, confirmPassword } = formFields

  console.log(formFields) 

  const handleSubmit = async (event) => {
    event.preventDefault()
    
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }
  
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={()=>{}}>
        <lable>displayName</lable>
        <input type="text" required onChange={ handleChange } name='displayName' value={displayName} />
        <lable>email</lable>
        <input type="email" required onChange={ handleChange } name='email' value={email} />
        <lable>password</lable>
        <input type="password" required onChange={ handleChange } name='password' value={password} />
        <lable>confirmPassword</lable>
        <input type="confirmPassword" required onChange={ handleChange } name='confirmPassword' value={confirmPassword} />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm