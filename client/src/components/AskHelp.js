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
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from '../context/auth';
import MobileNumberInput from './MobileNumberInput';

const CREATE_ASSISTANCE = gql`
  mutation createAssistance($data: CreateAssistanceInput!) {
    createAssistance(input: $data) {
      id
      lat
      lng
      requester
      contactNumber
      details
    }
  }
`;

const AskHelp = ({ modalOpen, setModalOpen }) => {
  const { coordinates } = useContext(AuthContext);
  const [contactNumber, setContactNumber] = useState('');
  const [fullname, setFullname] = useState('');
  const [details, setDetails] = useState('');
  const [createAssistance] = useMutation(CREATE_ASSISTANCE, {
    onCompleted({ createAssistance }) {
      window.location.reload();
    }
  });

  return (
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
        <form
          onSubmit={e => {
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
          }}
        >
          <DialogTitle id="form-dialog-title">Ask for help!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill up all information needed for us to know what help you
              need.
            </DialogContentText>
            <TextField
              autoFocus
              id="mobile"
              label="Contact Number"
              type="string"
              variant="outlined"
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
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default AskHelp;
