import React, { useEffect, useState } from 'react'
import { CButton, CCard, CCardHeader, CCol, CForm, CFormInput, CHeaderText } from '@coreui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserEdit = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const navigate = useNavigate()

  return (
    <>
      <div className="bg-warning"></div>
      <CCard
        className="bg-light pt-2 pb-3"
        style={{ paddingRight: '20px', paddingLeft: '20px', paddingTop: '20px' }}
      >
        <CCardHeader className="fs-4 text-start">
          <CHeaderText> Edit User</CHeaderText>
        </CCardHeader>
        <CForm className="row g-3 needs-validation">
          <CCol md={12}>
            <CFormInput
              type="text"
              defaultValue="Karan"
              feedbackValid="Looks good!"
              id="validationCustom01"
              label="Name *"
              required
            />
          </CCol>
          <CCol md={12}>
            <CFormInput
              type="email"
              defaultValue="karanample25@gmail.com"
              feedbackValid="Looks good!"
              id="validationCustom02"
              label="Email *"
              required
            />
          </CCol>
          <CCol md={12}>
            <CFormInput
              type="text"
              defaultValue="Amplework software Pvt Ltd......."
              feedbackValid="Looks good!"
              id="validationCustom02"
              label="Address *"
              required
            />
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

export default UserEdit
