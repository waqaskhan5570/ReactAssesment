import React, { useState } from "react";
import CheckIns from "../../components/Home/CheckIns/CheckIns";
import ContainerLayout from "../../components/Layouts/ContainerLayout/ContainerLayout";
import PrimaryBtn from "../../components/UI/PrimaryBtn/PrimaryBtn";
import Title from "../../components/UI/Typography/Title/Title";
import AddCheckIn from "../../components/Home/AddCheckIn/AddCheckIn";
import { useMutation } from "@apollo/client";
import "./Home.css";
import { ADDD_NEW_CHECKIN } from "../../utils/GraphQL/Mutation";
import { toast } from "react-toastify";

function Home() {
  const [inputs, setInputs] = useState({
    name: "",
    image_url: "",
  });
  const [addCheckInModal, setAddCheckInModal] = useState(false);

  const handleAddCheckIn = () => {
    setAddCheckInModal(!addCheckInModal);
  };

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [insert_check_in_one, { error, loading }] =
    useMutation(ADDD_NEW_CHECKIN);

  const addCheckIn = async () => {
    const date = new Date();
    if (inputs.name && inputs.image_url !== "") {
      await insert_check_in_one({
        variables: {
          name: inputs.name,
          image_url: inputs.image_url,
          created_at: date.toISOString(),
        },
      });
      toast.success(`Check in at ${inputs.name} added`);
      setInputs({
        name: "",
        image_url: "",
      });
      handleAddCheckIn();
    } else {
      toast.warning("All fields Required");
    }
    if (error) {
      toast.error("Error Occured while adding CheckIN");
    }
  };

  return (
    <>
      <ContainerLayout>
        <section className="mt-2">
          <div className="checkin_top pt-2 pb-2">
            <div className="content content__Wrapper">
              <div className="checkin_top__left">
                <Title size="normal" color="dark" isResponsive>
                  CheckIns
                </Title>
                <p className="mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
                  ipsa!
                </p>
              </div>
              <PrimaryBtn
                size="sm"
                color="black"
                type="button"
                onClick={handleAddCheckIn}
                res
              >
                Add Check In
              </PrimaryBtn>
            </div>
          </div>
          <div className="checkins_wrapper">
            <CheckIns />
          </div>
        </section>
        <AddCheckIn
          handleAddCheckIn={handleAddCheckIn}
          show={addCheckInModal}
          inputChangeHandler={inputChangeHandler}
          addCheckIn={addCheckIn}
          inputs={inputs}
          loading={loading}
        />
      </ContainerLayout>
    </>
  );
}

export default Home;
