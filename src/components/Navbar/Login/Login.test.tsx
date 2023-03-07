import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

test("typing at login form", async () => {
  const userInfo = {
    username: "John",
    password: "Doe",
  };

  const handleSubmit = jest.fn();
  let ignoreParams: any;
  render(
    <Login
      submitDbg={handleSubmit}
      setComponent={ignoreParams}
      component={ignoreParams}
    />
  );
  const user = userEvent.setup();

  await user.type(screen.getByPlaceholderText("Username"), userInfo.username);
  await user.type(screen.getByPlaceholderText("Password"), userInfo.password);

  await user.click(screen.getByRole("button", { name: /log in/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      ...userInfo,
    })
  );
});
