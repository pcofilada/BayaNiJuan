import React, { useState, useContext } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from '../../context/auth';
import { ASK_ASSISTANCE } from '../../graphql/mutations/assistance';
import MobileNumberInput from '../MobileNumberInput';

const AskHelpForm = ({ modalOpen, setModalOpen }) => {
  const { coordinates } = useContext(AuthContext);
  const [contactNumber, setContactNumber] = useState('');
  const [fullname, setFullname] = useState('');
  const [details, setDetails] = useState('');
  const [createAssistance, { loading }] = useMutation(ASK_ASSISTANCE, {
    onCompleted({ createAssistance }) {
      window.location.reload();
    }
  });

  const submitHandler = e => {
    e.preventDefault();
    createAssistance({
      variables: {
        data: {
          attributes: {
            requester: fullname,
            lat: coordinates.lat,
            lng: coordinates.lng,
            contactNumber,
            details
          }
        }
      }
    });
  };

  return (
    <Dialog
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={e => submitHandler(e)}>
        <DialogTitle id="form-dialog-title">Ask for help!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill up all information needed in order for us to help you
          </DialogContentText>
          <TextField
            autoFocus
            id="mobile"
            label="Contact Number"
            type="string"
            variant="outlined"
            placeholder="9123456789"
            value={contactNumber}
            onChange={e => setContactNumber(e.target.value)}
            fullWidth
            InputProps={{
              inputComponent: MobileNumberInput
            }}
          />
          <TextField
            margin="dense"
            id="fullname"
            label="Full Name"
            type="string"
            variant="outlined"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            fullWidth
            placeholder="Juan Dela Cruz"
          />
          <TextField
            margin="dense"
            id="details"
            label="Details"
            type="string"
            rows={5}
            multiline
            variant="outlined"
            value={details}
            onChange={e => setDetails(e.target.value)}
            fullWidth
            placeholder="Please provide us what help do you need."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            type="submit"
            color="primary"
            disabled={loading || details.length < 10}
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AskHelpForm;
