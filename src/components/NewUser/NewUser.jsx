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
  };
  return (
    <div className="w-3/4 mx-auto border flex flex-col items-center mt-20 p-10 gap-3">
      <h3 className="text-2xl">New User</h3>
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
          <input type="submit" value="Save" className="btn btn-accent w-full" />
        </div>
      </form>
    </div>
  );
};

export default NewUser;
