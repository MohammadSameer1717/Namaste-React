import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <>
      <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <h1>Name : {name}</h1>
        <h3>location : Aligarh</h3>
        <h4>Contact @Samarthsaxena2september2001</h4>
      </div>
    </>
  );
};

export default User;