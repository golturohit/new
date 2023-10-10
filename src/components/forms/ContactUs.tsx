"use client"

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
    fullName: string;
    email: string;
    subject: string; 
}

const schema = yup.object({
    fullName: yup.string().required().label("Ful lName"),
    email: yup.string().required().email().label("Email"),
    subject: yup.string().required().label("Subject"), 
}).required();


const ContactUs = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        reset();
    };


    return (
        <>
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="contact-form-input">
                    <input type="text" {...register("fullName")} placeholder="Full name" />
                </div>
                <p className="form_error">{errors.fullName?.message}</p>
                <div className="contact-form-input">
                    <input type="email" {...register("email")} placeholder="Your email" />
                </div>
                <p className="form_error">{errors.email?.message}</p>
                <div className="contact-form-input">
                    <input type="text" {...register("subject")} placeholder="Subject" />
                </div>
                <p className="form_error">{errors.subject?.message}</p>
                <div className="contact-form-input">
                    <textarea name="message" placeholder="Your Comment"></textarea>
                </div>
                <div className="contact-form-check d-flex align-items-center mb-25">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault01" />
                    <label className="contact-form-label" htmlFor="flexCheckDefault01">By submitting, i'm agreed to the
                        Terms & Conditons</label>
                </div>
                <div className="contact-form-btn">
                    <button type="submit" className="tp-btn">Send Message</button>
                </div>
            </form>
        </>
    );
};

export default ContactUs;