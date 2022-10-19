import { useEffect, useState } from 'react'
import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import images from '../../assets/img/image'
import { XtimesIcon } from '../../icons/Icons'
import './styles.scss'

function Menu() {
  const [login, setLogin] = useState('login')
  const [emailInput, setEmailInput] = useState('')
  const [showModal, setShowModal] = useState(true)
  const [isEmail, setIsEmail] = useState('')

  useEffect(() => {
    const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (emailInput.trim() === '') {
      setIsEmail('Please enter your Email')
    } else if (!emailInput.trim().match(emailRegex)) {
      setIsEmail('This email is not valid')
    } else {
      setIsEmail('')
      console.log(isEmail)
    }
  }, [emailInput, isEmail])

  const handleLogin = () => {
    setLogin('login')
  }

  const handleSignin = () => {
    setLogin('registered')
  }

  const handleOffModal = () => {
    setShowModal(false)
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <CommonLayout>
      <div className="body">
        <button onClick={handleShowModal}>opern</button>
        {showModal && (
          <>
            <div onClick={handleOffModal} className="modal-outside"></div>
            <div className={`log-modal-wrapper ${login}`}>
              <div onClick={handleOffModal} className="xBtn-off-modal">
                <XtimesIcon fill="white" width="2.5rem" height="2.5rem" />
              </div>
              <div className={`modal-image-wrapper ${login}`}>
                <img
                  className="modal-image"
                  alt="modal-register"
                  src={images.modalRegister}
                />
              </div>
              <div className="content-wrapper">
                <div className="tab-wrap">
                  <h2
                    className={login === 'login' ? 'active' : ''}
                    onClick={handleLogin}
                  >
                    Login
                  </h2>
                  <h2
                    className={login === 'registered' ? 'active' : ''}
                    onClick={handleSignin}
                  >
                    Register
                  </h2>
                </div>
                <div className="content-input">
                  <form className="form-input-modal">
                    <div className={`${login} form-group`}>
                      <label className={login}>Full Name</label>
                      <input
                        className={login}
                        placeholder="Enter your Full Name"
                      />
                    </div>
                    <div className={`${login} form-group`}>
                      <label className={login}>Phone Number</label>
                      <input placeholder="Enter your Phone Number" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        onChange={(e) => {
                          setEmailInput(e.target.value)
                        }}
                        value={emailInput}
                        placeholder="Enter your Email"
                      />
                      <p>{isEmail}</p>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input placeholder="Enter your Password" />
                    </div>
                    <div className={`${login} form-group`}>
                      <label className={login}>Confirm Password</label>
                      <input
                        className={login}
                        placeholder="Confirm your Password"
                      />
                    </div>
                    <button>
                      {login === 'login' ? 'Sign-in' : 'Register'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </CommonLayout>
  )
}

export default Menu
