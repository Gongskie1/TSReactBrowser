import { Link, Outlet } from "react-router-dom"

const SearchProduct = () => {
  return (
      <div>
        SearchProduct
        <input type="search" placeholder="search product" />
        <nav className="">  
          <Link className="mr-4" to={"featured"} >Featured</Link>
          <Link className="ml-4" to={"new"} >New </Link>
      </nav>
      <Outlet/>
      </div>
  )
}

export default SearchProduct