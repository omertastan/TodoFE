import { Flex, Box } from 'rebass'
import { object, string } from 'yup'
import { Form, Formik } from 'formik'
import FormikField from '../formik-field'
import { useDispatch } from 'react-redux'
import { Button } from '../button'
import { postLoginData } from '../../store/actions'
import { Link } from 'react-router-dom'

const generalValidationSchema = () =>
  object().shape({
    email: string()
      .nullable()
      .required('This field should be provided')
      .email('Please enter a valid email'),
  })

export default function Login() {
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = (values) => {
    dispatch(postLoginData(values))
  }

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Flex
        width={['95%', '70%', '40%']}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box width={1}>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={generalValidationSchema}
          >
            {({ errors, touched, handleSubmit }) => (
              <Form>
                <Box width={1} mb="10px">
                  <FormikField
                    hideTitle={false}
                    errors={errors}
                    touched={touched}
                    name="email"
                    id="email"
                    title="email"
                    placeholder="Enter your email..."
                  />
                </Box>
                <Box width={1}>
                  <FormikField
                    type="password"
                    hideTitle={false}
                    errors={errors}
                    touched={touched}
                    name="password"
                    id="password"
                    title="password"
                    placeholder="Enter your password..."
                  />
                </Box>
                <Flex justifyContent="center" mt={[30]} minWidth={[100, 248]}>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                  <Link to={'/signup'}>Sign up</Link>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Flex>
  )
}
