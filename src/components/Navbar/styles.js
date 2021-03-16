import { fade, makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  headerOuter: {
    borderRadius: 15,
    margin: '0 0 30px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  title: {
    color: 'rgba(0, 183, 255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginRight: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  logout: {
    marginLeft: '1em',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  albumAlbum: {
    color: '#54c25a',
    fontWeight: 900,
  },
  albumShare: {
    color: '#2277ca',

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade('#494646', 0.05),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
}));
