import { FC, useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Page from "../ui/Page";
import Footnote from "../components/Footnote";
import CloseAppBtn from "../ui/CloseAppBtn";
import useFetchData from "../hooks/useFetchData";
import { ServerData, ServerResponse } from "../types/types";
import Search from "../components/Search";

const HomePage: FC<{ onQuit: () => void }> = (props) => {
  const [data, setData] = useState<ServerData[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const httpClient = useFetchData();
  const apiRequest = httpClient.getData;

  const successHandler = (data: ServerResponse) => {
    setData(data.response.data);
    setLoading(false);
  };
  const errorHandler = (err: any) => {
    console.log(JSON.stringify(err));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    apiRequest(successHandler, errorHandler);
  }, []);

  return (
    <Page>
      <CloseAppBtn onClose={props.onQuit} />
      <Heading type="big" text="Your App" />
      {data && <Search data={data} loading={loading} />}
      <Footnote />
    </Page>
  );
};

export default HomePage;
