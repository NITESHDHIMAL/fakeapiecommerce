// src/components/Login.js
import React, { useState } from 'react';
import Wrapper from '../components/Wrapper';
import { useLoginMutation } from '../services/loginApi';
import { useForm } from 'react-hook-form'; 
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

const nav = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    const [login, {isLoading}] = useLoginMutation()

    const onSubmit = async (formData) => {
        try {
            await login(formData).unwrap()
            toast.success("Login Successfully!")
            nav("/")
            console.log("all formdata",formData)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <> 
            <Wrapper>
                <div className="d-flex justify-content-center align-items-center vh-100 bg-light mx-8">
                    <form className="w-100" style={{ maxWidth: '400px' }} onSubmit={handleSubmit(onSubmit)}>
                        <div className="card p-4 shadow-sm my-8">
                            <h2 className="text-center mb-4">Login</h2>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value="johnd"
                                    {...register("username", { required: true })}
                                    placeholder="Enter your username"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value="m38rmF$"
                                    {...register("password", { required: true })}
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    {isLoading ? isLoading : Login}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </Wrapper>
        </>
    );
};

export default Login;
