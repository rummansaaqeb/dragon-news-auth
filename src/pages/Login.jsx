import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import ScrollToTop from "../utils/ScrollToTop";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { logIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log({ email, password });
        logIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Logged In Successfully");
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                setError({ ...error, login:err.code })
                toast.error("User Credentials Does Not Match");
            })
    }



    return (
        <div className="min-h-screen flex justify-center items-center">
            <ScrollToTop></ScrollToTop>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Don&apos;t Have An Account? Please <Link className="text-red-500" to="/auth/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;