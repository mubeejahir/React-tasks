import { Link } from "react-router-dom";

const ProductList = ({item}) => {
   
  return (
    <div>hello   
        <ul>
            <Link to={`${item.id}`}>
            <p>{item.name}</p>
            </Link>
        </ul>
          
        
     
    </div>
  );
};

export default ProductList;
