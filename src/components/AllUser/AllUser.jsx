import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { RiArrowLeftDoubleFill, RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllUser = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDeleteUser = (id) => {
    console.log("deleted id ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="w-3/4 mx-auto p-10 my-20 border-4 border-[#6AA84F]">
      <Link className="flex gap-1 items-center" to="/">
        <RiArrowLeftDoubleFill />
        <p>New Users</p>
      </Link>

      <div className="overflow-x-auto mt-12">
        <table className="table text-center">
          {/* head */}
          <thead className="bg-[#282D41] text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>@Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
                <td>{user?.status}</td>
                <td className="flex gap-2 items-center justify-center">
                  <FaPencilAlt className="shadow-lg border text-4xl p-2 rounded-lg text-[#5708DC]" />
                  <RiDeleteBin6Fill
                    onClick={() => handleDeleteUser(user._id)}
                    className="shadow-lg border text-4xl p-2 rounded-lg text-[#5708DC]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
