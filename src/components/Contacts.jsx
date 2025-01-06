import { deleteDoc, doc } from 'firebase/firestore'

import { db } from '../config/firebase'


import CardContact from './CardContact'
import { toast } from 'react-toastify'
import NotFound from './NotFound'



const ContactS = ({contacts}) => {
  
 
    
  const deleteContact =async(id)=>{
    try {
      await deleteDoc(doc(db , "contacts", id))
      toast.success("contatc deletet")
      console.log("sucsess")
    } catch (error) {
      console.log(error)
    }

  }
  return (
   <>
    <ul className="parent-contact">
    {contacts.length <= 0 ?<NotFound/> : contacts?.map(user=>{
      return  <CardContact key={user.id} user={user} deleteContact={deleteContact}/>
    })}
  </ul>
   
   </>
  )
}

export default ContactS
