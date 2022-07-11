import React, { useState } from "react";

const WorkoutForm = ({ refetch }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  const handleWorkout = async (e) => {
    e.preventDefault();
    const workout = {
      name,
      title,
      reps,
      load,
    };

    const response = await fetch("http://localhost:5000/api/workouts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(workout),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      refetch();
    }
    e.target.reset();
  };
  return (
    <section>
      <form onSubmit={handleWorkout}>
        <div>
          <label htmlFor="Name" className="mb-1">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            className="form-control mb-2  form-control-sm"
            id="Name"
            placeholder="Workout name"
          />
        </div>
        <div>
          <label htmlFor="Title" className="mb-1">
            Title
          </label>
          <input
            required
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control mb-2  form-control-sm"
            id="Title"
            placeholder=" Workout title"
          />
        </div>
        <div>
          <label htmlFor="Reps" className="mb-1">
            Reps
          </label>
          <input
            required
            onChange={(e) => setReps(e.target.value)}
            type="number"
            className="form-control mb-2  form-control-sm"
            id="Reps"
            placeholder="Reps"
          />
        </div>
        <div>
          <label htmlFor="Load" className="mb-1">
            Load
          </label>
          <input
            required
            onChange={(e) => setLoad(e.target.value)}
            type="number"
            className="form-control mb-2  form-control-sm"
            id="Load"
            placeholder="Load"
          />
        </div>

        <input
          className="btn btn-primary mt-2 d-block mx-auto"
          type="submit"
          value="ADD WORKOUT"
        />
      </form>
      {error && <p>{error}</p>}
    </section>
  );
};

export default WorkoutForm;
