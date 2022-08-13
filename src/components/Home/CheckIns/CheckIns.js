import React, { useState, useEffect } from "react";
import "./CheckIns.css";
import { useQuery } from "@apollo/client";
import { GET_CHECK_INS } from "../../../utils/GraphQL/Queries";
import { toast } from "react-toastify";
import { createDateAndTimeFromISO } from "../../../utils/helpers";
import CheckinDetails from "../CheckInDetails/CheckinDetails";

function CheckIns() {
  const [checkInView, setCheckInView] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleCheckInView = (id) => {
    setCheckInView(!checkInView);
    setSelectedId(id);
  };

  const { data, loading, error } = useQuery(GET_CHECK_INS);
  const [checkins, setCheckins] = useState(null);
  useEffect(() => {
    if (error) {
      toast.error("Error Occured while fetching Check Ins");
    }
    if (data) {
      setCheckins(data.check_in);
    }
  }, [data, error, loading]);

  return (
    <>
      <div className="content__Wrapper">
        {!loading ? (
          <div className="checkins_list pt-3">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th className="owner">Owner</th>
                  <th>Status</th>
                  <th>Created at</th>
                </tr>
              </thead>
              <tbody>
                {checkins &&
                  checkins.map((checkin) => {
                    return (
                      <tr
                        key={checkin.id}
                        onClick={() => handleCheckInView(checkin.id)}
                      >
                        <td>{checkin.name}</td>
                        <td className="owner">{checkin.id}</td>
                        <td>
                          {checkin.comment ? (
                            <span className="checkIn_status  in">CHECK IN</span>
                          ) : (
                            <span className="checkIn_status out">
                              CHECK OUT
                            </span>
                          )}
                        </td>
                        <td>
                          {createDateAndTimeFromISO(checkin.created_at, true)}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <h3>Loading Checkins</h3>
        )}
        <CheckinDetails
          handleCheckInView={handleCheckInView}
          checkInView={checkInView}
          id={selectedId}
        />
      </div>
    </>
  );
}

export default CheckIns;
