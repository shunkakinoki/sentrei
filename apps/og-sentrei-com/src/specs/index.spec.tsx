import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";

import { Index } from "@sentrei/og-sentrei-com/pages/index";

describe("ButtonScreen", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <RecoilRoot>
        <Index />
      </RecoilRoot>,
    );
    expect(baseElement).toBeTruthy();
  });
});
