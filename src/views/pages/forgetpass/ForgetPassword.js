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
import { cilArrowLeft, cilEnvelopeOpen, cilLockLocked, cilUser } from '@coreui/icons'

const ForgetPassword = () => {
  const [validated, setValidated] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
      alert('Check your Email or password')
    } else {
      setValidated(true)
      setValidated(() => navigate('/'))
    }
  }

  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
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
                  <CForm noValidate validated={validated} onSubmit={handleSubmit}>
                    <h1>Reset Password</h1>
                    <p className="text-dark fw-bold">Your Email</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilEnvelopeOpen} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Email"
                        aria-describedby="inputGroupPrependFeedback"
                        feedbackValid="Please choose a Email."
                        id="validationCustomEmail"
                        required
                      />
                    </CInputGroup>
                    <p className="text-dark fw-bold mt-4">Your Password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        value={password}
                        onChange={(e) => console.log(setpassword(e.target.value))}
                        placeholder="Password"
                        aria-describedby="inputGroupPrependFeedback"
                        feedbackValid="Please choose a pasword."
                        id="validationCustomPassword"
                        required
                      />
                    </CInputGroup>
                    <p className="text-dark fw-bold">Confirm Password</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        value={cpassword}
                        onChange={(e) => console.log(setcpassword(e.target.value))}
                        placeholder="Confirm Password"
                        aria-describedby="inputGroupPrependFeedback"
                        feedbackValid="Please choose a pasword."
                        id="validationCustomPassword"
                        required
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
