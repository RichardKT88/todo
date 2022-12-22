import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import TodoContext from "../contexts/TodoContext";
import AddTodo from "./AddTodo";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

const App = () => {
    return (
        <TodoContext>
             <BrowserRouter>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">
                    <Switch>
                        <Route path="/create">
                            <AddTodo></AddTodo>
                        </Route>
                        <Route path="/">
                            <h4>Minha lista de tarefas</h4>
                            <TodoList></TodoList>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </TodoContext>
    );
}

export default App;
