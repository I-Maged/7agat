import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className='header-menu'>
      <div>
        <Link
          to='/'
          className='link'
        >
          <div>حـــــاجــــات</div>
          <div>7AGAT</div>
        </Link>
        {/* <a
          className='link'
          href='/'
        >
          <div>حـــــاجــــات</div>
          <div>7AGAT</div>
        </a> */}
      </div>
      <div className='header-menu-links'>
        <Link
          to='/register'
          className='link'
        >
          التسجيل
        </Link>
        {/* <a
          className='link'
          href='/'
        >
          التسجيل
        </a> */}
        <a
          className='link'
          href='/'
        >
          من نحن
        </a>
      </div>
    </section>
  )
}

export default Header
