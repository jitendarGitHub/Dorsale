import React from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CHeader,
  CHeaderText,
  CProgress,
  CRow,
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
import { cilMoodGood, cilOptions, cilPencil, cilPlus, cilTrash } from '@coreui/icons'

const User = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const navigate = useNavigate()

  const User = [
    {
      id: 1,
      name: 'Karan',
      gmail: 'karan@gmail.com',
      hcp: -34.5,
      gender: 'Male',
      country: 'India',
      role: 'Player',
      status: <CAvatar src={avatar1} status="success" />,
    },
    {
      id: 2,
      name: 'John',
      gmail: 'john@gmail.com',
      hcp: -12.23,
      gender: 'Male',
      country: 'Germany',
      role: 'Student',
      status: <CAvatar src={avatar3} status="success" />,
    },
    {
      id: 3,
      name: 'Jenny',
      gmail: 'Jenny@gmail.com',
      hcp: -50.2,
      gender: 'Female',
      country: 'UK',
      role: 'Player',
      status: <CAvatar src={avatar2} status="danger" />,
    },
    {
      id: 4,
      name: 'Deo',
      gmail: 'deo@gmail.com',
      hcp: -34.5,
      gender: 'Male',
      country: 'USA',
      role: 'Player',
      status: <CAvatar src={avatar6} status="danger" />,
    },
    {
      id: 5,
      name: 'Raj',
      gmail: 'raj@gmail.com',
      hcp: -11.5,
      gender: 'Male',
      country: 'India',
      role: 'Player',
      status: <CAvatar src={avatar3} status="success" />,
    },
    {
      id: 6,
      name: 'Ram',
      gmail: 'ram@gmail.com',
      hcp: 20.2,
      gender: 'Male',
      country: 'India',
      role: 'Player',
      status: <CAvatar src={avatar4} status="success" />,
    },
    {
      id: 7,
      name: 'Raman',
      gmail: 'raman@gmail.com',
      hcp: -30.5,
      gender: 'Male',
      country: 'India',
      role: 'Player',
      status: <CAvatar src={avatar5} status="danger" />,
    },
  ]

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="fs-4 text-start">
              {/* <CHeaderText> Users</CHeaderText>
              <CHeaderText>
                <CButton>Add New</CButton>
              </CHeaderText> */}
              <CHeader>
                <CHeaderText>UserList</CHeaderText>
                <CHeaderText>
                  <CButton onClick={() => navigate('new-user')}>
                    <CIcon icon={cilPlus} /> New User
                  </CButton>
                </CHeaderText>
              </CHeader>
            </CCardHeader>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>id</CTableHeaderCell>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell>Email</CTableHeaderCell>
                  <CTableHeaderCell>HCP</CTableHeaderCell>
                  <CTableHeaderCell>Gender</CTableHeaderCell>
                  <CTableHeaderCell>Country</CTableHeaderCell>
                  <CTableHeaderCell>Role</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                  <CTableHeaderCell>Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {User.map((item, index) => {
                  return (
                    <>
                      <CTableRow v-for="item in tableItems" key={index}>
                        <CTableDataCell>{item.id}</CTableDataCell>
                        <CTableDataCell className="text-start ">{item.name}</CTableDataCell>
                        <CTableDataCell>{item.gmail}</CTableDataCell>
                        <CTableDataCell className="text-start ">{item.hcp}</CTableDataCell>
                        <CTableDataCell>{item.gender}</CTableDataCell>
                        <CTableDataCell>{item.country}</CTableDataCell>
                        <CTableDataCell>{item.role}</CTableDataCell>
                        <CTableDataCell>{item.status}</CTableDataCell>
                        <CTableDataCell className="d-flex gap-2">
                          <CButton color="info" onClick={() => navigate('user-view')}>
                            <CIcon icon={cilMoodGood} />
                          </CButton>
                          <CButton color="secondary" onClick={() => navigate('user-edit')}>
                            <CIcon icon={cilPencil} />
                          </CButton>
                          <CButton color="danger">
                            <CIcon icon={cilTrash} />
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    </>
                  )
                })}
              </CTableBody>
            </CTable>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default User
