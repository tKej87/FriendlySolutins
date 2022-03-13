import { FC } from "react";
import styles from "./TableCell.module.css";

const TableCell: FC<{ type: "head" | "row"; text: string | number; cellsQuantity: number }> = (
  props
) => {
  const cellWidth = `${100 / props.cellsQuantity}%`;

  return (
    <div
      className={`${styles["cell"]} ${styles["cell_" + props.type]}`}
      style={{ width: cellWidth }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default TableCell;
