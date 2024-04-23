import { FC } from 'react'
import { Link } from 'react-router-dom'
import category1 from '../../assets/category-1.jpg'
import category2 from '../../assets/category-2.jpg'
import category3 from '../../assets/category-3.jpg'
import category4 from '../../assets/category-4.jpg'
import category5 from '../../assets/category-5.jpg'

export const ProductPage: FC = () => {
  const data = [
    {
      id: 1,
      title: 'Basic',
      price: 35,
      src: category1
    },
    {
      id: 2,
      title: 'Basic',
      price: 35,
      src: category2
    },
    {
      id: 3,
      title: 'Basic',
      price: 35,
      src: category3
    },
    {
      id: 4,
      title: 'Basic',
      price: 35,
      src: category4
    },
    {
      id: 5,
      title: 'Basic',
      price: 35,
      src: category5
    }
  ]

  return (
    <div className="bg-white">
      <div className="py-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((item) => {
            return (
              <Link key={item.id} to={`/user/product/${item.id}`} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={item.src}
                    alt="Front of men's Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${item.price}</p>
                </div>
              </Link>
            )
          })}
          {/* More products... */}
        </div>
      </div>
    </div>
  )
}
