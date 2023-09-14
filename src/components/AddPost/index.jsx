import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../Redux/actions";
import moment from "moment";

import style from "./index.module.css";

export const AddPost = () => {
    const [post, setPost] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setPost(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const momentDate = moment().format("D MMM YYYY HH:mm");
        const newPost = {
            post,
            idArray: Date.now().toString(),
            date: momentDate,
        };

        dispatch(createNote(newPost));
        event.target.reset();
    };

    return (
        <form className={style.addNote} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Add note...</label>
                <input
                    className="input"
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleInputChange}
                    pattern="^.{1,300}$"
                />
                <p className={style.add__message}>
                    Exceeded the allowed number of characters (300 characters)
                </p>
            </div>
        </form>
    );
};
