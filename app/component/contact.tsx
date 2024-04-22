"use client"
import { useState } from "react";
import DisplayContact from "./displyacomponent";
import {contactInfoType, contactType, eventTypes } from "../Types/type";
import * as yup from "yup"

// yup sceima
const contactSchiema =yup.object().shape({
  name:yup.string().required().min(5).max(10),
  email:yup.string().required().email(),
  phon:yup.number().required(),
  message:yup.string().required().max(50)
})


export default function ContactForm() {
  const [errors ,setcontacterr]= useState<string[]>([])
 const [contactInfo ,setcontactInfo]= useState<contactType>({name:"",email:"",phon:0,message:""})
 const [contactList ,setcontactList]= useState<contactType[]>([])


const onChangeHeandler= (event:eventTypes)=>{
    let contactDetails ={
        ...contactInfo,
        [event.target.name]:event.target.value
    }
        setcontactInfo(contactDetails)
}



 const onclickHandler = async()=>{
  try {
    const result = await contactSchiema.validate(contactInfo)
    if (!result) {
      return
    }
    const newContactList:contactType[] =[...contactList,contactInfo]
    setcontactList(newContactList)
    setcontacterr([])
    setcontactInfo({
      name:"",
      email:"",
      phon:0,
      message:""
      
    })
 
  } catch (err) {
    setcontacterr(err.errors)
  }
    
}


    return (
        <>
        
      <div className="max-w-md mx-auto p-8">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      
      <form>
        {/* onediv */}
        <div className="mb-4">
        
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
          value={contactInfo.name}
          onChange={onChangeHeandler}
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>


        {/* twodiv */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
          value={contactInfo.email}
          onChange={onChangeHeandler}
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
        />
        </div>


        {/* threeodiv */}
          <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Phon
        </label>
        <input
        value={contactInfo.phon}
        onChange={onChangeHeandler}
          type="number"
          id="phon"
          name="phon"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your phon number"
        />
         </div>

        
        {/* fourodiv */}
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
          value={contactInfo.message}
          onChange={onChangeHeandler}
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your message"
          ></textarea>
        </div>


         {/* fiveodiv */}
      
      </form>
      

      {errors.map((item)=>{
        return(
          <div style={{color:"red"}}>
            <h1>{item}</h1>
          </div>
        )
      })}

      <div>
        <button
        onClick={onclickHandler}
        type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
        </div>
    </div>
    <DisplayContact contactData={contactList}/>
    </>
      
      
  )}
  