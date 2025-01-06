import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast} from "react-toastify";
import * as yup from 'yup';

 const schema = yup.object().shape({
    name:yup.string().required("name is required"),
    email:yup.string().email("email invalid").required("email is required")
  })


const AddContact = ({showModal , isClose , isUpdate , user}) => {
 
  console.log( "user=>" + user)
  const addContact =async (contact )=>{
    try {
      const contactRef=collection(db,"contacts")
      await addDoc(contactRef , contact)
      isClose()
      toast.success("ADD CONTACT suscess")
    } catch (error) {
      console.log(error)
      
    }

  }
  const updateContact =async (contact ,id)=>{
    try {
      const contactRef=doc(db,"contacts",id)
      await updateDoc(contactRef , contact  )
      isClose()
      toast.success("contatc update secsesss")
     
    } catch (error) {
      console.log(error)
      
    }

  }
  return <div className="">
   <Modal isClose={isClose} showModal={showModal}>
      <Formik validationSchema={schema}  initialValues={ isUpdate ? { email:user.email ,name:user.name} : {name:"" , email:""}} onSubmit={(values)=>{
        isUpdate? updateContact(values,user.id):
        addContact(values)
      }}>
        <Form className="flex flex-col">
        <div className="flex gap-1 flex-col">
        <label htmlFor="name">NAME</label>
        <Field className="h-10 border p-1" id="name" name="name"/>
     <div className="text-red-600">
     <ErrorMessage name="name"/>
     </div>
        </div>
        <div className="flex gap-1 flex-col">
        <label htmlFor="email">EMAIL</label>
        <Field className="h-10 border p-1" id="email" name="email"/>
        <div className="text-red-600">
     <ErrorMessage name="email"/>
     </div>
        </div>
        <button type="bytton" className="bg-orange px-3 py-1.5 self-end my-2 border">{isUpdate?"Update":"Add"}Contact</button>
        </Form>
      </Formik>
        
      </Modal>
  </div>;
};

export default AddContact;
