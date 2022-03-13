import { FC } from "react";
import Heading from "../ui/Heading";
import Page from "../ui/Page";

const SplashPage: FC<{ onOpen: () => void }> = (props) => {
  const openAppHandler = () => {
    props.onOpen();
  };
  return (
    <Page>
      <Heading type="big" text="Task by Tomasz Kamiński" />
      <Heading type="medium" text="Click here to open the App" onClick={openAppHandler} />
    </Page>
  );
};

export default SplashPage;
