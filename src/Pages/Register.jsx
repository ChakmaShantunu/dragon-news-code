import { Link } from "react-router";



const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-center text-2xl">Register your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />

                        {/* Photo Url */}
                        <label className="label">Photo URl</label>
                        <input type="text" className="input" placeholder="Photo URl" />


                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />


                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />


                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                        <p className="text-center font-semibold">Already have an account? <Link to="/auth/login" className="underline text-orange-500">Login</Link></p>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Register;