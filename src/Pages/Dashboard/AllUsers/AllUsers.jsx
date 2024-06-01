import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("users");
      return res.data;
    },
  });

  const handleMakeAdmin = user =>{
    console.log(user)
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    })
  }
  
  const handleDelete = user =>{
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
          axiosSecure.delete(`/users/${user}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              
            }
          });
        }
      });
  }
// console.log(users)
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h1 className="text-3xl">All User</h1>
        <h2 className="text-3xl">Total User {users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto rounded-xl">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr className="uppercase bg-orange-400 text-white rounded-t-2xl">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                        user.role === 'admin' ? 'Admin' : <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-orange-500 btn-lg"
                      >
                        <FaUsers className="text-white text-2xl" />
                      </button>
                    }
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-500" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
