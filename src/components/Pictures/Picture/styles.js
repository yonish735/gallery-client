import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  selected: {
    border: '3px solid red',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '5px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '5px',
    right: '0',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    textTransform: 'uppercase',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  popup: {
    position: 'absolute',
    width: '80%',
    left: '10%',
    padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(2, 4, 3),
    boxShadow: theme.shadows[5],
    backgroundColor: theme.palette.background.paper,
  },
  popupMedia: {
    paddingTop: '56.25%',
  },
  dialogAppBar: {
    position: 'relative',
  } ,
  dialogTitle: {
    marginLeft: theme.spacing(2),
    flex: 1,
  }
}));
