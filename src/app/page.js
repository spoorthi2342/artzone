import Link from "next/link";
import ProductCard from "./components/ProductCard/page";
import { getProducts } from "./Services/ProductService";

const Home = async()=>{
  const Products=await getProducts(4)
  return (
    <div>
      <div className='text-2xl font-bold pt-2 text-center h-30 text-white bg-purple-900 '>
        Come Let's Explore the <span className="text-purple-500 font-mono">colourful</span> <span className="text-pink-500 font-mono">World!!!</span>
      </div>
      {/* cards */}
      <div className="m-9 mr-7 flex justify-between flex-wrap  gap-4 ">
      
       {Products.data.map(item=>
        <ProductCard item={item}/>
       )}
      

      </div>
      <Link href="./Product">
        <div className="inline-block text-purple-500 p-4 font-bold hover:underline">
          View All
        </div>
      </Link>
    </div>
  );
}
export default Home;
