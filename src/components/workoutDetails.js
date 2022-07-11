import React from "react";

const WorkoutDetails = ({ workout }) => {
  const { name, title, reps, load } = workout;
  return (
    <section>
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title text-uppercase text-secondary ">{title}</h3>
          <ol className="card-text">
            <li>
              <strong>Name:</strong> {name}
            </li>
            <li>
              <strong>Reps:</strong> {reps}
            </li>
            <li>
              <strong>Load:</strong> {load}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
