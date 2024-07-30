interface IRow {
  label: string;
  value: string | number | React.ReactNode;
}

export default function Row(props: IRow) {
  return (
    <div className="flex justify-between">
      <p className="font-bold">{props.label}:</p>
      {props.value}
    </div>
  );
}
