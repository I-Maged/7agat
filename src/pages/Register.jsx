import { useState } from 'react'
import form from '../assets/images/form.png'

const Register = () => {
  const [formState, setFormState] = useState('login')

  return (
    <div className='form-container'>
      <img
        src={form}
        alt='form'
      />
      <h3 className='form-title'>أهلًا بك في حاجات</h3>
      <p className='footer-text'>نتمنى لك تجربة ممتعة</p>
      {formState === 'login' ? (
        <div>Login</div>
      ) : (
        <div>Register</div>
      )}
    </div>
  )
}

export default Register

/* 
<div className='form'>
      <div className='form-choice'>
        <button
          className='form-choice-btn'
          onClick={() => setFormState('register')}
        >
          إنشاء حساب جديد
        </button>
        <button
          className='form-choice-btn'
          onClick={() => setFormState('login')}
        >
          تسجيل الدخول
        </button>
      </div>
      {formState === 'login' ? (
        <div>Login</div>
      ) : (
        <div>Register</div>
      )}
    </div>
*/
