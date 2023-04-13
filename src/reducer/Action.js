import { API } from 'src/apiService'

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
  console.log('Action called', data)
  return {
    type: 'LOGIN_USER',
    // data: data,
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
