import React, { useState, useEffect } from "react";
import axios from "axios";
import { API, authConfig } from "../constants";
import makeToast from "../Toaster";
import Sidebar from "../Sidebar.js/Sidebar";
import Moment from "react-moment";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [task, setTask] = useState([]);
  const [update, setUpdate] = useState(false);

  // Post Route
  // @Desc : Creaet Task
  const createTask = async (formData) => {
    try {
      const res = await axios.post(
        API + "/api/task/create-task",
        formData,
        authConfig
      );

      if (res.data.statusCode == 200) {
        makeToast("success", res.data.msg);
        window.location.href = "./Home";
      } else {
        makeToast("error", res.data.msg);
      }
    } catch (error) {
      makeToast("error", error.message);
    }
  };

  // Get Route
  //@Desc : Fetch all the tasks

  const getTask = async () => {
    try {
      const res = await axios.get(API + "/api/task/all", authConfig);

      if (res.data.length > 0) setTask(res.data);
      console.log(res.data.msg);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTask();
  });

  // Delete Route
  // @Desc : Delete the particular task

  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(
        API + "/api/task/delete-task/" + id,
        authConfig
      );

      if (res.data.statusCode == 200) {
        makeToast("success", res.data.msg);
      } else {
        makeToast("error", res.data.msg);
      }
    } catch (error) {
      makeToast("error", error.message);
    }
  };

  //put Route
  //@Desc Update task

  const updateTask = async (id, formData) => {
    try {
      const res = await axios.put(
        API + "/api/task/update-task/" + id,
        formData,
        authConfig
      );

      if (res.data.statusCode == 200) {
        makeToast("success", res.data.msg);
      } else {
        makeToast("error", res.data.msg);
      }
    } catch (error) {
      makeToast("error", error.message);
    }
  };

  return (
    <body>
      <Sidebar name="Home" />
      <div class="layout-wrapper">
        <div class="header">
          <div class="page-title">TODO</div>
        </div>

        <div class="content ">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">Description</label>
              <input
                type="text"
                value={description}
                onChange={(e) => {
                  SetDescription(e.target.value);
                }}
                class="form-control"
              />
            </div>
            {update ? (
              <button
                type="button"
                class="btn btn-info"
                onClick={() => {
                  updateTask(localStorage.getItem("id"), {
                    title,
                    description,
                  });
                  setUpdate(false);
                }}
              >
                Update
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  createTask({ title, description });
                }}
              >
                Submit
              </button>
            )}
          </form>

          <br />
          <br />
          <div class="card">
            <div class="card-body">
              <div
                class="row g-3"
                style={{
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "green",
                }}
              >
                Task History
              </div>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-custom table-lg mb-0" id="orders">
              <table class="table table-striped table-dark">
                <thead
                  style={{
                    height: "50px",
                    borderRadius: "15px",
                  }}
                >
                  <tr>
                    <th scope="col"> &nbsp; &nbsp; Sr. Number</th>
                    <th scope="col"> &nbsp; &nbsp; Title</th>

                    <th scope="col"> Description</th>
                    <th scope="col"> &nbsp;&nbsp;&nbsp;&nbsp; Date</th>

                    <th scope="col">
                      {" "}
                      &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Actions
                    </th>
                  </tr>
                </thead>
                <br />
                {!Array.isArray(task) ? (
                  <p>No Task Created yet</p>
                ) : (
                  task.map((task, i) => {
                    return (
                      <tbody style={{ border: "solid" }}>
                        <tr>
                          <td>
                            {" "}
                            <div style={{ width: "200px" }}>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              {i + 1}
                            </div>
                          </td>
                          <td>
                            {" "}
                            <div style={{ width: "200px" }}>{task.title}</div>
                          </td>

                          <td>
                            {" "}
                            <div style={{ width: "200px" }}>
                              {task.description}
                            </div>
                          </td>
                          <td>
                            {" "}
                            <div style={{ width: "200px" }}>
                              <Moment format="DD-MM-YYYY">{task.date}</Moment>
                            </div>
                            <div style={{ width: "200px" }}></div>
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-info"
                              type="update"
                              onClick={() => {
                                console.log(task);
                                setTitle(task.title);
                                SetDescription(task.description);
                                localStorage.setItem("id", task._id);
                                setUpdate(true);
                              }}
                            >
                              Update
                            </button>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <button
                              type="button"
                              class="btn btn-danger"
                              type="Delete"
                              onClick={() => {
                                deleteTask(task._id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                )}
              </table>
            </table>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
