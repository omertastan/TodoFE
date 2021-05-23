import { Box } from 'rebass'

import TodoList from './components/todo-list'
import { Switch, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { RestrictedPage } from './components/restrictedpage'

const App = () => {
  const history = useHistory()
  useEffect(() => {
    history.push('/todolist')
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Box maxWidth={1000} px={20} width={1} m="0 auto">
        <Switch>
          <RestrictedPage
            exact={true}
            Component={TodoList}
            name="ToDoList"
            path={'/todolist'}
          />
        </Switch>
      </Box>
    </>
  )
}

export default App
