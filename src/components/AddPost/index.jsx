import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../../Redux/actions";

import style from "./index.module.css";

export const AddPost = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text) {
            const newPost = {
                text,
                isoDateString: new Date().toISOString(),
            };
            dispatch(createNote(newPost));
            event.target.reset();
        }

        setText("");
    };

    return (
        <form className={style.addPostForm} onSubmit={handleSubmit}>
            <label htmlFor="note">Add note...</label>
            <input
                className="input"
                type="text"
                name="note"
                id="note"
                onChange={handleInputChange}
                pattern="^.{1,300}$"
            />
            <p className={style.add__message}>
                Exceeded the allowed number of characters (300 characters)
            </p>
        </form>
    );
};
