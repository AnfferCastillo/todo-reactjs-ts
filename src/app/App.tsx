import React, { useEffect } from "react";
import "./App.css";
import { Navbar } from "./features/navbar/navbar";
import { connect, useDispatch } from "react-redux";
import { loadTodos } from "./features/todo/store/todoSlice";
import { AppDispatch } from "./store";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, []);

  return (
    <div className="justify-content-center">
      <h2 className="card-title text-center">TO-DOs using React + Redux + Typescript</h2>
      <hr></hr>
        <div className="container">
          <div className="col-lg-12">
            <div className="card px-3">
              <div className="card-body">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default App;
