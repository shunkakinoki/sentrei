import { Button } from "@sentrei/atoms";

export function ButtonGroup() {
  return (
    <div className="p-3 text-blue-800 bg-blue-300 rounded-lg">
      <Button
        label="Button 1"
        onClick={() => {
          console.log("Button 1");
        }}
      />
      <Button
        label="Button 2"
        onClick={() => {
          console.log("Button 2");
        }}
      />
      <Button
        label="Button 3"
        onClick={() => {
          console.log("Button 3");
        }}
      />
    </div>
  );
}
