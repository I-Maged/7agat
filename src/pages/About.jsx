const About = () => {
  return (
    <>
      <div className='header-slogan'>
        <h1>حاجات</h1>
        <div className='header-h2'>
          <h2 className='h2-eng'>7AGAT</h2>
          <h2 className='h2-ar'>
            <span className='h2-right'> بدلها </span>
            <br />
            <span className='h2-left'> ماترميهاش </span>
          </h2>
        </div>
      </div>
      <div className='about-container'>
        <div className='about-text'>
          موقع حاجات هو مشروع منصة الكترونية متخصصة في
          التبادل التجاري والتبرع صممه فريقنا من طلاب دبلومة
          هندسة البرمجيات في كلية الدراسات العليا للبحوث
          الاحصائية
        </div>
        <div className='team-list'>
          <h3>Our Team:</h3>
          <ul>
            <li>Project manager: Ahmed Ibrahim</li>
            <li>Designer: Rowaida</li>
            <li>Designer: AbdulKarim</li>
            <li>Designer: Fady Magdy</li>
            <li>Designer: Ibrahim Mahmoud</li>
            <li>Developer: Maged Ibrahim</li>
            <li>Developer: Ziad</li>
            <li>Quality Assurance: Ahmed Samy</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default About
