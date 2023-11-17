const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <a
        className='link'
        href='/'
      >
        <h3 className='footer-title'>Basic Units</h3>
      </a>
      <p className='footer-text'>
        Copyright &copy; {currentYear} by 7AGAT, LLC. All
        rights reserved.
      </p>
    </footer>
  )
}

export default Footer
