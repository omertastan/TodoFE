import { Flex, Box } from 'rebass'
import { object, string } from 'yup'
import { Form, Formik } from 'formik'
import FormikField from '../formik-field'
import { useDispatch } from 'react-redux'
import { Button } from '../button'
import { signUpUser } from '../../store/actions'

const generalValidationSchema = () =>
  object().shape({
    email: string()
      .nullable()
      .required('This field should be provided')
      .email('Please enter a valid email'),
  })

export default function SignUp() {
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = (values) => {
    dispatch(signUpUser(values))
  }

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent={'center'}>
      <Box width={1 / 2} ml={300}>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={generalValidationSchema}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form>
              <Box width={1 / 2}>
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
              <Box width={1 / 2}>
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
              <Flex
                justifyContent={'center'}
                mr={400}
                mt={[30]}
                minWidth={[100, 248]}
              >
                <Button type="button" variant="primary" onClick={handleSubmit}>
                  SignUp
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}
