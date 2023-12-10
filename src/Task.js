import React from "react";

const Task = ({ taskObj, updateStatus }) => {
  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      <button 
        onClick={() => updateStatus(
        taskObj.id,
        taskObj.status === "Yapılacak" ? "Yapıldı" : "Yapılacak")
        }>
        {taskObj.status === "Yapılacak" ? "Yapıldı" : "Yapılacak'a çevir" }
        </button>
    </div>
  );
};

export default Task;
