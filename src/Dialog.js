import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function InstagramDialog(props) {
  // props.instagram
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
      <InstagramIcon style={{ color: "#E1306C" }} />
      </Button>

      <Dialog onClose={handleClose} open={open}>
      <iframe title={props.instagram} height='590px' width='400' src="https://www.instagram.com/p/Cd2rMYwoFrH/embed" frameBorder="0"></iframe>
    </Dialog>
    </div>
  );
}