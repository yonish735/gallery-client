import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade('#494646', 0.05),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  inputInput: {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));
