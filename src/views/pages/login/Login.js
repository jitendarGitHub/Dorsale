import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import '../login/login.css'
import Input from 'react-phone-number-input/input'
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  CButton,
  CButtonGroup,
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
import { cilLockLocked, cilPhone } from '@coreui/icons'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login, login2 } from 'src/reducer/Action'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [state, setState] = useState({
    phone: '',
    password: '',
  })

  // useEffect(() => {
  //   axios
  //     .post('http://16.170.10.154/api/users/login')
  //     .then((result) => {
  //       toast('API', result.data)
  //     })
  //     // .catch((result) => toast.error('login Failed'))
  //     .catch((result) => console.log('API', result.data))
  // })

  const validate = (e) => {
    e.preventDefault()
    var regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    if (state.phone.length == 0) {
      toast.error('Enter Phone number!')
    } else if (state.phone.length < 12 || state.phone.length > 18) {
      toast.error('Enter valid Phone number!')
    } else if (state.password.length == 0) {
      toast.error('Password must be Required')
    } else if (state.password.length < 8 || state.password.length > 14) {
      toast.error('password length must be 8 tp 14')
    } else {
      toast.success('Login Successful', { autoClose: [1000] })
      dispatch(login(state))
    }
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
    // console.log('e--', e.target.name, e.target.value)
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={validate}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>

                    <CInputGroup className="mb-3 mt-3">
                      <CInputGroupText>
                        <CIcon icon={cilPhone} size="lg" />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Enter phone number"
                        name="phone"
                        className="form-control"
                        value={state.phone}
                        onChange={handleChange}
                        maxLength={12}
                        type="number"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3 mt-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} size="lg" />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        value={state.password}
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
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
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton
                          color="link"
                          className="px-0"
                          onClick={() => navigate('/forgetpass')}
                        >
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="bg-light text-center justify-content-center">
                <h1 className="fw-bold text-success">DORSALE</h1>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
