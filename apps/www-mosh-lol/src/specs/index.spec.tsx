import { render } from "@testing-library/react";

import { Page } from "@sentrei/www-mosh-lol/pages/index";

describe("Page", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
