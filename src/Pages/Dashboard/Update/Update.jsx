import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const Update = () => {
  const [menu, setMenu] = useState();
  // const itme = useLoaderData();
  const {id} = useParams();
console.log(id);
  useEffect(() => {
    fetch('http://localhost:5000/menu')
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  console.log(menu);
  return (
    <div>
      <SectionTitle
        heading="Update An Item"
        subHeading="Refetch Info"
      ></SectionTitle>
    </div>
  );
};

export default Update;
