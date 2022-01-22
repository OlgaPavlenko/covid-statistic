import { ICountry, IInitialState } from "store/slices/statisticSlice";

export const countriesSelector = (state: IInitialState) => state.Countries;

export const querySelector = (state: IInitialState) => state.searchQuery;

export const countriesBySearchQuerySelector = (state: IInitialState) =>
  state.SearchCountries;

export const currentCounyrySelector = (state: IInitialState) =>
  state.modalCountry;
