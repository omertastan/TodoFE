import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Box, Flex } from 'rebass'
import App from './App'
import { store } from './store'
import { Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Login from './components/auth/login'
import { GlobalStyle, theme } from './theme'
import Header from './components/header'
import SignUp from './components/auth/SignUp'
import { ThemeProvider } from 'styled-components'
import { RestrictedPage } from './components/restrictedpage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const history = createBrowserHistory()

const Loader = () => {
  ;<Flex width={1} height={1} justifyContent="center" alignItems="center">
    <img
      alt="Loader"
      src="//s.svgbox.net/loaders.svg?fill=805ad5#puff"
      width="100px"
      height="100px"
    />
  </Flex>
}

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer autoClose={3000} />
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Router history={history}>
          <Box
            minWidth="100vw"
            minHeight="100vh"
            width={1}
            css={{
              background:
                'linear-gradient(to right top, #be93c5, #a2a3d9, #86b2df, #76bdda, #7bc6cc)',
            }}
          >
            <GlobalStyle />
            <Header />
            <Switch>
              <Route
                exact={true}
                component={Login}
                name="login"
                path={'/login'}
              />
              <Route
                exact={true}
                component={SignUp}
                name="SignUp"
                path={'/signup'}
              />
              <RestrictedPage Component={App} name="App" path={'/'} />
            </Switch>
          </Box>
        </Router>
      </Suspense>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
