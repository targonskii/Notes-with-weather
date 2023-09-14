import React from "react";
import { deleteNote } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { PostItem } from "../PostItem";

import style from "./index.module.css";

export const Posts = () => {
    const notes = useSelector(({ notes }) => notes.notes);
    const dispatch = useDispatch();

    const deleteNoteHandler = (idArray) => {
        dispatch(deleteNote(idArray));
    };

    return (
        <div className={style.postform}>
            {notes.length ? (
                notes.map((post) => (
                    <PostItem
                        post={post}
                        key={post.id}
                        onDeleteNote={() => deleteNoteHandler(post.idArray)}
                    />
                ))
            ) : (
                <p>Empty list</p>
            )}
        </div>
    );
};
