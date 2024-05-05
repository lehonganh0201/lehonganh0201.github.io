import React from "react";
import "./PostsTable.scss";
import { FaPen, FaTrash } from "react-icons/fa";
const PostsTable = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div style={{ marginTop: "6rem", marginLeft: "3rem", marginRight: "3rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="button" style={{ padding: "0.5rem 4rem" }}>
          Add new
        </button>
        <div>
          <input
            placeholder="Title"
            style={{
              padding: "0.5rem 2rem",
              marginRight: "4rem",
              borderRadius: "4px",
            }}
          />
          <input
            placeholder="Tags"
            style={{ padding: "0.5rem 2rem", borderRadius: "4px" }}
          />
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Tags</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((index) => (
            <tr>
              <th scope="row">{index}</th>
              <th>ABC</th>
              <th>Description</th>
              <th>HTML, CSS</th>
              <th>
                <FaPen style={{ marginRight: "3rem" }} />
                <FaTrash />
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{display:'flex',justifyContent:'end'}}>
        <button style={{border:'0',fontSize:'20px',padding:'0.5rem 3rem'}}>Phần phân trang</button>
      </div>
    </div>
  );
};

export default PostsTable;
