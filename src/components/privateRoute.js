import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { getLocalStorage } from '../utils'
import { setLoginData, SET_LOGIN_DATA } from '../store/actions'

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state)
  const { push } = useHistory()
  const userData = getLocalStorage('user')
  const { token } = userData ?? {}
  useEffect(() => {
    if (userData) {
      dispatch(setLoginData({ type: SET_LOGIN_DATA, data: token }))
    } else {
      push('/login')
    }
    // eslint-disable-next-line
  }, [dispatch, isAuthenticated])

  return isAuthenticated && children
}
