import { FunctionComponent, useState } from "react";
import { SORTING_IMGS } from "../../shared/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import { useStyle } from "./styles";
import { countriesSelector } from "store/selectors/country";
import { ICountry, setCountriesList } from "store/slices/statisticSlice";

interface ISortProps {
  name: string;
}

export const Sort: FunctionComponent<ISortProps> = ({ name }) => {
  const classes = useStyle();

  const countries = useSelector(countriesSelector);
  const [order, setOrder] = useState<{ [key: string]: number }>({
    Country: 1,
    TotalConfirmed: 1,
  });
  const dispatch = useDispatch();

  const sort = (type: keyof ICountry) => {
    const tempCountries = [...countries];
    const resultCountries = tempCountries.sort(
      (prev: ICountry, next: ICountry) =>
        prev[type] > next[type] ? -order[type] : order[type]
    );

    setOrder({ ...order, [type]: -order[type] });
    dispatch(setCountriesList(resultCountries));
  };

  return (
    <div>
      <Button
        name={name}
        badgeSrc={order.Country ? SORTING_IMGS.up : SORTING_IMGS.down}
        className={classes.button}
        onClick={() => {
          sort(name as keyof ICountry);
        }}
      />
    </div>
  );
};
