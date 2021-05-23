import styled from 'styled-components'
import { Field } from 'formik'

export const FormFieldContainer = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  background: 'transparent',
}))

export const FormField = styled(Field)((props) => ({
  border: 'none',
  borderBottom: `1px solid ${props.bordercolor}`,
  padding: '10px 0',
  backgroundColor: 'transparent !important',

  ':focus': {
    outline: 'none',
  },
  ':-internal-autofill-selected': {
    backgroundColor: 'transparent !important',
  },
}))
