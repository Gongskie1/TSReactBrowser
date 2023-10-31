import { Outlet, useSearchParams } from "react-router-dom"

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter')==="active";
  return (
    <div>
      <p>Users1</p>
      <h1>Users2</h1>
      <h1>Users3</h1>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {
        showActiveUsers ? ( <h2>Showing active users</h2> ): (<h2>Showing all users</h2>)
      }
    </div>
  )
}

export default Users