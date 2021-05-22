import { Flex, Box } from "rebass";
import Modal from "react-modal";
import { object, string } from "yup";
import { Form, Formik } from "formik";
import FormikField from "../formik-field";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../button";
import { addTodo, setActivetodo, updateTodo } from "../../store/actions";
import "../../theme/modal-styles.css";

Modal.setAppElement("#root");

const generalValidationSchema = () =>
  object().shape({
    title: string()
      .nullable()
      .required("This field should be provided")
      .min(3, "Title can't be lower than 3 characters"),
  });

export default function CustomModal({ isOpen, setIsOpen, btnName }) {
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const dispatch = useDispatch();
  const activeTodo = useSelector((state) => state.activeTodo);

  const initialValues = {
    title: activeTodo?.title || "",
  };

  const onSubmit = (values) => {
    if (activeTodo) {
      dispatch(updateTodo(activeTodo.id, values));
    } else {
      dispatch(addTodo(values));
    }
    setIsOpen(false);
    dispatch(setActivetodo(null));
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        toggleModal();
        dispatch(setActivetodo(null));
      }}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
    >
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Box width={1}>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={generalValidationSchema}
          >
            {({ errors, touched, values, handleSubmit }) => (
              <Form>
                <Box width={1}>
                  <FormikField
                    hideTitle={!values.firstName}
                    errors={errors}
                    touched={touched}
                    name="title"
                    id="title"
                    title="Title"
                    placeholder="Enter a task..."
                  />
                </Box>
                <Flex justifyContent="center" mt={[30]} minWidth={[100, 248]}>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={handleSubmit}
                  >
                    {btnName}
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    ml="8px"
                    onClick={() => {
                      setIsOpen(false);
                      dispatch(setActivetodo(null));
                    }}
                  >
                    Cancel
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Modal>
  );
}
