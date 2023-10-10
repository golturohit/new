
'use client'
import React from 'react';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
    fullName: string;
    email: string; 
}

const schema = yup.object({
    fullName: yup.string().required().label("Full Name"),
    email: yup.string().required().email().label("Email"), 
}).required();





const CommentForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row gx-8">
                    <div className="col-xl-12 col-lg-12">
                        <div className="postbox-comment-input">
                            <textarea placeholder="Your Comment"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="postbox-comment-input">
                            <input type="text" {...register("fullName")} placeholder="Full name" />
                        </div>
                        <p className="form_error">{errors.fullName?.message}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="postbox-comment-input">
                            <input type="email" {...register("email")}  placeholder="Your email" />
                        </div>
                        <p className="form_error">{errors.email?.message}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="postbox-comment-input">
                            <input type="text" placeholder="Website" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="postbox-comment-agree d-flex align-items-start mb-35">
                            <input className="e-check-input" type="checkbox" id="e-agree" />
                            <label className="e-check-label" htmlFor="e-agree">Save my name, email, and website in this
                                browser for the next time I comment.</label>
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="postbox-comment-btn">
                            <button type="submit" className="tp-btn">Post Comment</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CommentForm;