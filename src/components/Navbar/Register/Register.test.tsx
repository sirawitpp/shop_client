import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";

test("typing at register form", async () => {
  const userInfo = {
    email: "john@email.com",
    username: "John",
    password: "Doe",
    confirmPassword: "Doe",
  };

  const handleSubmit = jest.fn();
  let ignoreParams: any;
  render(
    <Register
      submitDbg={handleSubmit}
      setComponent={ignoreParams}
      component={ignoreParams}
    />
  );
  const user = userEvent.setup();

  await user.type(screen.getByPlaceholderText("Email"), userInfo.email);
  await user.type(screen.getByPlaceholderText("Username"), userInfo.username);
  await user.type(screen.getByPlaceholderText("Password"), userInfo.password);
  await user.type(
    screen.getByPlaceholderText("Confirm Password"),
    userInfo.confirmPassword
  );

  await user.click(screen.getByRole("button", { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      ...userInfo,
    })
  );
});
