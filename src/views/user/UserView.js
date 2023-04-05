import React, { useEffect, useState } from 'react'

import {
  CButton,
  CCard,
  CCardHeader,
  CHeaderText,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserView = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const navigate = useNavigate()

  return (
    <>
      <CCard
        className="mb-4 pt-2 pb-3 "
        style={{ paddingRight: '20px', paddingLeft: '20px', paddingTop: '20px' }}
      >
        <CCardHeader className="fs-4 text-start bg-white ">
          <CHeaderText> Show User</CHeaderText>
        </CCardHeader>
        <CTable className="pt-4 bg-white mt-3">
          <CTableBody color="">
            <CTableRow>
              <CTableHeaderCell scope="col">id</CTableHeaderCell>
              <CTableDataCell>1</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableDataCell>Karan</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="col">Title</CTableHeaderCell>
              <CTableDataCell>profile_password_edit</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="col">Email</CTableHeaderCell>
              <CTableDataCell>@karanample25gmail.com</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="col">Role</CTableHeaderCell>
              <CTableDataCell>Admin</CTableDataCell>
            </CTableRow>
            {/* </CTableRow> */}
          </CTableBody>
        </CTable>
        <CButton
          color="transparent bg-white"
          style={{ width: '120px' }}
          onClick={() => navigate('/user')}
        >
          Back to list
        </CButton>
      </CCard>
    </>
  )
}

export default UserView
