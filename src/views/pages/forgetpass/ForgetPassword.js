import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowLeft, cilEnvelopeOpen, cilLockLocked } from '@coreui/icons'
import { ToastContainer, toast, Flip } from 'react-toastify'

const ForgetPassword = () => {
  const [validated, setValidated] = useState({
    email: '',
    password: '',
    cpassword: '',
  })
  const { email, password, cpassword } = validated
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== cpassword) {
      toast.error('password and confirm password doesn`t match')
    } else toast('good!')
  }

  const handleChange = (e) => {
    setValidated({ ...validated, [e.target.name]: e.target.value })
    // console.log('e--', e.target.name, e.target.value)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHove
        theme="dark"
        limit={1}
        transition={Flip}
      />
      <CContainer>
        <p className=" text-center fs-4" onClick={() => navigate('/')}>
          <CIcon icon={cilArrowLeft} className="mx-2" />
          Back to Login
        </p>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Reset Password</h1>
                    <p className="text-dark fw-bold">Your Email</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilEnvelopeOpen} />
                      </CInputGroupText>
                      <CFormInput type="email" placeholder="Email" required />
                    </CInputGroup>
                    <p className="text-dark fw-bold mt-4">Your Password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        value={validated.password}
                        onChange={handleChange}
                        placeholder="Password"
                      />
                    </CInputGroup>
                    <p className="text-dark fw-bold">Confirm Password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="cpassword"
                        value={validated.cpassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CButton
                        type="submit"
                        color="primary"
                        className="px-4 mt-2 text-light fw-bold "
                      >
                        Reset Password
                      </CButton>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default ForgetPassword
