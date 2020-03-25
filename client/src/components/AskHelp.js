import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const AskHelp = ({ modalOpen, setModalOpen }) => (
  <>
    <Button
      variant="contained"
      color="primary"
      startIcon={<LocalHospitalIcon />}
      onClick={() => setModalOpen(true)}
    >
      Ask For Help!
    </Button>
    <Dialog
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Ask for help!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill up all information needed for us to know what help you
          need.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="fullname"
          label="Full Name"
          type="string"
          variant="outlined"
          fullWidth
          placeholder="Juan Dela Cruz"
        />
        <TextField
          margin="dense"
          id="contact"
          label="Contact Number"
          type="string"
          variant="outlined"
          fullWidth
          placeholder="09171234567"
        />
        <TextField
          margin="dense"
          id="details"
          label="Details"
          type="string"
          rows={5}
          multiline
          variant="outlined"
          fullWidth
          placeholder="Please provide us what help do you need."
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setModalOpen(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => setModalOpen(false)} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  </>
);

export default AskHelp;
