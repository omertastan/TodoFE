import { useDispatch } from "react-redux";
import { Flex, Box } from "rebass";
import { Button } from "../button";
import { setActivetodo, updateTodo } from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo, setIsDeleteOpen, setIsAddUpdateOpen }) => {
  const dispatch = useDispatch();

  const completeTodo = () =>
    dispatch(updateTodo(todo.id, { status: todo.status === 1 ? 2 : 1 }));

  const showDeleteModal = () => {
    dispatch(setActivetodo(todo));
    setIsDeleteOpen(true);
  };

  const showUpdateModal = () => {
    dispatch(setActivetodo(todo));
    setIsAddUpdateOpen(true);
  };

  return (
    <Flex
      width={1}
      fontSize={[16, 16, 16, 18]}
      alignItems={["initial", "center"]}
      flexDirection={["column", "row"]}
      minHeight={50}
      px={["5px", 10]}
      py={[10, 0]}
      mt={[10]}
      css={{ border: "1px solid #1600ff1f" }}
    >
      <Flex alignItems="center">
        <Flex
          width={24}
          height={24}
          css={{ cursor: "pointer" }}
          color={todo.status === 2 ? "#008068" : "#ddd4d480"}
          onClick={completeTodo}
          alignItems="center"
          justifyContent="center"
        >
          <FontAwesomeIcon
            icon={todo.status === 2 ? faCheckCircle : faCircle}
          />
        </Flex>

        <Flex
          alignItems="center"
          minHeight={28}
          maxWidth={["auto", 400, 470, 500]}
          ml={[10, 10, 15]}
          css={{ textDecoration: todo.status === 2 && "line-through" }}
        >
          {todo.title}
        </Flex>
      </Flex>
      <Box m={["20px auto 0", "0 0 0 auto"]} minWidth={[100, 248]}>
        <Button onClick={showUpdateModal} variant="secondary">
          Update
        </Button>
        <Button variant="danger" ml="8px" onClick={showDeleteModal}>
          Delete
        </Button>
      </Box>
    </Flex>
  );
};

export default TodoItem;
