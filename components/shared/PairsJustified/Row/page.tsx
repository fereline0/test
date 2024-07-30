import { IRow } from "@/interfaceses/row.interface";

interface Row extends IRow {
  y: number;
}

export default function Row(props: Row) {
  return (
    <div
      className="flex gap-[${}] justify-between flex-wrap"
      style={{
        gap: `${props.y}px`,
      }}
    >
      <div>{props.label}:</div>
      <div>{props.value}</div>
    </div>
  );
}
