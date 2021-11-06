import { useSession, signIn, signOut } from "next-auth/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import freeLogo from "../img/mlogo.png";
import Link from "next/link";
import API from "../API";
import { useRouter } from "next/dist/client/router";
import { AuthContext } from "../GlobalContext/authContext";

const SignupPage = () => {
  const {customerInfo, marchentInfo} = useContext(AuthContext);
  const [customer] = customerInfo;
  const [marchent] = marchentInfo;
  const Router = useRouter();
  const { data: session } = useSession();
  const [showMerchent, setShowMerchent] = useState(true);
  const [showCustomer, setShowCustomer] = useState(false);
  const [invalid, setInvalid] = useState([]);
  const [valid, setValid] = useState("");
  const merchentbtn = useRef();
  const customerbtn = useRef();
  const loginRef = useRef();

  const invalidText = (text) => {
    return setInvalid(text);
  };

  const handleclick = (e) => {
    if (e.target.dataset.bsText === "merchent") {
      setShowMerchent(true);
      setShowCustomer(false);
      e.target.setAttribute("disabled", "true");
      customerbtn.current.removeAttribute("disabled");
    } else if (e.target.dataset.bsText === "customer") {
      setShowCustomer(true);
      setShowMerchent(false);
      e.target.setAttribute("disabled", "true");
      merchentbtn.current.removeAttribute("disabled");
    }
  };

  useEffect(() => {
    if (session || customer.length > 0 || marchent.length > 0) {
      return Router.push("/");
    }
  }, [session, customer, marchent]);

  return (
    <main className="d-flex justify-content-center align-items-center p-0 p-sm-3">
      <div className="p-0 py-3 p-sm-5">
        <div className="row g-0 g-sm-3 m-0 w-100 p-0 p-sm-5 border rounded shadow bg-white">
          <div className="col-12 col-md-5 border-end">
            <div className="d-flex justify-content-center align-items-center p-3 h-100">
              <div className="d-flex justify-content-center align-items-center p-3 h-100 flex-column">
                <img
                  src={freeLogo.src}
                  alt=""
                  style={{ height: "120px", width: "120px" }}
                />
                <p className="text-muted p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  soluta ab, quae quis, corrupti, voluptate iusto saepe aliquam
                  eligendi adipisci aliquid ipsa possimus veniam placeat quasi
                  cupiditate necessitatibus unde quo?
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className=" p-1 ps-sm-5 ">
              {invalid.length > 0 &&
                invalid.map((inv) => (
                  <h6 className="text-danger">{`* ${inv}`}</h6>
                ))}
              {valid.length > 0 && (
                <h6 className="text-success">
                  <span className="bi bi-check-circle-fill text-success pe-2"></span>
                  {valid}
                </h6>
              )}

              <h6 ref={loginRef} className="text-success d-none">
                <span className="bi bi-box-arrow-in-right text-success pe-2"></span>
                You can <Link href="/login">Login</Link> now!
              </h6>

              <h5 className="p-2 text-center text-primary my-3">
                Create Your Account
              </h5>
              <div className="col-12">
                <div className="d-flex justify-content-center w-100 my-3">
                  <button
                    className={
                      showMerchent
                        ? "btn w-50 p-3 text-center border-bottom border-primary"
                        : "btn w-50 p-3 text-center btn-primary"
                    }
                    ref={merchentbtn}
                    data-bs-text="merchent"
                    onClick={(e) => handleclick(e)}
                    style={{ border: "0" }}
                  >
                    Sign Up as Marchent
                  </button>
                  <button
                    className={
                      showCustomer
                        ? "btn w-50 p-3 text-center border-bottom border-primary"
                        : "btn w-50 p-3 text-center btn-primary"
                    }
                    ref={customerbtn}
                    data-bs-text="customer"
                    onClick={(e) => handleclick(e)}
                    style={{ border: "0" }}
                  >
                    Sign Up as Customer
                  </button>
                </div>
              </div>
              <Merchent
                show={showMerchent}
                invalidText={invalidText}
                setValid={setValid}
                login={loginRef}
              />
              <Customer
                show={showCustomer}
                invalidText={invalidText}
                setValid={setValid}
                login={loginRef}
              />

              <div className="d-flex justify-content-center flex-column my-2">
                <p className="text-muted text-center">
                  Already have Account ?{" "}
                  <Link href="/login">
                    <a className="text-primary">Log in Now!</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Merchent = ({ show, invalidText, setValid, login }) => {
  const { register, handleSubmit } = useForm();
  const marchentForm = useRef();
  const marchentSubmit = useRef();
  const marchentSpinner = useRef();

  const onSubmit = async (data) => {
    try {
      marchentSpinner.current.classList.remove("d-none");
      login.current.classList.add("d-none");
      setValid("");
      marchentSubmit.current.setAttribute("disabled", "true");
      const res = await API.post("/signup", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Marchent",
        },
      });
      setValid(res.data.message);
      marchentForm.current.reset();
      invalidText([]);
      marchentSpinner.current.classList.add("d-none");
      login.current.classList.remove("d-none");
      marchentSubmit.current.removeAttribute("disabled");
    } catch (error) {
      login.current.classList.add("d-none");
      marchentSpinner.current.classList.add("d-none");
      marchentSubmit.current.removeAttribute("disabled");
      invalidText(error.response.data.errors);
      setValid("");
    }
  };
  return (
    <div className={show ? "d-block" : "d-none"}>
      <form
        action=""
        ref={marchentForm}
        onSubmit={handleSubmit(onSubmit)}
        className="needs-validation"
      >
        <fieldset className="border">
          <legend className="text-muted w-auto">
            <h5 className="p-1">Account Information</h5>
          </legend>
          <div className="row m-0 w-100">
            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="form-control"
                  required
                />
                <div className="invalid-feedback">Email Required</div>
              </div>
            </div>

            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="companyname">
                  User Name
                </label>
                <input
                  {...register("username")}
                  type="text"
                  id="username"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  id="password"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="border">
          <legend className="text-muted w-auto">
            <h5 className="p-1">Personal Information</h5>
          </legend>
          <div className="row m-0 w-100">
            <div className="col-12 col-sm-6">
              <div className="p-2">
                <label className="form-label" htmlFor="Fname">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  id="Fname"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="p-2">
                <label className="form-label" htmlFor="Lname">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  id="Lname"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="country">
                  Country Name
                </label>
                <select
                  {...register("country")}
                  id="country"
                  className="form-select"
                >
                  <option value="Bn">Bangladesh</option>
                  <option value="En">England</option>
                  <option value="Sp">Spain</option>
                  <option value="UAE">United Arab Emirates</option>
                  <option value="In">India</option>
                  <option value="Jp">Japan</option>
                  <option value="Pak">Pakistan</option>
                </select>
              </div>
            </div>

            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="border">
          <legend className="text-muted w-auto">
            <h5 className="p-1">Company Information</h5>
          </legend>
          <div className="row m-0 w-100">
            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="companyname">
                  Company Name
                </label>
                <input
                  {...register("companyName")}
                  type="text"
                  id="companyname"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="btype">
                  Business Type
                </label>
                <select
                  {...register("businessType")}
                  id="btype"
                  className="form-select"
                >
                  <option value="Trade">Trade</option>
                </select>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="row gy-3 m-0 w-100 p-2">
          <div className="col-12">
            <button
              ref={marchentSubmit}
              type="submit"
              className="btn btn-primary w-100"
            >
              <span
                className="spinner-border spinner-border-sm me-3 d-none"
                ref={marchentSpinner}
                role="status"
                aria-hidden="true"
              ></span>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Customer = ({ show, invalidText, setValid, login }) => {
  const { register, handleSubmit } = useForm();
  const customerForm = useRef();
  const customerSubmit = useRef();
  const customerSpinner = useRef();

  const onSubmit = async (data) => {
    try {
      customerSpinner.current.classList.remove("d-none");
      login.current.classList.add("d-none");
      setValid("");
      customerSubmit.current.setAttribute("disabled", "true");
      const res = await API.post("/signup", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "customer",
        },
      });
      setValid(res.data.message);
      customerForm.current.reset();
      customerSpinner.current.classList.add("d-none");
      invalidText([]);
      login.current.classList.remove("d-none");
      customerSubmit.current.removeAttribute("disabled");
    } catch (error) {
      login.current.classList.add("d-none");
      customerSpinner.current.classList.add("d-none");
      customerSubmit.current.removeAttribute("disabled");
      invalidText(error.response.data.errors);
      setValid("");
    }
  };
  return (
    <div className={show ? "d-block" : "d-none"}>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-primary w-75"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          {" "}
          <span className="bi bi-google pe-2"></span> Signup with google
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center my-3">
        <hr className="w-50 pe-2" />
        <p className="text-center m-0 px-2">Or</p>
        <hr className="w-50 pe-2" />
      </div>
      <form action="" ref={customerForm} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="border">
          <legend className="text-muted w-auto">
            <h5 className="p-1">Account Information</h5>
          </legend>
          <div className="row m-0 w-100">
            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  id="password"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
        </fieldset>
        <fieldset className="border">
          <legend className="text-muted w-auto">
            <h5 className="p-1">Personal Information</h5>
          </legend>
          <div className="row m-0 w-100">
            <div className="col-12 col-sm-6">
              <div className="p-2">
                <label className="form-label" htmlFor="Fname">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  id="Fname"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="p-2">
                <label className="form-label" htmlFor="Lname">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  id="Lname"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="country">
                  Country Name
                </label>
                <select
                  {...register("country")}
                  id="country"
                  className="form-select"
                >
                  <option value="Bn">Bangladesh</option>
                  <option value="En">England</option>
                  <option value="Sp">Spain</option>
                  <option value="UAE">United Arab Emirates</option>
                  <option value="In">India</option>
                  <option value="Jp">Japan</option>
                  <option value="Pak">Pakistan</option>
                </select>
              </div>
            </div>

            <div className="col-12">
              <div className="p-2">
                <label className="form-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
        </fieldset>

        <div className="row gy-3 m-0 w-100 p-2">
          <div className="col-12">
            <button
              ref={customerSubmit}
              type="submit"
              className="btn btn-primary w-100"
            >
              <span
                className="spinner-border spinner-border-sm me-3 d-none"
                ref={customerSpinner}
                role="status"
                aria-hidden="true"
              ></span>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
