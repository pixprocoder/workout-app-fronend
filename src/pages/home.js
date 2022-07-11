import React, { useEffect, useState } from "react";
// components
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:5000/api/workouts");
      const data = await response.json();
      if (response.ok) {
        setWorkouts(data);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <section>
      <h1 className="text-center  py-4">WELCOME TO WORKOUT WORLD</h1>
      <div className="home">
        <div>
          <div className="workout-container">
            {workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
          </div>
        </div>
        <div className="workoutForm-container">
          <WorkoutForm />
        </div>
      </div>
    </section>
  );
};

export default Home;
