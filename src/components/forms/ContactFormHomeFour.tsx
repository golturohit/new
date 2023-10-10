"use client";


import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


interface FormData {
  fullName: string;
  email: string;
  phone: string;
  website: string; 
}

const schema = yup.object({
  fullName: yup.string().required().label("Full Name"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().label("Phone"),
  website: yup.string().required().label("Website"), 
}).required();


const ContactFormHomeFour = () => {

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
        <div className="tpcontact-from-wrapper">
          <div className="row gx-6">
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="text" {...register("fullName")} placeholder="Full name" />
                <p className="form_error">{errors.fullName?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="email" {...register("email")} placeholder="Email Address" />
                <p className="form_error">{errors.email?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="text" {...register("phone")} placeholder="Phone number" />
                <p className="form_error">{errors.phone?.message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tpcontact-form-input mb-20">
                <input type="text" {...register("website")} placeholder="Website" />
                <p className="form_error">{errors.website?.message}</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tpcontact-form-textarea mb-25">
                <textarea placeholder="Message" name="message"></textarea>
              </div>
            </div>
          </div>
          <div className="tpcontact-form-submit">
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactFormHomeFour;
