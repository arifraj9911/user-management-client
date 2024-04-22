import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewUser = () => {
  const handleUserForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;
    const user = { name, email, gender, status };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "User added successfully",
            text: "add new user with different email",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="w-3/4 mx-auto p-10 my-20 border-4 border-[#6AA84F]">
      <Link className="flex gap-1 items-center" to="/">
        <RiArrowLeftDoubleFill />
        <p>All Users</p>
      </Link>

      <div className="  flex flex-col items-center p-5 gap-3">
        <h3 className="text-2xl font-bold">New User</h3>
        <p className="text-[#D4CACB]">
          Use the below form to create a new account
        </p>
        <form onSubmit={handleUserForm} className="w-1/2 mt-8">
          <div className="flex flex-col mb-6 gap-2">
            <label>Name</label>
            <input
              type="text"
              className="input input-bordered w-full "
              name="name"
              placeholder="your name"
              id=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full "
              placeholder="your email"
              id=""
            />
          </div>
          <div className="flex gap-6 items-center mt-8">
            <label className="">Gender</label>
            <div className="flex gap-2 ">
              <input type="radio" name="gender" id="" value="Male" />
              Male
              <input type="radio" name="gender" id="" value="Female" />
              Female
            </div>
          </div>
          <div className="flex gap-6 items-center my-8">
            <label className="">Status</label>
            <div className="flex gap-2 ">
              <input type="radio" name="status" id="" value="Active" />
              Active
              <input type="radio" name="status" id="" value="Inactive" />
              Inactive
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Save"
              className="btn btn-accent w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
