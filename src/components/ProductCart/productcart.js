
import Link from 'next/link'


const productcart = () => {
  return (
    <Link href="../components/Product/page.js">
      <div className="sm:w-64 w-full h-auto border rounded-lg overflow-hidden bg-white cursor-pointer  border-black hover:cursor-pointer hover:shadow-lg">
        <Image
          src={pproduct11}
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

  )
}

export default productcart