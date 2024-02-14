import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext";

const BookingModal = ({ opened, setOpened, email, propertyId, stefano }) => {
  const [value, setvalue] = useState(null);
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);
  const userDetailContext = useContext(UserDetailContext);
  console.log(`*** token: ${token}`);
  console.log(`*** userDetailContext: ${JSON.stringify(userDetailContext)}`);
  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(Value, porpertyId, email),
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title='Select your date of visit'
      centered
    >
      <div className='flexColCenter' style={{ gap: "1rem" }}>
        <DatePicker value={value} onChange={setvalue} minDate={new Date()} />
        <Button disable={!value} oncliclk={() => mutate()}>
          Books visits
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
