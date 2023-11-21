import clothes from '../assets/images/clothes.png'

const BasicUnits = () => {
  return (
    <>
      <div className='basic-unit'>
        <h3>Input field</h3>
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
      </div>
      <div className='basic-unit'>
        <h3>Button</h3>
        <button className='main-btn'>يلا نشوف</button>
      </div>
      <div className='basic-unit'>
        <h3>Card</h3>
        <div className='category-box'>
          <div className='category-box-img'>
            <img
              src={clothes}
              alt='clothes'
            />
          </div>
          <button className='main-btn'>ملابس</button>
        </div>
      </div>
    </>
  )
}

export default BasicUnits
