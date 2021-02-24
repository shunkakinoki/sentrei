import { Button } from "./Button";

export default { title: "Button" };

export const Default = (): JSX.Element => (
  <Button onClick={() => console.log("Clicked button !!!")}>Default</Button>
);

export const Sizes = (): JSX.Element => (
  <div>
    <Button
      className="mr-3"
      size="small"
      onClick={() => console.log("Clicked button !!!")}
    >
      Small
    </Button>
    <Button className="mr-3" onClick={() => console.log("Clicked button !!!")}>
      Medium
    </Button>
    <Button size="large" onClick={() => console.log("Clicked button !!!")}>
      Large
    </Button>
  </div>
);

export const Block = (): JSX.Element => (
  <Button block onClick={() => console.log("Clicked button !!!")}>
    Block
  </Button>
);

export const Primary = (): JSX.Element => (
  <Button onClick={() => console.log("Clicked button !!!")}>Primary</Button>
);

export const Loading = (): JSX.Element => (
  <Button loading onClick={() => console.log("Clicked button !!!")}>
    Loading
  </Button>
);

export const Disabled = (): JSX.Element => (
  <Button disabled onClick={() => console.log("Clicked button !!!")}>
    Disabled
  </Button>
);
