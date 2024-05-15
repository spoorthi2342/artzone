import Link from "next/link"
export default function productLayout({children}){
    return(
        <div>
            <Link href="../Product">
        <div className="inline-block text-purple-900 p-4 font-bold hover:underline">
           All Products
        </div>
      </Link>
      {children}
        </div>
    )
}