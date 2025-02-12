import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
// import Add from "@mui/icons-material/Add";

export default function EditModal() {
  const [openEdit, setOpenEdit] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      {/* <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpenEdit(true)}
        sx={{ mt: 2 }}
      >
        Edit Data
      </Button> */}
      <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
        <ModalDialog>
          <DialogTitle>Edit data</DialogTitle>
          <DialogContent>Fill in the information of the user.</DialogContent>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpenEdit(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Age</FormLabel>
                <Input required />
              </FormControl>
              <FormControl>
                <FormLabel>Occupation</FormLabel>
                <Input required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
