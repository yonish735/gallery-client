import React, { useEffect, useState } from 'react';
import SearchBar from 'material-ui-search-bar';
import { useHistory } from 'react-router-dom';

import * as api from '../../../api';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { getPublicGalleries } from '../../../actions/galleries';
import Menu from './Menu';

const SearchBox = () => {
  const [options, setOptions] = useState([]);

  const [value, setValue]             = useState('');
  const [searchValue, setSearchValue] = useState('');

  const [loading, setLoading] = useState(false);

  const history  = useHistory();
  const dispatch = useDispatch();
  const classes  = useStyles();

  // TODO: support display of suggestions
  useEffect(() => {
    if (value === '') {
      setOptions([]);
      dispatch(getPublicGalleries());
      return;
    }
    setLoading(true);
    api.getGalleriesSuggestions({ q: value })
      .then(({ data }) => {
        setOptions(data.map((item) => {
          return item[0];
        }));
      })
      .catch((error) => {
        console.error('===> Error!', error);
        setOptions([]);
      })
      .finally(() => setLoading(false));
  }, [value]);

  useEffect(() => {
    if (searchValue !== '') {
      dispatch(getPublicGalleries(searchValue));
    }
  }, [searchValue, dispatch]);

  return (
    <>
      <SearchBar
        value={value}
        onChange={(newValue) => {
          console.log('onChange', value);
          setValue(newValue);
          setSearchValue('');
        }}
        onRequestSearch={() => {
          console.log('onRequestSearch', value);
          setSearchValue(value);
          history.push(`/search`);
        }}
        cancelOnEscape
        className={classes.inputInput}
        placeholder="Search..."
      />
      <Menu />
    </>
  );
};

export default SearchBox;
