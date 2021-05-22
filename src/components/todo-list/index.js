import { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { Flex, Box } from 'rebass'
import { Button } from '../button'
import DeleteModal from '../delete-modal'
import UpdateModal from '../add-update-modal'
import TodoItem from '../todo-item'
import { fetchTodos, setActivetodo } from '../../store/actions'

const TodoList = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isAddUpdateOpen, setIsAddUpdateOpen] = useState(false)
  const [btnName, setBtnName] = useState('Add todo')

  const dispatch = useDispatch()
  const { todos, isTodosUpdated } = useSelector((state) => state, shallowEqual)
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  useEffect(() => {
    if (isTodosUpdated) {
      dispatch(fetchTodos())
    }
  }, [dispatch, isTodosUpdated])

  const showAddModal = () => {
    setBtnName('Add todo')
    setActivetodo(null)
    setIsAddUpdateOpen(true)
  }

  const showUpdateModal = () => {
    setBtnName('Update')
    setIsAddUpdateOpen(true)
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      minHeight="80vh"
      width={1}
      p={[2, 3, 4]}
      css={{ position: 'relative' }}
    >
      <UpdateModal
        isOpen={isAddUpdateOpen}
        setIsOpen={setIsAddUpdateOpen}
        btnName={btnName}
      />
      <DeleteModal isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setIsDeleteOpen={setIsDeleteOpen}
          setIsAddUpdateOpen={showUpdateModal}
        />
      ))}
      <Box
        css={{ position: 'fixed', right: '30px', bottom: '30px', zIndex: 10 }}
      >
        <Button onClick={showAddModal} variant="primary" padding="10px 20px">
          + Add Todo
        </Button>
      </Box>
    </Flex>
  )
}

export default TodoList
