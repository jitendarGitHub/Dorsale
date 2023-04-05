import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CHeaderText,
} from '@coreui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NewUser = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const navigate = useNavigate()

  return (
    <>
      <div className="bg-warning"></div>
      <CCard
        className=" pt-2 pb-3"
        style={{ paddingRight: '20px', paddingLeft: '20px', paddingTop: '20px' }}
      >
        <CCardHeader className="fs-4 text-start bg-white">
          <CHeaderText> Add User</CHeaderText>
        </CCardHeader>
        <CForm className="row g-3 needs-validation mt-2">
          <CCol md={12}>
            <CFormInput
              type="text"
              placeholder="Enter First Name"
              feedbackValid="Looks good!"
              id="validationCustom01"
              label="First Name *"
              required
            />
          </CCol>
          <CCol md={12}>
            <CFormInput
              type="text"
              placeholder="Enter Last Name"
              feedbackValid="Looks good!"
              id="validationCustom01"
              label="Last Name *"
              required
            />
          </CCol>
          <CCol md={6}>
            <CFormInput
              type="email"
              placeholder="Enter Your Email"
              feedbackValid="Looks good!"
              id="validationCustom02"
              label="Email *"
              required
            />
          </CCol>

          <CCol md={6}>
            <CFormLabel>Role * </CFormLabel>
            <select className="form-control">
              <option selected>--Select Your Role---</option>
              <option>Player</option>
              <option>Student</option>
              <option>Developer</option>
            </select>
          </CCol>
          <CCol md={6}>
            <CFormInput
              type="number"
              placeholder="Enter HCP"
              feedbackValid="Looks good!"
              id="validationCustom02"
              label="HCP *"
              required
            />
          </CCol>
          <CCol md={6}>
            <CFormInput
              type="date"
              placeholder="Enter HCP"
              feedbackValid="Looks good!"
              id="validationCustom02"
              label="D.O.B *"
              required
            />
          </CCol>
          <CCol md={6}>
            <CFormLabel>Gender * </CFormLabel>
            <select className="form-control">
              <option selected>--gender---</option>
              <option selected>Male</option>
              <option selected>Female</option>
            </select>
          </CCol>
          <CCol md={6}>
            <CFormLabel>Country * </CFormLabel>
            <select className="form-control">
              <option selected>--Select Your Country---</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
              <option>Pakisthan</option>
            </select>
          </CCol>
          <CCol md={12}>
            <CFormInput type="text" placeholder="Enter Your Address" label="Address *" required />
          </CCol>
          <CButton
            type="submit"
            color="success text-light"
            className="mt-3"
            style={{ width: '120px' }}
            onClick={() => navigate('/user')}
          >
            Save
          </CButton>
        </CForm>
      </CCard>
    </>
  )
}

export default NewUser
