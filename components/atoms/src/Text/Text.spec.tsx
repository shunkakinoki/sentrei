/* eslint-disable no-undef */
import { render } from "@testing-library/react";

import { Text } from "./Text";

describe("Text", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Text>text </Text>);
    expect(baseElement).toBeTruthy();
  });
});
