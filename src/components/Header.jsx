import React from "react";
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core' 
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles(()=>({
    typographyStyles: {
        flex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography className={classes.typographyStyles} variant="h6">
            This is our header
        </Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
