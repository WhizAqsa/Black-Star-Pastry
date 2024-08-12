import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginDetails = { firstname, lastname, email, password, birthday };
    try {
      await Axios.post(
        "http://localhost:4000/api/blackstarpastry/login",
        loginDetails
      ).then((result) => console.log(result));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="bg-black backdrop-blur-md bg-opacity-10 dark:bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full relative bg-black rounded-lg shadow-md dark:border md:mt-0 md:max-w-md xl:p-0">
          <button className="absolute top-3 right-3 text-white bg-transparent cursor-pointer rounded-full p-2">
            <FontAwesomeIcon icon={faClose} />
          </button>

          <div className="p-6 space-y-4 md:space-y-6 md:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
              LET'S BE FRIENDS
            </h1>
            <p className="text-md tracking-tighter text-center text-white">
              Login to our website to connect with friends, share moments, and
              explore a world of possibilities together.
            </p>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="fname"
                  name="fname"
                  id="fname"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-black border focus:outline-none tracking-tighter border-white h-10 text-md text-white rounded-lg block w-full p-2.5"
                  placeholder="FIRST NAME*"
                  required
                />
              </div>
              <div>
                <input
                  type="lname"
                  name="lname"
                  id="lname"
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-black border tracking-tighter focus:outline-none border-white h-10 text-md text-white rounded-lg  block w-full p-2.5 "
                  placeholder="LAST NAME*"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black border tracking-tighter focus:outline-none border-gray-300 h-10 text-md text-white rounded-lg  block w-full p-2.5 "
                  placeholder="EMAIL*"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="PASSWORD*"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black border tracking-tighter focus:outline-none border-gray-300 h-10 text-md text-white rounded-lg  block w-full p-2.5 "
                  required
                />
              </div>
              <div>
                <input
                  type="birthday"
                  name="birthday"
                  id="birthday"
                  onChange={(e) => setBirthday(e.target.value)}
                  className="bg-black border tracking-tighter focus:outline-none text-md border-gray-300 h-10 text-white rounded-lg  block w-full p-2.5 "
                  placeholder="BIRTHDAY"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="w-24 h-10 text-black bg-white  font-medium rounded-lg text-md px-5 py-2 text-center"
                >
                  LOG IN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
