import axios from "axios";
import todoListMock from "../../tests/mocks/todo-list.json";
import { getTodos, getTodoById, initialState } from ".";
import { mockStore } from "../../tests/utils/store";
import todoMock from "../../tests/mocks/todo.json";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
let store: any;

afterEach(() => {
  jest.clearAllMocks();
});

beforeEach(() => {
  store = mockStore();
});

describe("createAsyncThunk", () => {
  it("Should getTodos fulfilled", async () => {
    mockedAxios.get.mockResolvedValue({
      data: todoListMock,
    });

    await store.dispatch(getTodos());
    let state = store.getState().todo;

    expect(state.status).toBe("");
    expect(state.todoList).toEqual(todoListMock);
  });

  it("Should getTodos pending", () => {
    store.dispatch(getTodos());
    let state = store.getState().todo;

    expect(state.status).toBe("pending");
    expect(state.todoList).toEqual([]);
  });

  it("Should getTodos rejected", async () => {
    mockedAxios.get.mockRejectedValue({
      status: 404,
    });

    await store.dispatch(getTodos());
    let state = store.getState().todo;

    expect(state.status).toBe("rejected");
    expect(state.todoList).toEqual([]);
  });

  it("Should getTodoById fulfilled/pending", async () => {
    mockedAxios.get.mockResolvedValue({
      data: todoMock,
    });

    await store.dispatch(getTodoById(1));
    let state = store.getState().todo;

    expect(state.status).toBe("");
    expect(state.todo).toEqual(todoMock);
    expect(state.todoList).toEqual([]);
  });

  it("Should getTodoById rejected", async () => {
    mockedAxios.get.mockRejectedValue({
      status: 404,
    });

    await store.dispatch(getTodoById(1));
    let state = store.getState().todo;

    expect(state.status).toBe("rejected");
    expect(state.todo).toEqual(initialState.todo);
  });
});
