

import loginService from '../services/loginService'

export const InitializeUser = (credentials) => {
  return async (dispatch) => {
    const user = await loginService.login(credentials)
    console.log('user reduverista', user)
    window.localStorage.setItem(
      'loggedUser', JSON.stringify(user))
    dispatch ({
      type: 'STOREUSER',
      user :user

    }
    )
  }}


export const storeUser = ( user) => {
  return {
    type: 'STOREUSER',
    user:user

  }
}

const initialUser = null

const userReducer = (state  = initialUser, action) => {
  switch (action.type)
  {case 'STOREUSER':
    return state = action.user
  default:
    return state
  }
}
export default userReducer