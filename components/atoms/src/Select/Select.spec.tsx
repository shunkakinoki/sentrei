import { render } from "@testing-library/react";

import { Select } from "./Select";

describe("Select", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Select
        value="png"
        options={[{ value: "png" }, { value: "jpeg" }]}
        onChange={e => {
          console.log(e);
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
