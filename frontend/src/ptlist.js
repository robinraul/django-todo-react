import React, { useEffect, useState } from "react";


const PTList = () => {
  const [PTs, setPTs] = useState([]);

  useEffect(() => {
    const fetchPTs = async () => {
      const response = await fetch("http://localhost:8000/api/todos/");
      const PTs = await response.json();
      setPTs(PTs);
    };
    fetchPTs();
  }, []);

  

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Physical Therapists List
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {PTs.map((h) => (
            <tr>
            <td>{h.title}</td>
            <td>{h.description}</td> 
            <td><input type="checkbox" checked={h.comleted} /> </td>
          </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" >
        Add
      </button>
    </>
  );
};

export default PTList;
