import React from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardHeader,
  CFormCheck,
  CHeader,
  CHeaderText,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'

import avatar1 from 'src/assets/images/avatars/2.jpg'
import avatar2 from 'src/assets/images/avatars/1.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import { cilAirplay, cilPlus } from '@coreui/icons'

const User = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const navigate = useNavigate()
  const Admin = [
    {
      id: 1,
      name: 'Karan',
      title: 'profile_password_edit',
      image: avatar1,
      status: 'success',
    },
    {
      id: 2,
      name: 'John',
      title: 'transition_access',
      image: avatar2,
      status: 'danger',
    },
    {
      id: 3,
      name: 'Deo',
      title: 'transition_delete',
      image: avatar3,
      status: 'success',
    },
    {
      id: 4,
      name: 'Jenny',
      title: 'transition_show',
      image: avatar4,
      status: 'success',
    },
    {
      id: 5,
      name: 'Ram',
      title: 'transition_create',
      image: avatar5,
      status: 'success',
    },
    {
      id: 6,
      name: 'Raj',
      title: 'stock_access',
      image: avatar6,
      status: 'danger',
    },
    {
      id: 7,
      name: 'Deo',
      title: 'transition_delete',
      image: avatar2,
      status: 'success',
    },
    {
      id: 8,
      name: 'Jenny',
      title: 'transition_show',
      image: avatar1,
      status: 'danger',
    },
    {
      id: 9,
      name: 'Ram',
      title: 'transition_create',
      image: avatar3,
      status: 'success',
    },
  ]
  return (
    <>
      <CCard className="mb-4 text-center">
        <CCardHeader className="fs-4 text-start">
          <CHeader className="bg-light">
            <CHeaderText>UserList</CHeaderText>
            <CHeaderText>
              <CButton onClick={() => navigate('/new-user')}>
                <CIcon icon={cilPlus} /> New User
              </CButton>
            </CHeaderText>
          </CHeader>
        </CCardHeader>
        <CTable>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col"></CTableHeaderCell>
              <CTableHeaderCell scope="col">id</CTableHeaderCell>
              <CTableHeaderCell scope="col">Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Title</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {Admin.map((item, index) => {
              return (
                <CTableRow key={index}>
                  <CTableHeaderCell>
                    <CFormCheck id="flexCheckDefault" />
                  </CTableHeaderCell>
                  <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                  <CTableDataCell className="d-flex text-center justify-content-center">
                    {' '}
                    <CAvatar src={item.image} status={item.status} />
                    <p className="w-25 mx-1">{item.name}</p>
                  </CTableDataCell>
                  <CTableDataCell>{item.title}</CTableDataCell>
                  <CTableDataCell className="gap-2">
                    <CButton
                      color="primary"
                      className="mx-1"
                      onClick={() => navigate('/user-view')}
                    >
                      <CIcon icon={cilAirplay} />
                    </CButton>
                    <CButton
                      color="info"
                      className="mx-1 text-light"
                      onClick={() => navigate('/user-edit')}
                    >
                      Edit
                    </CButton>
                    <CButton color="danger" className="mx-1 text-light">
                      Delete
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              )
            })}
          </CTableBody>
        </CTable>
      </CCard>
    </>
  )
}

export default User
