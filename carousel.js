import { useState, useEffect } from 'react'
import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import './styles.scss'

function Checkout() {
  const data = ['1', '2', '3', '4', '5', '6']
  const [crrIndex, setCrrIndex] = useState(0)
  const carouselScroll = () => {
    if (crrIndex === data.length - 1) {
      return setCrrIndex(0)
    }
    return setCrrIndex(crrIndex + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      carouselScroll()
    }, 3000)
    return () => clearInterval(interval)
  })

  return (
    <CommonLayout>
      <h1>Checkout Page</h1>
      <h1>Checkout Page</h1>
      <h1>Checkout Page</h1>
      <div className="container center">
        <ul>
          {data.map((item, index) => (
            <li
              style={{ transform: `translate(-${crrIndex * 100}%)` }}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </CommonLayout>
  )
}

export default Checkout
