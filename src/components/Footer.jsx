import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <Link
        to='/basic'
        className='link'
      >
        <h3 className='footer-title'>Basic Units</h3>
      </Link>
      <p className='footer-text'>
        Copyright &copy; {currentYear} by 7AGAT, LLC. All
        rights reserved.
      </p>
    </footer>
  )
}

export default Footer
