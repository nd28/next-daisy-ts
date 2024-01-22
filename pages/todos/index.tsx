import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

class TodoList {
  list: { id: string; title: string; completed: boolean }[] = [];

  constructor(parameters: { id: string; title: string; completed: boolean }[]) {
    this.list = parameters;
  }

  public paginated(sizeOfPage: number, currentPage = 0) {
    // 0 => 0 - 10
    // 1 => 10 - 20
    return this.list.slice(
      currentPage * sizeOfPage,
      (currentPage + 1) * sizeOfPage,
    );
  }

  /**
   * getTotal
   */
  public getTotal() {
    return this.list.length;
  }
}

const PAGE_LIMIT = 10;

let todoList = new TodoList([]);

export default function TodoAppPage() {
  let [todos, setTodos] = useState([]);
  let [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        todoList = new TodoList(json);
        setTodos(todoList.paginated(PAGE_LIMIT, currentIndex));
      });
  }, []);

  //   prev section
  const prevSaction = () => {
    currentIndex -= 1;
    setCurrentIndex(currentIndex);
    setTodos(todoList.paginated(PAGE_LIMIT, currentIndex));
  };
  //   next section
  const nextSaction = () => {
    currentIndex += 1;
    setCurrentIndex(currentIndex);
    setTodos(todoList.paginated(PAGE_LIMIT, currentIndex));
  };
  // current section
  const currentSaction = () => {
    return currentIndex + 1;
  };

  return (
    <>
      <Layout>
        <h1>Todo App Page</h1>
        <div className="max-w-full overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>COMPLETED</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(({ id, title, completed }) => {
                return (
                  <tr key={id} className="hover:bg-base-200">
                    <td>{id}</td>
                    <td>{title}</td>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        name="completed"
                        id="completed"
                        value={completed}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>COMPLETED</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <button className="btn btn-square btn-ghost" onClick={prevSaction}>
          ←
        </button>{" "}
        • {currentSaction()}/{todoList.getTotal()} •
        <button className="btn btn-square btn-ghost" onClick={nextSaction}>
          →
        </button>
      </Layout>
    </>
  );
}
/**
 * Recoil state
const countState = atom(5);
function Component() {
  const [count, setCount] = useRecoilState(countState);
  snapshot.getLoadable(countState)
  return <div>{count}</div>;
}
 */
/**
 * React state
const initialValue = 5;
function Component() {
  const [count, setCount] = useState(initialValue);
  return <div>{count}</div>;
}
 */
