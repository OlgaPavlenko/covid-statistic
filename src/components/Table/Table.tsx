import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HTTPService from "services/httpService";
import { TableHead } from "shared/constants/constants";
import {
  countriesBySearchQuerySelector,
  countriesSelector,
} from "store/selectors/country";
import { getStatistic, setModalCountry } from "store/slices/statisticSlice";
import { Row } from "../../shared/Row";
import { BasicModal } from "../../shared/Modal";
import { Sort } from "../../shared/Sort";
import { useStyle } from "./styles";

export const Table: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const modalOpen = (country: string) => {
    setOpen(true);
    dispatch(setModalCountry(country));
  };
  const modalClose = () => setOpen(false);
  const classes = useStyle();
  const dispatch = useDispatch();
  const allCountries = useSelector(countriesSelector);
  const countriesBySearch = useSelector(countriesBySearchQuerySelector);

  useEffect(() => {
    HTTPService.get("summary").then(({ data }) =>
      dispatch(getStatistic(data.Countries))
    );
  }, [dispatch]);

  const countries = countriesBySearch.length ? countriesBySearch : allCountries;

  return (
    <>
      <table className={classes.table}>
        <thead className={classes.head}>
          <tr className={classes.rowHead}>
            <th>{TableHead.Number}</th>
            <th>
              <div className={classes.sort}>
                {TableHead.Country}
                <Sort name={"Country"} />
              </div>
            </th>
            <th>
              <div className={classes.sort}>
                {TableHead.TotalConfirmed}
                <Sort name={"TotalConfirmed"} />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(countries)?.map((country) => (
            <Row
              key={country[0]}
              number={Number(country[0]) + 1}
              country={country[1].Country}
              total={country[1].TotalConfirmed}
              className={classes.row}
              modalOpen={() => modalOpen(country[1].Country)}
            />
          ))}
        </tbody>
      </table>
      <BasicModal open={open} modalClose={modalClose} />
    </>
  );
};
