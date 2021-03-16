import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CircularProgress, InputAdornment } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import * as api from '../../../api';
import useStyles from './styles';

const SearchBox = () => {
        const [options, setOptions] = useState([]);

        const [value, setValue]           = useState({
          type: 'clear',
          value: null,
        });
        const [inputValue, setInputValue] = useState('');

        const [loading, setLoading] = useState(false);

        const history = useHistory();
        const classes = useStyles();

        useEffect(() => {
          setLoading(true);
          api.getGalleriesSuggestions({ q: inputValue })
            .then(({ data }) => {
              setOptions(data.map((item) => {
                return { title: item[0] };
              }));
            })
            .catch((error) => {
              console.error('===> Error!', error);
            });
          setLoading(false);
        }, [inputValue]);

        return (
          <Autocomplete
            id="search-box"
            getOptionSelected={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option?.title || option}
            options={options}
            loading={loading}
            freeSolo
            clearOnEscape
            disableListWrap
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search"
                variant="outlined"
                className={classes.inputInput}
                fullWidth
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading && <CircularProgress color="inherit" size={20} />}
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    </>
                  )
                }}
              />
            )}

            onChange={(event, newValue) => {
              if (typeof newValue === 'object') {
                setValue(newValue.title);
              } else {
                setValue(newValue);
              }
              history.push(`/search`);
            }}
            onInputChange={(event, newInputValue) => {
              console.log('onInputChange', newInputValue);
              setInputValue(newInputValue);
            }}
          >
          </Autocomplete>
        );
      }
;

export default SearchBox;
