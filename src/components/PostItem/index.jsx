import React from "react";
import { Weather } from "../Weather";
import close from "../../assets/image/icons/close.svg";

import style from "./index.module.css";

export const PostItem = ({ post }) => {
    return (
        <section className={style.post}>
            <p className={style.post__text}>{post.text}</p>
            <button className={style.post__closeBtn}>
                <img src={close} alt="Close button" />
            </button>
            <Weather post={post} />
        </section>
    );
};
