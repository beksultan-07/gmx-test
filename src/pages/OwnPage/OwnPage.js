import React from 'react'
import './OwnPage.css'

export default function OwnPage() {
  const [banks] = React.useState([
    {
      image: null, 
      name: 'BANK 1', 
      reserve: '', 
      apy: '', 
      requisite: {
        bank: 'BANK 1',
        swift: 'IRVTUS3N',
        name: 'Bank of New York Mellon, New York, USA',
      }
    },
    {
      image: null, 
      name: 'BANK 2', 
      reserve: '', 
      apy: '', 
      requisite: {
        bank: 'BANK 2',
        swift: 'IRVTUS3N',
        name: 'Bank of New York Mellon, New York, USA',
      }
    },
    {
      image: null, 
      name: 'BANK 3', 
      reserve: '', 
      apy: '', 
      requisite: {
        bank: 'BANK 3',
        swift: 'IRVTUS3N',
        name: 'Bank of New York Mellon, New York, USA',
      }
    },
  ])
  const [requisite, setRequisite] = React.useState(banks[0].requisite)

  const [faq] = React.useState([
    {
      title: 'Question',
      text: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis at velit ultrices. Pulvinar fermentum semper venenatis risus. Eget id elit diam feugiat nunc diam senectus senectus. Pellentesque risus ac elit est augue magnis leo egestas. Nunc sit habitant penatibus neque at iaculis.'
    },
    {
      title: 'Question',
      text: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis at velit ultrices. Pulvinar fermentum semper venenatis risus. Eget id elit diam feugiat nunc diam senectus senectus. Pellentesque risus ac elit est augue magnis leo egestas. Nunc sit habitant penatibus neque at iaculis.'
    },
    {
      title: 'Question',
      text: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis at velit ultrices. Pulvinar fermentum semper venenatis risus. Eget id elit diam feugiat nunc diam senectus senectus. Pellentesque risus ac elit est augue magnis leo egestas. Nunc sit habitant penatibus neque at iaculis.'
    },
    {
      title: 'Question',
      text: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis at velit ultrices. Pulvinar fermentum semper venenatis risus. Eget id elit diam feugiat nunc diam senectus senectus. Pellentesque risus ac elit est augue magnis leo egestas. Nunc sit habitant penatibus neque at iaculis.'
    },
    {
      title: 'Question',
      text: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis at velit ultrices. Pulvinar fermentum semper venenatis risus. Eget id elit diam feugiat nunc diam senectus senectus. Pellentesque risus ac elit est augue magnis leo egestas. Nunc sit habitant penatibus neque at iaculis.'
    },
    {
      title: 'Question',
      text: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis at velit ultrices. Pulvinar fermentum semper venenatis risus. Eget id elit diam feugiat nunc diam senectus senectus. Pellentesque risus ac elit est augue magnis leo egestas. Nunc sit habitant penatibus neque at iaculis.'
    },
  ])

  const [sum, setSum] = React.useState(0)

  const [swiftID, setSwiftID] = React.useState('')

  const [activeCurrancy, setActiveCurrancy] = React.useState('USDT')

  const [currancy] = React.useState(['USDT', 'EURO'])

  const [currencyClick, setCurrencyClick] = React.useState(false)

  const [LP, setLP] = React.useState(0)


  const submit = (e) => {
    e.preventDefault();
    
    const obj = {
      swiftID,
      sum,
      LP,
      currancy: activeCurrancy
    }

    console.log(obj);
    setSwiftID('')
    setSum(0)
    setLP(0)
  }
  
  React.useEffect(() => {
    setLP(sum**2)
  }, [sum])
  

  return (
    <div className='OwnPage-wrap'>
      <div className='OwnPage-container'>
        <div className='OwnPage-content'>
          <ul className='OwnPage-banks'>
            {banks.map((el, index) => (
              <li className='OwnPage-bank' key={index} onClick={() =>  setRequisite(el.requisite)}>
                <div className='OwnPage-bank__content'>
                  <div className='OwnPage-bank__logo'></div>
                  <div className='OwnPage-bank__results'>
                    <h3 className='OwnPage-bank__name'>
                      {el.name}
                    </h3>
                    <div className='OwnPage-bank__content'>
                      <span className='OwnPage-bank__reserve'>Reserve</span>
                      <span className='OwnPage-bank__APY'>APY %</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>


          <div className='OwnPage-requisite-wrap'>
            <h2 className='OwnPage-requisite__title'>
              Реквизиты
            </h2>

            <ul className='OwnPage-requisite__list'>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Информация о банке</span>
                <span className='OwnPage-requisite__value'>{requisite.bank}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>SWIFT</span>
                <span className='OwnPage-requisite__value'>{requisite.swift}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Name</span>
                <span className='OwnPage-requisite__value'>{requisite.name}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Информация о банке</span>
                <span className='OwnPage-requisite__value'>{requisite.bank}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>SWIFT</span>
                <span className='OwnPage-requisite__value'>{requisite.swift}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Name</span>
                <span className='OwnPage-requisite__value'>{requisite.name}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Информация о банке</span>
                <span className='OwnPage-requisite__value'>{requisite.bank}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>SWIFT</span>
                <span className='OwnPage-requisite__value'>{requisite.swift}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Name</span>
                <span className='OwnPage-requisite__value'>{requisite.name}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Информация о банке</span>
                <span className='OwnPage-requisite__value'>{requisite.bank}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>SWIFT</span>
                <span className='OwnPage-requisite__value'>{requisite.swift}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Name</span>
                <span className='OwnPage-requisite__value'>{requisite.name}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Информация о банке</span>
                <span className='OwnPage-requisite__value'>{requisite.bank}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>SWIFT</span>
                <span className='OwnPage-requisite__value'>{requisite.swift}</span>
              </li>
              <li className='OwnPage-requisite__item'>
                <span className='OwnPage-requisite__name'>Name</span>
                <span className='OwnPage-requisite__value'>{requisite.name}</span>
              </li>
            </ul>

          </div>


          <div className='OwnPage-form-wrap'>
            <form className='OwnPage-form-wrap'>
              <div className='OwnPage-form-input-content'>
                <h3 className='OwnPage-form-title'>
                  Сумма
                </h3>
                <div className='OwnPage-form-input-wrap'>
                  <input 
                    type='number' 
                    className='OwnPage-form-input' 
                    value={sum}
                    onChange={(e) => setSum(e.target.value)}/>
                  <div 
                    className='OwnPage-form-input-btn-wrap' 
                    >
                    <button 
                      onClick={() => setCurrencyClick(!currencyClick)}
                      className='OwnPage-form-input-btn'>
                        {activeCurrancy}
                    </button>

                    <svg className='OwnPage-form-btn-logo' width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 2.871L1.879 4.99275L0.817749 3.93225L4 0.75L7.18225 3.93225L6.121 4.99275L4 2.871Z" fill="#252525"/>
                    </svg>

                    <div 
                    className={`OwnPage-form-select ${currencyClick ? 'active' : ''}`}
                    >
                      {currancy.map((el, idx) => {
                        if(el !== activeCurrancy){
                          return(
                            <button 
                              className='OwnPage-form-option' 
                              onClick={() => setActiveCurrancy(el)} 
                              key={idx}
                            >
                              {el}
                            </button>
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className='OwnPage-form-input-content'>
                <h3 className='OwnPage-form-title'>
                  Вывод
                </h3>
                <div className='OwnPage-form-input-wrap'>
                  <input 
                    type='number' 
                    className='OwnPage-form-input' 
                    onChange={() => {}}
                    value={LP}/>
                  <button className='OwnPage-form-input-btn'>
                    LP
                  </button>
                </div>
              </div>
              <div className='OwnPage-form-input-content'>
                <h3 className='OwnPage-form-title'>
                  ID Swift
                </h3>
                <div className='OwnPage-form-input-wrap'>
                  <input 
                    type='text' 
                    className='OwnPage-form-input' 
                    value={swiftID}
                    onChange={(e) => setSwiftID(e.target.value)}/>
                    <button className='OwnPage-form-input-btn'></button>
                </div>
              </div>
              <div className='OwnPage-form-input-content'>
                <button className='OwnPage-form-btn'  onClick={e => submit(e)}>
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='OwnPage-FAQ'>
          <h3 className='OwnPage-FAQ__title'>FAQ</h3>
          <ul className='OwnPage-FAQ__list'>
            {faq.map((el, index) => (
              <li key={index} className='OwnPage-FAQ__item'>
                <h4 className='OwnPage-FAQ__item__title'>
                  {el.title}
                </h4>
                <p className='OwnPage-FAQ__item__text'>
                  {el.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
