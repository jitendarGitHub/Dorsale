// import { API } from 'src/api/Api'

import { Api, api } from 'src/api/Api'

// const initialState = {
//   sidebarShow: true,
// }

// export const changeState = (state = initialState, { type, ...rest }) => {
//   // console.log('Initial Action---', type)
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }

export const login = (data) => {
  // console.log('Action called', data)
  return {
    type: 'LOGIN_USER',
    // data: api.login,
    data: data,
  }
}

export const login2 = (data) => {
  // console.log('Action called', data)
  return {
    type: 'LOGIN2_USER',
    data: data,
  }
}
