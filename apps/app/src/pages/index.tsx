import { Button } from "@sentrei/components";

const IndexPage = () => {
  return (
    <div>
      <h1>Hello world !</h1>
      <Button label="sample button" onClick={() => console.log("test")} />
    </div>
  );
};

export default IndexPage;
