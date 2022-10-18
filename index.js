import { useState } from 'react'
import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import images from '../../assets/img/image'
import { XtimesIcon } from '../../icons/Icons'
import './styles.scss'

function Menu() {
  const [login, setLogin] = useState('login')
  const [showModal, setShowModal] = useState(true)
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
                    <div className="form-group">
                      <label className={login}>Full Name</label>
                      <input
                        className={login}
                        placeholder="Enter your Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <label className={login}>Phone Number</label>
                      <input
                        className={login}
                        placeholder="Enter your Phone Number"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input placeholder="Enter your Email" />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input placeholder="Enter your Password" />
                    </div>
                    <div className="form-group">
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
