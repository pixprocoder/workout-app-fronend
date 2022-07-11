import React from "react";
import { formatDistanceToNow } from "date-fns";

const WorkoutDetails = ({ workout, refetch }) => {
  const { name, title, reps, load, createdAt, _id } = workout;

  const handleDelete = async () => {
    const url = `http://localhost:5000/api/workouts/${_id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      refetch();
    }
  };

  return (
    <section>
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title  text-uppercase text-secondary ">{name}</h3>
          <div className="card-text">
            <p>
              <strong>Title: </strong>
              {title}
            </p>
            <p>
              <strong>Reps: </strong>
              {reps} k.g
            </p>
            <p>
              <strong>Load: </strong>
              {load} k.g
            </p>
            <p>
              {" "}
              {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
            </p>
          </div>
        </div>
        <button class="btn btn-danger me-2" onClick={handleDelete}>
          delete
        </button>
      </div>
    </section>
  );
};

export default WorkoutDetails;
