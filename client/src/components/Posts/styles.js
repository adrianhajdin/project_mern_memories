import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    // flexDirection: "column",
    alignItems: 'center',
  },
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
    // width: '20%',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  container: {
    // height: '100%',
    // width: '100%',
    // padding: '0 5%', width: '100%', margin: 0,

    // margin: 0,
  },
}));
