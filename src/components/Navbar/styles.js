import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
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
}))
;
