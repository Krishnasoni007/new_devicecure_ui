import { useRouter } from "next/router";
import React, {useState} from "react";
import BookRepairLayout from "../../components/Layout/BookRepairLayout";
import mobile from "../../app/utils/brands.json";
import issue from "../../app/utils/issues.json";
import Creatable from 'react-select/creatable';
import Select from 'react-select';
export default function BookARepair() {
  const router = useRouter();
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>
      <h2 className="font-light text-4xl text-darkLight mb-8">Book a repair</h2>
      <div className="form_group">
      
        <div className="grid grid-cols-12 gap-4 mb-8 traplace">
          <div className="col-span-6 multiseletform">
            <Creatable 
            options={options} 
            placeholder="Select Brand"
            className="book-form-container"
            classNamePrefix="book-form"
            />
          </div>
          <div className="col-span-6 multiseletform">
            <Creatable 
            options={options} 
            placeholder="Select Model"
            className="book-form-container"
            classNamePrefix="book-form"
            />
          </div>
          <div className="col-span-12 multiseletform">
            <Select 
            options={options} 
            placeholder="Select Color"
            className="book-form-container"
            classNamePrefix="book-form"
            />
          </div>
          <div className="col-span-12 multiseletform">
            <Creatable  
            options={options} 
            isMulti
            placeholder="Issue with Device"
            className="book-form-container"
            classNamePrefix="book-form"
            />
          </div>
          <div className="col-span-6 multiseletform">
            <input type="date" name="" className="w-full black-glass-repair" id="" />
          </div>
          <div className="col-span-6 multiseletform">
            <Select 
            options={options} 
            placeholder="Select Time"
            className="book-form-container"
            classNamePrefix="book-form"
            />
          </div>
        </div>
        <button
          className="brand-btn"
          onClick={() => {
            router.push("/book-a-repair/address");
          }}
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

BookARepair.getLayout = function (page) {
  return <BookRepairLayout>{page}</BookRepairLayout>;
};
