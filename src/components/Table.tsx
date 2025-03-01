import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface Product {
    index: number;
    productName: string;
    color: string;
    category: string;
    price: number;
}

export default function  Table(){
    const [initialProducts, setInitialProducts] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        const originalProducts = [
            {
                index: 1,
                productName: 'Soda water',
                color: 'Blue',
                category: 'drinks',
                price: 120,
            },
            {
                index: 2,
                productName: 'Fried rice',
                color: 'Red',
                category: 'food',
                price: 12000,
            },
            {
                index: 3,
                productName: 'Resting chair',
                color: 'brown',
                category: 'furniture',
                price: 48000,
            },
        ];
    
        setProducts(originalProducts)
        setInitialProducts(originalProducts)
    },[]);

    const handleSearch = (e: any) => {
        console.log(e.target.value);

        if(e.target.value.length <= 0){
            setProducts(initialProducts);
            return;
        }

        console.log(products);
        const newproducts =  initialProducts.filter((product) => 
            ( product.productName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            product.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
            product.color.toLowerCase().includes(e.target.value.toLowerCase()))
        );
        console.log(newproducts);
        setProducts(newproducts);
    }

    return (
        <>      

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="pb-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search" className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"
                        onBlur={handleSearch}
                         />
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product) => 

                            (<tr key={product.index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {product.productName}
                                </th>
                                <td className="px-6 py-4">
                                    {product.color}
                                </td>
                                <td className="px-6 py-4">
                                    {product.category}
                                </td>
                                <td className="px-6 py-4">
                                    {product.price}
                                </td>
                                <td className="px-6 py-4">
                                    <Link to="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}