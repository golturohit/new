'use client'

import Image from "next/image";
import Link from "next/link";

import signin_shape_4 from "@/assets/img/shape/about-inner-shape-2.png";
import signin_shape_5 from "@/assets/img/team/details/team-details-shape-2.png";

import facebook from "@/assets/img/sign-in/facebook.svg";
import google from "@/assets/img/sign-in/google.svg";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),
}).required();


const SignInForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <div className="col-xxl-3 col-xl-4 col-lg-5">
                <div className="signin-wrapper">
                    <h4 className="signin-wrapper-title">Sign in to SEOMY</h4>
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
                            <div className="signin-btn mb-10">
                                <button type="submit" className="tp-btn">Sign In</button>
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
                        <p>Already have an account? <Link href="/sign-out">Sign Up</Link></p>
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

export default SignInForm;