import React from "react";

const WorkoutForm = () => {
  const handleWorkout = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleWorkout}>
        <div>
          <label for="Name" className="mb-1">
            Name
          </label>
          <input
            type="text"
            class="form-control mb-2  form-control-sm"
            id="Name"
            placeholder="Your name"
          />
        </div>
        <div>
          <label for="Title" className="mb-1">
            Title
          </label>
          <input
            type="text"
            class="form-control mb-2  form-control-sm"
            id="Title"
            placeholder="Title"
          />
        </div>
        <div>
          <label for="Reps" className="mb-1">
            Reps
          </label>
          <input
            type="text"
            class="form-control mb-2  form-control-sm"
            id="Reps"
            placeholder="Reps"
          />
        </div>
        <div>
          <label for="Load" className="mb-1">
            Load
          </label>
          <input
            type="text"
            class="form-control mb-2  form-control-sm"
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
    </section>
  );
};

export default WorkoutForm;
