import { render } from "@testing-library/react";

import { Link } from "./Link";

describe("Link", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Link to="/test">Link</Link>);
    expect(baseElement).toBeTruthy();
  });
});
