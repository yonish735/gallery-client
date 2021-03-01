import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& input[type=file]::-webkit-file-upload-button': {
      backgroundColor: '#3f51b5',
      color: 'white',
      marginBottom: '10px',
      borderRadius: '4px',
      padding: '8px 22px',
      fontSize: '0.9375rem',
      fontWeight: 500,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
    '& input[type=file]::-webkit-file-upload-button:hover': {
      backgroundColor: '#303f9f',
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    marginLeft: '6px',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  buttonClear: {
    background: 'gray',
  },
}));
