import { FC } from "react";
import { ServerData } from "../types/types";
import { removeWhiteSpaces } from "../util/modifyString";
import TableCell from "./TableCell";
import styles from "./TableRow.module.css";

const TableRow: FC<{ values: ServerData; columnsQuantity: number; columnsName: string[] }> = (
  props
) => {
  const displayedContent = props.columnsName.map((el) => {
    const keyName =
      el === "WO ID"
        ? "work_order_id"
        : (removeWhiteSpaces(el.toLowerCase()) as keyof typeof props.values);
    const name =
      keyName === "assigned_to"
        ? props.values.assigned_to.map((el) => el.person_name).join(" ")
        : props.values[keyName];

    return <TableCell key={name} type="row" cellsQuantity={props.columnsQuantity} text={name} />;
  });

  return <div className={styles["row"]}>{displayedContent}</div>;
};

export default TableRow;
