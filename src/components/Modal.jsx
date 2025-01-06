import { createPortal } from "react-dom"


const Modal = ({showModal ,children, isClose}) => {
   return createPortal(
    <>
    {showModal &&<div  className="backdrop-blur h-screen w-screen absolute top-0 grid place-items-center" >
       <div  className="parent-modal z-10 relative m-auto p-4">
        <i className="fa fa-close" onClick={isClose}></i>
        {children}
       </div>
       
       </div>
    }
    </>
   ,document.getElementById("root-modal")) 
       
   
 

}

export default Modal
