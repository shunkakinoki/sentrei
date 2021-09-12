/* eslint-disable no-undef */
//TODO: remove after merging https://github.com/sentrei/sentrei/pull/273.
import { render } from "@testing-library/react";

import { Switch } from "./Switch";

describe("Switch", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Switch
        checked={false}
        onChange={(e): void => {
          console.log(e);
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
