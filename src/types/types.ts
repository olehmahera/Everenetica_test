export interface Country {
  name: {
    official: string;
  };
  ccn3: string;
  flags: {
    svg: string;
  };
};

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
};

export interface CountryState {
  allCountries: Country[], // Все страны
  selectedCountries: Country[], // Выбранные страны
  searchText: string,
  filteredCountries: Country[]
  status: Status, // Статус загрузки
  error: string | undefined, // Ошибка загрузки данных
};