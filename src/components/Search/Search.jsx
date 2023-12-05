import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Search.styled';

const Searchbar = ({ onSnbmitSearchBar, value }) => (
  <SearchBar>
    <SearchForm onSubmit={onSnbmitSearchBar}>
      <SearchFormButton>
        <span>Search</span>
      </SearchFormButton>

      <SearchFormInput
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        defaultValue={value}
        placeholder="Search movies"
      />
    </SearchForm>
  </SearchBar>
);

export default Searchbar;
