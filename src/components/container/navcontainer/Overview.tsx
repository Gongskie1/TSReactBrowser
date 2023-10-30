import { useNavigate } from "react-router-dom"
const Overview = () => {
  const navigate = useNavigate();
  return (
    <div>Overview
      <button className="bg-slate-600" onClick={() => navigate("../order-summary")}>Placeorder</button>
    </div>
  )
}

export default Overview