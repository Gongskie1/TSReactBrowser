import { Admin, Blog, Examples, FeaturedProducts, Help, NavBar, NewProducts, OrderSummary, Overview, PageNotFound, SearchProduct, Tours, UserDetails, Users } from './components'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
    
     <div>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Tours />}/>
            <Route path='/overview' element={<Overview/>}/>
            <Route path='/examples' element={<Examples/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/order-summary' element={<OrderSummary />} />
            <Route path='/search-products' element={<SearchProduct/>}>
              <Route path='featured' element={<FeaturedProducts />} />
              <Route path='new' element={ <NewProducts />} />
            </Route>
            <Route path='users' element={<Users />} />
            <Route path='users/:userId' element={<UserDetails />} />
            <Route path='users/admin' element={<Admin/>}/>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
     </div>
     
    </>
  )
}

export default App
