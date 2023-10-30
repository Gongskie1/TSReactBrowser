import { customButtonStyles } from "../../types"

const CustomButton = ({buttonStyles,buttonText, buttonType}:customButtonStyles) => {
  return (
    <div>
      <button 
      className={buttonStyles}
      type={buttonType || "button"}
      >
        {buttonText}
      </button>
      <p>otindako longanisa</p>
    </div>
  )
}

export default CustomButton
