import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Home } from ".";
import { render, screen } from "../../../tests/utils/provider";
import todoListMock from "../../../tests/mocks/todo-list.json";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  jest.clearAllMocks();
});

describe("<Home />", () => {
  it("Should render component", () => {
    render(<Home />);
    expect(screen.getByText("Testing")).toBeTruthy();
  });

  it("Should click in load todos button", async () => {
    mockedAxios.get.mockResolvedValue({
      data: todoListMock,
    });

    render(<Home />);
    userEvent.click(screen.getByTestId("load-todos-button"));
    expect(await screen.findByText("delectus aut autem")).toBeTruthy();
  });

  it("Should show loading text", async () => {
    render(<Home />);
    userEvent.click(screen.getByTestId("load-todos-button"));
    expect(await screen.findByText("Loading")).toBeTruthy();
  });
});
