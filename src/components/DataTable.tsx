import { FC } from "react";
import { ServerData } from "../types/types";
import styles from "./DataTable.module.css";
import TableCell from "./TableCell";
import TableRow from "./TableRow";

const DataTable: FC<{ data: ServerData[] | undefined }> = (props) => {
  const columnHeads = [
    "WO ID",
    "Description",
    "Received date",
    "Assigned to",
    "Status",
    "Priority",
  ];

  const columnsQuantity = columnHeads!.length;

  const heads = columnHeads.map((el) => (
    <TableCell key={el} type="head" text={el} cellsQuantity={columnsQuantity} />
  ));
  const rows = props.data?.map((el) => (
    <TableRow
      key={el.work_order_id}
      values={el}
      columnsQuantity={columnsQuantity}
      columnsName={columnHeads}
    />
  ));
  return (
    <div className={styles["table"]}>
      <div className={styles["table__heads"]}>{heads}</div>
      {rows}
      {props.children}
    </div>
  );
};

export default DataTable;
