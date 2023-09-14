import React from "react";

import { Posts } from "./components/Posts";
import { AddPost } from "./components/AddPost";

import "./App.css";

function App() {
    return (
        <div className="main">
            <Posts />
            <AddPost />
        </div>
    );
}

export default App;
