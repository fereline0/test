import { IRow } from "@/interfaceses/row.interface";

export default function Row(props: IRow) {
  return (
    <div className="flex justify-between flex-wrap">
      <div>{props.label}:</div>
      <div>{props.value}</div>
    </div>
  );
}
