import { useParams } from "react-router-dom"
const UserDetails = () => {
  const {userId} = useParams();
  // const userId = params.userId;
  return (
    <div>User Details ID:{ userId }</div>
  )
}

export default UserDetails