

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    console.log(item);
    return (
        <div className="flex space-x-4 items-center">
        <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[100px] " src={image} />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;