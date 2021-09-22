import { render } from "@testing-library/react";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Checkbox
        checked={false}
        onChange={e => {
          console.log(e);
        }}
      >
        Checkbox
      </Checkbox>,
    );
    expect(baseElement).toBeTruthy();
  });
});
