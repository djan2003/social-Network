import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from "./stylesTexareaForForm.module.css"


export const TextareaForForm: React.FC<WrappedFieldProps> =
    ({input, meta, ...props}) => {
        return (
            <div>
                <div>
                    <textarea className={meta.error && meta.touched && styles.error} {...input} {...props}  ></textarea>
                </div>
                <div>
                    {
                        meta.error && meta.touched &&
                        <span className={styles.errorForSpan}>{meta.error} </span>
                    }

                </div>
            </div>
        )
    }


export const InputeForForm: React.FC<WrappedFieldProps> =
    ({input, meta, ...props}) => {
        return (
            <div>
                <div>
                    <input
                        className={meta.error && meta.touched && styles.error} {...input} {...props} >

                    </input>
                </div>
                <div>
                    {
                        meta.error && meta.touched &&
                        <span className={styles.errorForSpan}>{meta.error} </span>
                    }

                </div>
            </div>
        )
    }