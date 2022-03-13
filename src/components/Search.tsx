import { FC, useState, useEffect } from "react";
import { searchIcon } from "../icons/Icons";
import styles from "./Search.module.css";
import { ServerData } from "../types/types";
import DataTable from "./DataTable";
import Spinner from "../ui/Spinner";

const Search: FC<{ data: ServerData[]; loading: boolean }> = (props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ServerData[]>();

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const singleRow = props.data.map((el) => el);
    const results = singleRow.filter((el) => {
      const lowerSearchTerm = searchTerm.toLowerCase();

      return el.description.toLowerCase().includes(lowerSearchTerm);
    });
    setSearchResults(results);
  }, [searchTerm, props.data]);

  return (
    <div className={styles["control-group"]}>
      <div className={styles["control-group__search"]}>
        {searchIcon}
        <input
          onChange={handleSearchChange}
          value={searchTerm}
          placeholder="search by description"
        />
      </div>
      {props.loading ? <Spinner /> : <DataTable data={searchResults} />}
    </div>
  );
};

export default Search;
