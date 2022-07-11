import React from "react";
import { useQuery } from "react-query";
// components
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";

const Home = () => {
  const {
    data: workouts,
    isLoading,
    refetch,
  } = useQuery("Workouts", () =>
    fetch("http://localhost:5000/api/workouts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <section>
      <h1 className="text-center  py-4">WELCOME TO WORKOUT WORLD</h1>
      <div className="home">
        <div>
          <div className="workout-container">
            {workouts &&
              workouts?.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
              ))}
          </div>
        </div>
        <div className="workoutForm-container">
          <WorkoutForm refetch={refetch} />
        </div>
      </div>
    </section>
  );
};

export default Home;
