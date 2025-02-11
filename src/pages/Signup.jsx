import { Link } from "react-router-dom";

function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  }

  return (
    <form
      className="max-w-[400px] w-full bg-semidark p-8  rounded-2xl grid gap-10"
      onSubmit={handleSubmit}
    >
      <p className="text-3xl text-white">Signup</p>
      <div className="grid gap-6">
        <input
          type="email"
          placeholder="Email address"
          name="email"
          required
          className="bg-transparent border-b-grey border-b px-4 pb-4 text-white outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          className="bg-transparent border-b-grey border-b px-4 pb-4 text-white outline-none"
        />
      </div>
      <div className="grid gap-6 ">
        <button
          type="submit"
          className="w-full bg-red rounded-md text-white py-3 px-1"
        >
          Create an account{" "}
        </button>
        <div className="flex gap-2 justify-center">
          <span className="text-white">Already have an account?</span>
          <Link to="/login" className="text-red">
            Login{" "}
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Signup;
