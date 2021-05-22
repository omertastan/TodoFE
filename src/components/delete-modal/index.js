import { Flex } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../button";
import { deleteTodo, setActivetodo } from "../../store/actions";
import "../../theme/modal-styles.css";

Modal.setAppElement("#root");

export default function CustomModal({ isOpen, setIsOpen }) {
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const dispatch = useDispatch();
  const activeTodo = useSelector((state) => state.activeTodo);

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
        <Flex
          width={1}
          maxWidth={600}
          p={10}
          m="0 auto"
          justifyContent="center"
        >
          <Flex color={"#c06e6a"} alignItems="center" justifyContent="center">
            <FontAwesomeIcon icon={faExclamationTriangle} size="4x" />
          </Flex>
          <Flex alignItems="center" ml={20}>
            Are you sure you want to delete the task?
          </Flex>
        </Flex>
        <Flex justifyContent="center" mt={[30]} minWidth={[100, 248]}>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(deleteTodo(activeTodo.id));
              dispatch(setActivetodo(null));
              setIsOpen(false);
            }}
          >
            Delete
          </Button>
          <Button
            ml="8px"
            variant="secondary"
            onClick={() => {
              setIsOpen(false);
              dispatch(setActivetodo(null));
            }}
          >
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
}
