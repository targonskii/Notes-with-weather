import React from "react";
import { useSelector } from "react-redux";
import { PostItem } from "../PostItem";

import style from "./index.module.css";

export const Posts = () => {
    const allNotes = useSelector(({ notes }) => notes);

    return (
        <article className={style.posts}>
            {allNotes.length ? (
                allNotes.map((post) => (
                    <PostItem post={post} key={post.idArray} />
                ))
            ) : (
                <p>Empty list</p>
            )}
        </article>
    );
};
