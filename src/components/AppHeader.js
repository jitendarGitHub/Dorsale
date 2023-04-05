import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CHeaderNav>
              <CDropdown>
                <CDropdownToggle href="#" color="">
                  <CIcon icon={cilBell} size="lg" />
                </CDropdownToggle>
                <CDropdownMenu>
                  <p className="text-center fs-5">Notification</p>
                  <hr />
                  <CDropdownItem href="#">
                    <div className="main d-flex">
                      <img
                        src="https://coreui.io/docs/assets/img/avatars/3.jpg"
                        width={'50px'}
                        height={'50px'}
                        className="mt-2 rounded"
                      />
                      <div className="">
                        <div className="main d-flex">
                          <div className="name mx-2 fw-bold">Jose Leos</div>
                          <div className="time mx-5 fw-100" style={{ color: '#9ca9ac' }}>
                            38 minutes ago
                          </div>
                        </div>
                        <div className="title">
                          <p className="mx-2">
                            Added you to an event Project stand up<br></br>Tommorrow at 1230pm
                          </p>
                        </div>
                      </div>
                    </div>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <div className="main d-flex">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-2.95cc79ae.jpg"
                        width={'50px'}
                        height={'50px'}
                        className="mt-2 rounded"
                      />
                      <div className="">
                        <div className="main d-flex">
                          <div className="name mx-2 fw-bold">Nail Sims</div>
                          <div className="time mx-5 fw-100 " style={{ color: '#9ca9ac' }}>
                            12 minutes ago
                          </div>
                        </div>
                        <div className="title">
                          <p className="mx-2">
                            You have benn assigned a task for Awesome <br />
                            new Project
                          </p>
                        </div>
                      </div>
                    </div>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <div className="main d-flex">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-3.55d8a646.jpg"
                        width={'50px'}
                        height={'50px'}
                        className="mt-2 rounded"
                      />
                      <div className="">
                        <div className="main d-flex">
                          <div className="name mx-2 fw-bold">Roberta Cases</div>
                          <div className="time mx-5 fw-100 " style={{ color: '#9ca9ac' }}>
                            23 minutes ago
                          </div>
                        </div>
                        <div className="title">
                          <p className="mx-2">
                            Tagged you in a document called
                            <br />
                            First Quarter financial Plain
                          </p>
                        </div>
                      </div>
                    </div>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <div className="main d-flex">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-4.feacbe49.jpg"
                        width={'50px'}
                        height={'50px'}
                        className="mt-2 rounded"
                      />
                      <div className="">
                        <div className="main d-flex">
                          <div className="name mx-2 fw-bold">Joseph Garth</div>
                          <div className="time mx-5 fw-100 " style={{ color: '#9ca9ac' }}>
                            5 Hour ago
                          </div>
                        </div>
                        <div className="title">
                          <p className="mx-2">
                            New message Hey whats up?
                            <br />
                            All set for the presentation
                          </p>
                        </div>
                      </div>
                    </div>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <div className="main d-flex">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-5.cb7f167c.jpg"
                        width={'50px'}
                        height={'50px'}
                        className="mt-2 rounded"
                      />
                      <div className="">
                        <div className="main d-flex">
                          <div className="name mx-2 fw-bold">Josh Leos</div>
                          <div className="time mx-5 fw-100 " style={{ color: '#9ca9ac' }}>
                            2 minutes ago
                          </div>
                        </div>
                        <div className="title">
                          <p className="mx-2">
                            New message We need to improve
                            <br />
                            the UI/UX for the landing page
                          </p>
                        </div>
                      </div>
                    </div>
                  </CDropdownItem>
                  <hr />
                  <p className="text-center fs-6">View all</p>
                </CDropdownMenu>
              </CDropdown>
            </CHeaderNav>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
