"use client"
import { useState } from "react";
import MyComponent from "./components/sk";

// Example usage in a page
export default function Page() {
  const [data, setdata] = useState({ name: 'sakib' });


  return (
    <div>
      <h1>My Page</h1>
      <button onClick={() => setdata(null)}>onClick</button>
      <MyComponent data={data} />
    </div>
  );
}
