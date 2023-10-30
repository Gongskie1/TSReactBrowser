import { useNavigate } from "react-router-dom"

const OrderSummary = () => {
    const navigate = useNavigate()

  return (
      <div>
          Order confirm
          <button onClick={() => navigate("../search-products")} >back</button>
      </div>
  )
}

export default OrderSummary