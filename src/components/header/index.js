import { Box, Flex, Heading } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../button'
import { userLogOut } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  const isLogedIn = useSelector((state) => state.isAuthenticated)
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(userLogOut())
  }
  console.log(isLogedIn)
  return (
    <Flex
      maxWidth={1300}
      margin="0 auto"
      px={20}
      width={1}
      height={120}
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading fontFamily="Roboto" fonstSize={[4, 5, 6]}>
        TODOS
      </Heading>
      <Flex alignItems="center">
        <Box mr="10px">
          <FontAwesomeIcon icon={faClipboardList} size="2x" />
        </Box>
        {isLogedIn && (
          <Button type="button" variant="secondary" onClick={logOut}>
            Logout
          </Button>
        )}
      </Flex>
    </Flex>
  )
}

export default Header
