import { useEffect, useRef, useState } from "react"
import {collection,  getDocs, onSnapshot} from "firebase/firestore"
import {db} from "../src/config/firebase"
import Nav from "./components/Nav"
import Loading from "./components/Loading"
import ContactS from "./components/ContactS"
import Modal from "./components/Modal"
import AddContact from "./components/AddContact"
import useDisClouse from "./hooks/useDisClouse"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const inputRef = useRef();
  const [toggleSearch , setToggleSearch] = useState(true)
  const[contacts , setContacts] = useState([])
  const [loding , setLoding] = useState(false)
 
   const{isOpen , isClose , showModal} =useDisClouse()
  const getContacts =async()=>{
    setLoding(true)
    try{
      const contactRef = collection(db , "contacts")
      // const contactSnapShot = await getDocs(contactRef)
      onSnapshot(contactRef,(snapshot)=>{
        const contactsList = snapshot.docs.map(doc=>{
          return {
            id:doc.id,
            ...doc.data()
          }
        })
        setContacts(contactsList)
        return contactsList
      })
     
      
     setLoding(false)

    }catch(erore){
      console.log(erore)
    }

  }
  useEffect(()=>{
    getContacts()
  
  },[])

  const hideSearch=()=>{
   setToggleSearch((priv)=>!priv)
    }
    const filterContact =(e)=>{
      const value = e.target.value;

      const contactRef = collection(db , "contacts")
      // const contactSnapShot = await getDocs(contactRef)
      onSnapshot(contactRef,(snapshot)=>{
        const contactsList = snapshot.docs.map(doc=>{
          return {
            id:doc.id,
            ...doc.data()
          }
        })
        const filterContact = contactsList.filter(contact=>{
          return contact.name.toLowerCase().includes(value.toLowerCase())
        })
        setContacts(filterContact)
        return contactsList
      })
   
    }
  
  return (
    <>
  <div className="max-w-[370px] mx-auto p-4">
    <Nav/>
    <div className="flex items-center  ">
    <div className="flex search-wraper relative flex-grow  ">
      <i className={`${toggleSearch&&"fa fa-search "}`}  ></i>
      <input onFocus={hideSearch} onChange={ (e)=> filterContact(e)}    ref={inputRef} type="text" className="bg-transparent border text-white border-white rounded-md h-[40px] flex-grow pl-8"  />
    </div>
    <i onClick={()=> isOpen()} className="fa fa-plus plus-b text-white font-bold "></i>
    </div>
    {loding && <Loading/>}
    <ContactS contacts={contacts} />
  </div>
    <AddContact showModal={showModal} isClose={isClose}  />
    <ToastContainer />

  </>
  )
}

export default App
