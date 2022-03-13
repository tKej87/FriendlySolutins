import { FC } from "react";
import { logoutIcon } from "../icons/Icons";
import styles from "./CloseAppBtn.module.css";

const CloseAppBtn: FC<{ onClose: () => void }> = (props) => {
  const onCloseHandler = () => {
    props.onClose();
  };

  return (
    <div className={styles["control-group"]}>
      <span className={styles["control-group__button"]} onClick={onCloseHandler}>
        {logoutIcon}
      </span>
    </div>
  );
};

export default CloseAppBtn;
