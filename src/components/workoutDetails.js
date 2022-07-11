import React from "react";

const WorkoutDetails = ({ workout }) => {
  const { name, title, reps, load, createdAt } = workout;
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
            <p> {createdAt}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
