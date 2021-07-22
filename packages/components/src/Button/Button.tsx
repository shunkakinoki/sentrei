type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label: string;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className="p-3 text-green-800 bg-green-300 rounded-lg"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
