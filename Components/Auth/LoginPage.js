import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import freeLogo from '../img/freeLogo.jpg';
import Link from 'next/link'
import API from '../API';

const LoginPage = () => {
    const [invalid, setInvalid] = useState([]);
    const [valid, setValid] = useState([]);

    const { register, handleSubmit } = useForm();
    const loginSubmit = useRef();
    const loginSpinner = useRef();
    const loginForm = useRef();


    const invalidText = text => {
        return setInvalid(text);
    }

    const onSubmit = async (data) => {
        try {
            loginSpinner.current.classList.remove('d-none')

            setValid([])
            loginSubmit.current.setAttribute('disabled', 'true')
            const res = await API.post("/login", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(res)
            setValid([res.data.message])
            loginForm.current.reset();
            loginSpinner.current.classList.add('d-none')
            invalidText([]);

            loginSubmit.current.removeAttribute('disabled')
        } catch (error) {

            loginSpinner.current.classList.add('d-none')
            loginSubmit.current.removeAttribute('disabled')
            console.log(error.response, error)

            invalidText([error.response?.data.message])
            setValid([])
        }
    }


    return (
        <main className="d-flex justify-content-center align-items-center p-0 p-sm-3">
            <div className="p-0 py-3 p-sm-5">
                <div className="row g-0 g-sm-3 m-0 w-100 p-0 p-sm-5 border rounded shadow bg-white">

                    <div className="col-12 col-md-5 border-end ">
                        <div className="d-flex justify-content-center align-items-center p-3 h-100">
                            <div className="d-flex justify-content-center align-items-center p-3 h-100 flex-column">
                                <img src={freeLogo.src} alt="" style={{ height: "120px", width: "120px" }} />
                                <p className="text-muted p-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta ab,
                                    quae quis, corrupti, voluptate iusto saepe aliquam eligendi adipisci
                                    aliquid ipsa possimus veniam placeat quasi cupiditate necessitatibus unde quo?
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-7">
                        <div className=" p-2 px-sm-5">
                            {invalid.length > 0 && invalid.map(inv => <h6 className="text-danger">{`* ${inv}`}</h6>)}
                            {valid.length > 0 && valid.map(val => <h6 className="text-success"><span className="bi bi-check-circle-fill text-success pe-2"></span>{val}</h6>)

                            }


                            <h5 className="p-2 text-center text-primary my-2">Log in to Your Account</h5>


                            <form action="" ref={loginForm} onSubmit={handleSubmit(onSubmit)}>


                                <div className="row m-0 w-100">

                                    <div className="col-12">
                                        <div className="p-2">
                                            <label className="form-label" htmlFor="email">Email Address</label>
                                            <input {...register("email")} type="email" id="email" className="form-control" required />

                                        </div>
                                    </div>



                                    <div className="col-12">
                                        <div className="p-2">
                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input {...register("password")} type="password" id="password" className="form-control" required />

                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="p-2">
                                            <label className="form-label pe-3" htmlFor="type">User Type: </label>

                                            <div className="form-check form-check-inline">
                                                <input {...register("type")} className="form-check-input" type="radio" name="type" id="type1" value="marchent" required />
                                                <label className="form-check-label" htmlFor="type1">Marchent</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input {...register("type")} className="form-check-input" type="radio" name="type" id="type2" value="customer" required />
                                                <label className="form-check-label" htmlFor="type2">Customer</label>
                                            </div>

                                        </div>
                                    </div>


                                </div>

                                <div className="row gy-3 m-0 w-100 p-2">
                                    <div className="col-12">
                                        <button ref={loginSubmit} type="submit" className="btn btn-primary w-100">
                                            <span className="spinner-border spinner-border-sm me-3 d-none" ref={loginSpinner} role="status" aria-hidden="true"></span>

                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="d-flex justify-content-center flex-column my-2">

                                <p className="text-muted text-center">
                                    Fotgot Password ? <Link href="/login" ><a className="text-primary">Reset Password Now!</a></Link>
                                </p>
                                <p className="text-muted text-center">
                                    Don't have Account ? <Link href="/signup" ><a className="text-primary">Create New Account</a></Link>
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default LoginPage
