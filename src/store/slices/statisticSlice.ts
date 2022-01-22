import { createSlice } from "@reduxjs/toolkit";

export interface ICountry {
  Country: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface IInitialState {
  Countries: ICountry[];
  searchQuery: string;
  SearchCountries: ICountry[];
  modalCountry: ICountry;
}

const initialState: IInitialState = {
  Countries: [],
  searchQuery: "",
  SearchCountries: [],
  modalCountry: {
    Country: "",
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  },
};

export const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    getStatistic: (state, action) => {
      state.Countries = [
        ...action.payload.map(
          ({
            Country,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered,
          }: ICountry) => ({
            Country: Country,
            TotalConfirmed: TotalConfirmed,
            TotalDeaths: TotalDeaths,
            TotalRecovered: TotalRecovered,
          })
        ),
      ];
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    getCountriesBySearchQuery: (state, action) => {
      state.SearchCountries = state.Countries.filter(({ Country }) =>
        Country.includes(action.payload)
      );
    },
    setModalCountry: (state, action) => {
      const currentCountry = state.Countries.find(
        ({ Country }) => Country === action.payload
      );
      state.modalCountry = {
        Country: currentCountry?.Country as string,
        TotalConfirmed: currentCountry?.TotalConfirmed as number,
        TotalDeaths: currentCountry?.TotalDeaths as number,
        TotalRecovered: currentCountry?.TotalRecovered as number,
      };
    },
    setCountriesList(state, action) {
      state.Countries = action.payload;
    },
  },
});

export const {
  getStatistic,
  setSearchQuery,
  getCountriesBySearchQuery,
  setModalCountry,
  setCountriesList,
} = statisticSlice.actions;

export default statisticSlice.reducer;
