import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = food =>{
      if(user && user.email){
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post("/carts", cartItem)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            //refetch cart to update the cart items count 
            refetch()
          }
        })
      }
      else{
        Swal.fire({
          title: "Are you sure?",
          text: "Please login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", {state: {from: location}})
          }
        });
      }
    }
  return (
    <div className="card bg-base-100 shadow-lg">
        <img
          src={image}
          alt="Shoes"
        />
        <p className="absolute right-0 mr-4 mt-4 bg-slate-900 font-bold text-white py-1 px-4">{price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToCart} className="btn btn-outline border-0 bg-slate-100 border-orange-400 border-b-4 mt-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
