import React, { useState, useRef } from "react";

const WorkoutForm = ({ refetch }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);

  const toastRef = useRef(null);

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
      showToast();
      e.target.reset();
    }
  };

  const showToast = () => {
    const toast = toastRef.current;
    if (toast) {
      // eslint-disable-next-line no-undef
      const bootstrapToast = new bootstrap.Toast(toast);
      bootstrapToast.show();
    }
  };

  return (
    <section>
      <h5 className="text-center text-primary ">ADD NEW WORKOUT</h5>

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
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            className="toast "
            ref={toastRef}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <strong className="me-auto">{name} has added</strong>
              <small>Just Now</small>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Your Workout has been added successfully
            </div>
          </div>
        </div>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
};

export default WorkoutForm;
