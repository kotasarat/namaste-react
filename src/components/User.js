import React, { useEffect, useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("use Effect");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("use Effect Return");
    };
  }, []);
  console.log("User FC");

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Chirala</h3>
      <h4>Contact: kota.sarat@gmail.com</h4>
    </div>
  );
};

export default User;
