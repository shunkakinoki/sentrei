import { render } from "@testing-library/react";

import { Select } from "./Select";

describe("Select", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Select
        value="png"
        options={[{ value: "png" }, { value: "jpeg" }, { value: "svg" }]}
        onChange={(e): void => {
          console.log(e);
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
