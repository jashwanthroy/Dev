import { render, screen } from "@testing-library/react";
import Contactus from "../Contactus";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
describe("For Combining TestCases", () => {
  test("Loading of contactus component", () => {
    render(<Contactus />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Loading of Button in contactus component", () => {
    render(<Contactus />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  it("should change to logout by clicking on login", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const before = screen.getByRole("button", { name: "Login" });
    fireEvent.click(before);
    const after = screen.getByRole("button", { name: "Logout" });
    expect(after).toBeInTheDocument();
  });
});
