import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

 

 

const useToast = () => {
  const showToast = (text) => {
    Toastify({
      text: text, 
      position: "right",
      backgroundColor:
        "linear-gradient(to right, #1f5ebc, #0083d6, #00a1cb, #00b9a4, #2ecc71)",
    }).showToast();
  };

  const displayToast = ({status, message}) => {
    Toastify({
      text: message, 
      gravity: "bottom",
      position: "right",
      backgroundColor:
        `${status == "success" ?  "linear-gradient(to right, #1f5ebc, #0083d6, #00a1cb, #00b9a4, #2ecc71)": "red"}`,
    }).showToast();
  };

  return {
    showToast,
    displayToast,
  };
};

export default useToast;

