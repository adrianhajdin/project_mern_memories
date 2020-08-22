import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "center"
    },
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        width: '50%',
    },
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: "center"
    },
    container: {
        width: '100%', 
        margin: 0,
      },
}));