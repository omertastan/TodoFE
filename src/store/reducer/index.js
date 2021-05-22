import {
  FETCH_TODOS,
  SET_TODOS,
  FETCH_ACTIVE_TODO,
  SET_ACTIVE_TODO,
  SET_ERRORS,
  SET_TODOS_UPDATED,
  SIGNUP_USER,
  SET_LOGIN_DATA,
  LOGOUT_USER,
} from '../actions'

const FETCH_STATUSES = {
  IDLE: 'idle',
  PENDING: 'pending',
  FETCHED: 'fetched',
}

const initialState = {
  isAuthenticated: false,
  fetchStatus: 'idle',
  todos: [],
  errors: [],
  activeTodo: null,
  isTodosUpdated: false,
  isPending: false,
  token: null,
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
    case FETCH_ACTIVE_TODO:
      return {
        ...state,
        fetchStatus: FETCH_STATUSES.PENDING,
      }
    case SET_TODOS:
      return {
        ...state,
        fetchStatus: FETCH_STATUSES.FETCHED,
        todos: action.todos,
        isTodosUpdated: false,
      }
    case SET_ACTIVE_TODO:
      return {
        ...state,
        fetchStatus: FETCH_STATUSES.FETCHED,
        activeTodo: action.todo,
      }
    case SET_ERRORS:
      return {
        ...state,
        fetchStatus: FETCH_STATUSES.IDLE,
        errors: [...state.errors, action.error],
        isTodosUpdated: false,
      }
    case SET_TODOS_UPDATED:
      return {
        ...state,
        isTodosUpdated: action.isUpdated,
      }
    case SIGNUP_USER:
      return {
        ...state,
        isPending: true,
      }
    case SET_LOGIN_DATA:
      return {
        ...state,
        token: action.usertoken,
        isAuthenticated: true,
      }
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      }

    default:
      return state
  }
}

export default todoReducer
