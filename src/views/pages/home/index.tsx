import { useAppDispatch, useAppSelector } from "../../../stores/hooks";
import { getTodos } from "../../../stores/todo";

const Home = () => {
  const dispatch = useAppDispatch();
  const { todoList, status } = useAppSelector((state) => state.todo);

  return (
    <>
      <h1>Testing</h1>
      <button
        onClick={() => dispatch(getTodos())}
        data-testid="load-todos-button"
      >
        Load Todos
      </button>

      {todoList?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>title</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo, key) => (
              <tr key={key}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {status === "pending" && <div>Loading</div>}
    </>
  );
};

export { Home };
