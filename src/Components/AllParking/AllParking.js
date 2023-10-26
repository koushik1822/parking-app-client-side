import React from "react";
import parkingFetch from "../utils/Hooks/useParking";
import { Link, useNavigate } from "react-router-dom";

const AllParking = () => {
  const { parking } = parkingFetch();
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 gap-3 my-5">
      {parking?.map((parking) => {
        return (
          <div key={parking._id} className="bg-blue-500 p-5 text-center">
            <p>Slot Name: {parking?.parkingSlotName}</p>
            <p>Slot Location: {parking?.parkingLocation}</p>
            <p>
              Booking System:
              {parking?.duration.map((duration) => {
                return <span className="mx-2  px-2 border">{duration}</span>;
              })}
            </p>
            <p>Status:{parking?.status}</p>
            <p>{parking?.city}</p>
            <Link to={`/view-parking/${parking?._id}`}>
              <button className="button border rounded-md px-10 my-2">
                View
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllParking;
