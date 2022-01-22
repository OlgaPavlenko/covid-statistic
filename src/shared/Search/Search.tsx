import { ChangeEvent, FunctionComponent, useEffect } from "react";
import { Input } from "../Input";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesBySearchQuery,
  setSearchQuery,
} from "store/slices/statisticSlice";
import { querySelector } from "store/selectors/country";

export const Search: FunctionComponent = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(querySelector);

  const getSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(setSearchQuery(event.target?.value));
  };

  useEffect(() => {
    dispatch(getCountriesBySearchQuery(searchQuery));
  }, [searchQuery]);

  return <Input onChange={getSearchQuery} value={searchQuery} />;
};
