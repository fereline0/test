import React from "react";
import Row from "./Row/page";
import { IRow } from "@/interfaceses/row.interface";
import Marginer from "../Marginer/page";

interface IPairsJustified {
  data: IRow[];
  y: number;
}

export default function PairsJustified(props: IPairsJustified) {
  return (
    <div className="max-w-full md:max-w-3xl">
      <Marginer y={props.y}>
        {props.data.map((row, index) => {
          const shouldRender = row.value || row.value === 0;

          if (shouldRender)
            return (
              <Row
                key={index}
                label={row.label}
                value={row.value}
                y={props.y}
              />
            );
        })}
      </Marginer>
    </div>
  );
}
