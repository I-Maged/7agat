import { useState } from 'react'
import form from '../assets/images/form.png'

const Register = () => {
  const [formState, setFormState] = useState('login')

  const handleLogin = (e) => {
    e.preventDefault()
  }
  const handleRegister = (e) => {
    e.preventDefault()
  }

  return (
    <div className='form-container'>
      <img
        src={form}
        alt='form'
      />
      <h3 className='form-title'>أهلًا بك في حاجات</h3>
      <p className='footer-text'>نتمنى لك تجربة ممتعة</p>
      {formState === 'login' ? (
        <form
          onSubmit={handleLogin}
          className='register-form'
        >
          <div className='input-field'>
            <input
              type='email'
              name='email'
              id='email'
              autoComplete='off'
              placeholder=' '
            />
            <label htmlFor='email'>البريد الإلكتروني</label>
          </div>
          <div className='input-field'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder=' '
            />
            <label htmlFor='password'>كلمة المرور</label>
          </div>
          <button
            type='submit'
            className='main-btn'
          >
            تسجيل الدخول
          </button>
          <button
            className='form-toggle-btn'
            onClick={() => setFormState('register')}
          >
            ليس لديك حساب؟
          </button>
        </form>
      ) : (
        <form
          onSubmit={handleRegister}
          className='register-form'
        >
          <div className='input-field'>
            <input
              type='username'
              name='username'
              id='username'
              autoComplete='off'
              placeholder=' '
            />
            <label htmlFor='username'>اسم المستخدم</label>
          </div>
          <div className='input-field'>
            <input
              type='email'
              name='email'
              id='email'
              autoComplete='off'
              placeholder=' '
            />
            <label htmlFor='email'>البريد الإلكتروني</label>
          </div>
          <div className='input-field'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder=' '
            />
            <label htmlFor='password'>كلمة المرور</label>
          </div>
          <div className='input-field'>
            <input
              type='password'
              name='password2'
              id='password2'
              placeholder=' '
            />
            <label htmlFor='password2'>
              تأكيد كلمة المرور
            </label>
          </div>
          <button
            type='submit'
            className='main-btn'
          >
            تسجيل الدخول
          </button>
          <button
            className='form-toggle-btn'
            onClick={() => setFormState('login')}
          >
            لديك حساب بالفعل؟
          </button>
        </form>
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
