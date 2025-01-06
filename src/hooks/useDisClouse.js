import { useState } from "react";

const useDisClouse = () => {
  const [showModal, setShowModal] = useState(false);

  const isOpen = () => {
    setShowModal(!showModal);
    console.log("hi");
    console.log(showModal);
  };
  const isClose = () => {
    setShowModal(false);
  };
  return { showModal, isClose, isOpen };
};

export default useDisClouse;
