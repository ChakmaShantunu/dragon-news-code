import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use, useState } from "react";



const Register = () => {
    const [nameError, setNameError] = useState("");

    const { createUser, setUser } = use(AuthContext);

    const handleRegister = (e) => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError("Name should be more than 5 characters");
            return;
        } else {
            setNameError("");
        }
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user.email);
                setUser(user);
            })
            .catch((error) => {
                console.log(error.message);
                alert(error.message);
            })
    }
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className="font-semibold text-center text-2xl">Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label">Name</label>
                        <input name="name" type="text" className="input" placeholder="Name" required />
                        {nameError && <p className="text-red-400 text-xs">{nameError}</p>}

                        {/* Photo Url */}
                        <label className="label">Photo URl</label>
                        <input name="photo" type="text" className="input" placeholder="Photo URl" required />


                        {/* Email */}
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" required />


                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" required />


                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">Login</button>
                        <p className="text-center font-semibold">Already have an account? <Link to="/auth/login" className="underline text-orange-500">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;