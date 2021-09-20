import { render } from "@testing-library/react";

import { Page } from "@sentrei/www-mosh-lol/pages/index";

jest.mock("next/image", () => {
  // eslint-disable-next-line react/display-name
  return ({ src, alt }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  };
});

describe("Page", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeTruthy();
  });
});
