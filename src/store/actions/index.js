export const FETCH_TODOS = 'FETCH_TODOS'
export const SET_TODOS = 'SET_TODOS'
export const FETCH_ACTIVE_TODO = 'FETCH_ACTIVE_TODO'
export const SET_ACTIVE_TODO = 'SET_ACTIVE_TODO'
export const SET_ERRORS = 'SET_ERRORS'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const ADD_TODO = 'ADD TODO'
export const SET_TODOS_UPDATED = 'SET TODOS UPDATED'
export const SIGNUP_USER = 'SIGNUP_USER'
export const SET_USER_TOKEN = 'SET_USER_TOKEN'
export const SET_LOGIN_DATA = 'SET_LOGIN_DATA'
export const POST_LOGIN_DATA = 'POST_LOGIN_DATA'
export const LOGOUT_USER = 'LOGOUT_USER'

export const fetchTodos = () => ({ type: FETCH_TODOS })
export const setTodos = (todos) => ({ type: SET_TODOS, todos })
export const fetchActivetodo = () => ({ type: FETCH_ACTIVE_TODO })
export const setActivetodo = (todo) => ({ type: SET_ACTIVE_TODO, todo })
export const addTodo = (todo) => ({ type: ADD_TODO, todo })
export const updateTodo = (id, newTodo) => ({ type: UPDATE_TODO, id, newTodo })
export const deleteTodo = (id) => ({ type: DELETE_TODO, id })
export const setErrors = (errors) => ({ type: SET_ERRORS, errors })
export const setTodosUpdated = (isUpdated) => ({
  type: SET_TODOS_UPDATED,
  isUpdated,
})
export const signUpUser = (user) => ({ type: SIGNUP_USER, user })
export const setUserToken = (usertoken) => ({ type: SET_USER_TOKEN, usertoken })
export const setLoginData = (usertoken) => ({ type: SET_LOGIN_DATA, usertoken })
export const postLoginData = (user) => ({ type: POST_LOGIN_DATA, user })
export const userLogOut = () => ({ type: LOGOUT_USER })
