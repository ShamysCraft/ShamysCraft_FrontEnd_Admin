import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";

// import icons
import { PriorityHigh, HelpOutline } from "@material-ui/icons";

// import makeStyles
import { makeStyles } from "@material-ui/core/styles";
// import custom COLOR library
import {COLOURS } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  alertContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
    // height: '100vh'
  },
  IconCon: {
    alignSelf: "center",
  },
  Icon: {
    color: COLOURS.navCol,
    fontSize: "60px",
  },
  buttons: {
    justifyContent: "center",
    color: "white",
  },
  confirm: {
    backgroundColor: '#00a137',
    color: "white",

    "&:hover": {
      backgroundColor: '#00a137',
      color: "white",
    },
  },
  cancel: {
    backgroundColor: '#d62828',
    color: "white",
    "&:hover": {
      backgroundColor: '#d62828',
      color: "white",
    },
  },
}));

function Alert(props) {
  // State for receiving Alert Type [status]
  const [AlertType, setAlertType] = useState(props.Type);
  useEffect(() => setAlertType(props.Type), [props.Type]);

  // State for btnType [Confirm || Reject]
  const [BtnType, setBtnType] = useState(props.btnType);
  useEffect(() => setBtnType(props.btnType), [props.btnType]);

  const classes = useStyles();

  const DisplayAlert = () => {
    if (AlertType === "Pending" && BtnType === "Confirm")
      return (
        // Click Accept
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialogBox}
        >
          <DialogContent className={classes.alertContainer}>
            <DialogContent className={classes.IconCon}>
              <HelpOutline className={classes.Icon} />
            </DialogContent>
            <DialogTitle id="form-dialog-title">
              Confirm your request!
            </DialogTitle>
            <DialogContentText>{`Complaint: ${props.title}`}</DialogContentText>

            <DialogActions className={classes.buttons}>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.confirm}
              >
                Confirm
              </Button>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      );

    if (AlertType === "Pending" && BtnType === "Reject")
      return (
        // Click Accept
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialogBox}
        >
          <DialogContent className={classes.alertContainer}>
            <DialogContent className={classes.IconCon}>
              <HelpOutline className={classes.Icon} />
            </DialogContent>
            <DialogTitle id="form-dialog-title">
              Confirm your request!
            </DialogTitle>
            <DialogContentText>{`Complaint: ${props.title}`}</DialogContentText>
            <DialogContent>
              <TextField
                id="outlined-multiline-static"
                label="Write the Reason to Reject Complaint"
                multiline
                rows={2}
                color="secondary"
                variant="outlined"
                required
              />
            </DialogContent>
            <DialogActions className={classes.buttons}>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.confirm}
              >
                Confirm
              </Button>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      );

    if (AlertType === "Accepted")
      return (
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialogBox}
        >
          <DialogContent className={classes.alertContainer}>
            <DialogContent className={classes.IconCon}>
              <HelpOutline className={classes.Icon} />
            </DialogContent>
            <DialogTitle id="form-dialog-title">
              Confirm your request!
            </DialogTitle>
            <DialogContentText>{`Complaint: ${props.title}`}</DialogContentText>

            <DialogActions className={classes.buttons}>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.confirm}
              >
                Confirm
              </Button>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      );

    if (AlertType === "Processing")
      return (
        <Dialog
          open={props.open}
          onClose={props.onClose}
          aria-labelledby="form-dialog-title"
          className={classes.dialogBox}
        >
          <DialogContent className={classes.alertContainer}>
            <DialogContent className={classes.IconCon}>
              <HelpOutline className={classes.Icon} />
            </DialogContent>
            <DialogTitle id="form-dialog-title">
              Confirm your request!
            </DialogTitle>
            <DialogContentText>{`Complaint: ${props.title}`}</DialogContentText>

            <DialogActions className={classes.buttons}>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.confirm}
              >
                Confirm
              </Button>
              <Button
                fullWidth
                onClick={props.onClose}
                className={classes.cancel}
              >
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      );
  };

  return <div className={classes.Alert}>{DisplayAlert()}</div>;
}

export default Alert;
