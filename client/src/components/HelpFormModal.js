import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize
} from '@material-ui/core';

const HelpFormModal = ({ open, setOpen }) => (
  <Dialog
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">Ask for help!</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Please fill up all information needed for us to know what help you need.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="fullname"
        label="Full Name"
        type="string"
        fullWidth
        placeholder="Juan Dela Cruz"
      />
      <TextField
        margin="dense"
        id="contact"
        label="Contact Number"
        type="string"
        fullWidth
        placeholder="09171234567"
      />
      <TextField
        margin="dense"
        id="details"
        label="Details"
        type="string"
        rows={5}
        rowsMax={5}
        multiline={true}
        fullWidth
        placeholder="Please provide us what help do you need."
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)} color="primary">
        Cancel
      </Button>
      <Button onClick={() => setOpen(false)} color="primary">
        Submit
      </Button>
    </DialogActions>
  </Dialog>
);

export default HelpFormModal;
