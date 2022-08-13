import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { GET_A_SINGLE_CHECKIN } from "../../../utils/GraphQL/Queries";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import Title from "../../UI/Typography/Title/Title";
import "./CheckinDetails.css";

function CheckinDetails(props) {
  const { checkInView, handleCheckInView, id } = props;
  const { error, data, loading } = useQuery(GET_A_SINGLE_CHECKIN, {
    variables: { id: id },
  });
  const [checkin, setCheckin] = useState(null);

  useEffect(() => {
    if (id) {
      if (data) {
        setCheckin(data.check_in_by_pk);
      }

      if (error) {
        toast.error("Error occured while fetching a Checkin");
        console.log(error);
      }
    }
  }, [id, data, error]);

  return (
    <>
      <Offcanvas show={checkInView} onHide={handleCheckInView} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Details</Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <div>
            {loading
              ? "loading"
              : checkin && (
                  <div className="checkin_Details">
                    <Title size="md" color="dark">
                      {checkin.name}
                    </Title>
                    <div className="checkin_image">
                      <img src={checkin.image_url} alt={checkin.name} />
                    </div>
                  </div>
                )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CheckinDetails;
