import { useForm } from "@mantine/form";
import { ApiClient } from "../client";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navi = useNavigate();

  // const context = useContext(AuthContext);
  const formData = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  function UserLogin() {
    const { email, password } = formData.values;
    const data = {
      email: email,
      password: password,
    };

    const response = ApiClient.userLoginData(data);

    if (response != null) {
      // context?.login(response);
      navi("/main");
    }
  }
  return (
    <div>
      <div className=" min-h-screen w-full flex bg-blue-200 justify-center fixed ">
        <div className="flex-col mt-40  fixed  h-[370px] bg-slate-200 w-[440px]   rounded-2xl">
          <div className="mt-10 ml-44 ">
            <span className=" text-3xl font-extrabold text-opacity-0.1 ">
              Login
            </span>
          </div>
          <form onSubmit={formData.onSubmit(UserLogin)}>
            <div className="flex flex-col ">
              <label className="ml-5 mt-10">email *</label>
              <input
                type="text"
                className="w-[350px] p-2 rounded-md border-2 border-gray-300  ml-5 mr-5"
                placeholder="Username "
                name="email"
                {...formData.getInputProps("email")}
              />
              <label className="ml-5 mt-5">password *</label>
              <input
                type="text"
                placeholder="password"
                className="w-[350px] rounded-md border-gray-300  ml-5 mr-5 p-2"
                name="password"
                {...formData.getInputProps("password")}
              />

              <button
                className="mt-6 p-3 w-[370px] ml-5 bg-slate-400 click status"
                type="submit"
              >
                submit
              </button>
            </div>
          </form>
        </div>
        slate-400slate-400
      </div>
    </div>
  );
}
