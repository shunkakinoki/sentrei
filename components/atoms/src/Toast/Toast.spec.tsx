import { render } from "@testing-library/react";

import { Toast } from "./Toast";

describe("Toast", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Toast
        title="test"
        onClick={(): void => {
          console.warn("Toast");
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
