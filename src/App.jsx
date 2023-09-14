import React from "react";

import { Posts } from "./components/Posts";
import { AddPost } from "./components/AddPost";

import "./App.css";

function App() {
    return (
        <main>
            <Posts />
            <AddPost />
        </main>
    );
}

export default App;
