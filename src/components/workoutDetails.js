import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

const WorkoutDetails = ({ workout, refetch }) => {
  const { name, title, reps, load, createdAt, _id } = workout;
  const [showModal, setShowModal] = useState(false);

  const handleDeleteModal = async () => {
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
    setShowModal(false);
  };

  const handleCancel = () => {
    // If the user cancels the deletion, simply close the modal
    console.log("not");
    setShowModal(false);
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
              {reps} set
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
        <div>
          <button
            className="btn btn-danger me-2"
            onClick={() => setShowModal(true)}
          >
            delete
          </button>

          {showModal && (
            <div
              className="modal"
              tabIndex="-1"
              role="dialog"
              style={{ display: "block" }}
            >
              <div
                className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Confirm Delete</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleCancel}
                    ></button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to delete this item?
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={handleDeleteModal}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetails;
