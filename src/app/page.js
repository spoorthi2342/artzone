import Link from "next/link";
import Image from "next/image";
import pproduct1 from "../assets/Image/picture-abstract-art.jpg";


export default function Home() {
  return (
    <div>
      <div className='text-2xl font-bold pt-2 text-center bg-white h-30'>
        Come Let's Explore the <span className="text-purple-500 font-mono">colourfull</span> <span className="text-pink-500 font-mono">World!!!</span>
      </div>
      {/* cards */}
      <div className="m-4 flex flex-wrap gap-4">
        <Link href="../components/Product/page.js">
          <div className="sm:w-64 w-full h-auto border rounded-lg overflow-hidden bg-white cursor-pointer  border-black hover:cursor-pointer hover:shadow-lg">
            <Image
              src={pproduct1}
              alt='product 1'
              height={250}
              width={300}
              objectFit="cover"
            />


            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Acrylic Painting</h1>
                <p className="w-40 truncate">huih hgerfygegr jhehf hjhwuefhiu</p>
              </div>


              <div className="text-green-500 py-2 px-4 font-bold">
                $2000
              </div>
            </div>
          </div>
        </Link>


        <Link href="../components/Product/page.js">
          <div className="sm:w-64 w-full h-auto border rounded-lg overflow-hidden bg-white cursor-pointer border-black hover:cursor-pointer hover:shadow-lg">
            <Image
              src={pproduct1}
              alt='product 1'
              height={200}
              width={300}
              objectFit="cover"
            />

            <div className="flex justify-between ">
              <div>
                <h1 className="font-bold">Acrylic Painting</h1>
                <p className="w-40 truncate">huih hgerfygegr jhehf hjhwuefhiu</p>
              </div>


              <div className="text-green-500 py-2 px-4 font-bold">
                $2000
              </div>
            </div>
          </div>
        </Link>
        <Link href="../components/Product/page.js">
          <div className="sm:w-64 w-full h-auto border rounded-lg overflow-hidden bg-white cursor-pointer  border-black hover:cursor-pointer hover:shadow-lg">
            <Image
              src={pproduct1}
              alt='product 1'
              height={250}
              width={300}
              objectFit="cover"
            />


            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Acrylic Painting</h1>
                <p className="w-40 truncate">huih hgerfygegr jhehf hjhwuefhiu</p>
              </div>


              <div className="text-green-500 py-2 px-4 font-bold">
                $2000
              </div>
            </div>
          </div>
        </Link>
        <Link href="../components/Product/page.js">
          <div className="sm:w-64 w-full h-auto border rounded-lg overflow-hidden bg-white cursor-pointer  border-black hover:cursor-pointer hover:shadow-lg">
            <Image
              src={pproduct1}
              alt='product 1'
              height={250}
              width={300}
              objectFit="cover"
            />


            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Acrylic Painting</h1>
                <p className="w-40 truncate">huih hgerfygegr jhehf hjhwuefhiu</p>
              </div>


              <div className="text-green-500 py-2 px-4 font-bold">
                $2000
              </div>
            </div>
          </div>
        </Link>

      </div>
     <Link href="../components/product/product.js">
       <div className="inline-bolck text-purple-500 p-4 font-bold hover:underline">
        View All
        </div>
        </Link>
    </div>
  );
}
