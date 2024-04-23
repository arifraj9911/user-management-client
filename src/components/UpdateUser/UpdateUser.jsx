import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const loadUser = useLoaderData();
  const navigate = useNavigate();
  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const updateUser = { name, email, gender, status };
    console.log(updateUser);
    fetch("https://user-management-server-9o3vm9hh4.vercel.app/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated Successfully!",
            text: "See your updated info in all user",
            icon: "success",
          });
          navigate("/users");
        }
      });
  };
  return (
    <div className="w-3/4 mx-auto flex justify-center my-20">
      <div className=" w-1/2">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl mb-3">{loadUser?.name}</h2>
          <p>
            Email: <span className="font-bold">{loadUser?.email}</span>
          </p>
        </div>
        <hr className="my-6 w-full" />
        <form
          onSubmit={handleUpdateForm}
          className="flex flex-col items-center w-full"
        >
          <h2 className="text-xl mb-8 mt-4">Update Info</h2>
          <div className="flex flex-col mb-6 gap-2 w-3/4">
            <label>Name</label>
            <input
              type="text"
              className="input input-bordered w-full "
              defaultValue={loadUser?.name}
              name="name"
              placeholder="your name"
              id=""
            />
          </div>
          <div className="flex flex-col gap-2 w-3/4">
            <label>Email</label>
            <input
              type="email"
              value={loadUser?.email}
              readOnly
              disabled
              name="email"
              className="input input-bordered w-full "
              placeholder="your email"
              id=""
            />
          </div>
          <div className="flex gap-6 items-center mt-8 w-3/4">
            <label className="">Gender</label>
            <div className="flex gap-2 ">
              <input type="radio" name="gender" id="" value="Male" />
              Male
              <input type="radio" name="gender" id="" value="Female" />
              Female
            </div>
          </div>
          <div className="flex gap-6 items-center my-8 w-3/4">
            <label className="">Status</label>
            <div className="flex gap-2 ">
              <input type="radio" name="status" id="" value="Active" />
              Active
              <input type="radio" name="status" id="" value="Inactive" />
              Inactive
            </div>
          </div>
          <div className="w-3/4 my-4">
            <input
              type="submit"
              value="Update"
              className="btn btn-accent w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
