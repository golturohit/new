'use client'

import Link from "next/link";
import Image from "next/image";
import facebook from "@/assets/img/sign-in/facebook.svg";
import google from "@/assets/img/sign-in/google.svg";
import signin_shape_4 from "@/assets/img/shape/about-inner-shape-2.png";
import signin_shape_5 from "@/assets/img/team/details/team-details-shape-2.png";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
    email: string;
    password: string;
    con_password: string;
}
const schema = yup
    .object({
        email: yup.string().required().email().label("Email"),
        password: yup.string().required().min(6).label("Password"),
        con_password: yup.string().required().min(6).label("Confirm Password"),

    })
    .required();

const SingOutForm = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema), });
    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <div className="col-lg-4">
                <div className="signout-wrapper">
                    <h4 className="signin-wrapper-title">Sign up for a new Account</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="signin-input-wrapper">
                            <div className="signin-input-item mb-20">
                                <input type="email" {...register("email")} placeholder="Your email" />
                                <p className="form_error">{errors.email?.message}</p>
                            </div>

                            <div className="signin-input-item mb-30">
                                <input type="password" {...register("password")} placeholder="Password" />
                                <p className="form_error">{errors.password?.message}</p>
                            </div>

                            <div className="signin-input-item mb-30">
                                <input type="password" {...register("con_password")} placeholder="Confirm Password" />
                                <p className="form_error">{errors.con_password?.message}</p>
                            </div>

                            <div className="signin-btn mb-10">
                                <button className="tp-btn">Sign In</button>
                            </div>
                        </div>
                        <div className="signin-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                            <div className="signin-remember">
                                <input id="remeber" type="checkbox" />
                                <label htmlFor="remeber">Stay Logged In</label>
                            </div>
                            <div className="signin-forgot">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>
                    </form>
                    <div className="signin-social-wrap text-center">
                        <p>OR</p>
                    </div>
                    <div className="signin-social-wrapper mb-30">
                        <div className="signin-social-item mb-15">
                            <a href="#">
                                <Image src={facebook} alt="theme-pure" />
                                Continue with Facebook
                            </a>
                        </div>
                        <div className="signin-social-item">
                            <a href="#">
                                <Image src={google} alt="theme-pure" />
                                Continue with Google
                            </a>
                        </div>
                    </div>
                    <div className="signin-account text-center">
                        <p>Already have an account? <Link href="/sign-in">Sign Up</Link></p>
                    </div>
                    <div className="signin-shape">
                        <Image className="signin-shape-4" src={signin_shape_4} alt="theme-pure" />
                        <Image className="signin-shape-5" src={signin_shape_5} alt="theme-pure" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingOutForm;