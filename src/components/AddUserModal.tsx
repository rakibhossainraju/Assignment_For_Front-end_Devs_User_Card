import { FormEventHandler } from "react";
import InputComponent from "./InputComponent";

const AddUserModal = () => {
  const handelSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    const url = "https://dummyjson.com/users";
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const userData = Object.fromEntries(formData);
    try {
      const res = await fetch(url, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: JSON.stringify(userData),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="my_modal_6"
        className="btn rounded-md bg-white px-10 shadow-xl"
      >
        <span>Add a user</span>
        <img src="/images/add-icon.png" alt="" className="ml-2 max-w-7" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box px-10">
          <label
            htmlFor="my_modal_6"
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="py-3 text-center text-xl font-medium text-teal-600">
            Add User Details
          </h3>
          <form onSubmit={handelSubmit}>
            <div className="flex items-center justify-center gap-4">
              <InputComponent name="firstName" labelText="First Name" />
              <InputComponent name="lastName" labelText="Last Name" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <InputComponent name="email" labelText="Email" />
              <InputComponent name="company" labelText="Company Name" />
              <InputComponent name="city" labelText="City Name" />
              <InputComponent name="suite" labelText="Suite" />
              <InputComponent name="street" labelText="Street" />
            </div>
            <div className="modal-action gap-4">
              <label
                htmlFor="my_modal_6"
                className="btn rounded-md bg-slate-300 text-slate-900"
              >
                Close!
              </label>
              <button className="btn rounded-md bg-blue-400 text-white">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
