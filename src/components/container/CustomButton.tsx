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
    </div>
  )
}

export default CustomButton
