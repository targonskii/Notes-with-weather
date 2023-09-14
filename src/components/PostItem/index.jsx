import React from "react";
import { Weather } from "../Weather";
import close from "../../assets/image/icons/close.svg";

import style from "./index.module.css";

export const PostItem = ({ post, onDeleteNote }) => {
    return (
        <div className={style.post}>
            <div>{post.post}</div>
            <button className={style.post__closeBtn} onClick={onDeleteNote}>
                <img src={close} alt="Close button" />
            </button>
            <Weather post={post} />
        </div>
    );
};
