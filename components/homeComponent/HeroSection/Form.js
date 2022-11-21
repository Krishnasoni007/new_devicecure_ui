import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import mobile from "../../../app/utils/brands.json";
import issue from "../../../app/utils/issues.json";
import { Dialog } from '@headlessui/react';
import Select from 'react-tailwindcss-select';
import { useGetRepairDataQuery } from "../../../app/store/apiSlice";

export default function Form() {
  const [modelList, setModelList] = useState([]);
  const [modalVis, setModalVis] = useState(false)
  const { data, error, isLoading } = useGetRepairDataQuery()
  const router = useRouter()
  const inpRef = useRef(null)
  return (
    <div className="w-full home_form h-full rounded-xl py-12 px-6 flex items-center" style={{
      background: `url('/heroform.png')no-repeat center center/cover`
    }}>

      <div className="form_group">
        <div className="flex mb-8">
          <button className="brand-btn mr-4 grow">Repair</button>
          <button className="brand-btn-secondary grow">
            Protection Plan
          </button>
        </div>
        <form action="#" className="traplace">


          <select
            onChange={({ target: { value } }) => {
              setModelList(
                data.mobiles.find((mb) => mb.name == value)?.models || []
              );
            }}
            placeholder="Enter your brand"
            className="text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="" disabled selected>Select Brand</option>

            {data?.mobiles && data.mobiles.map(({ name: name }) => {
              return <option key={name} value={name} >{name}</option>;
            })}
          </select>


          <select

            placeholder="Enter your model"
            className="text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="" disabled selected>Select Model</option>

            {modelList.map((model_name, ind) => {
              return <option key={ind} value={model_name} >{model_name}</option>;
            })}
          </select>


          <select
            placeholder="Enter your brand"
            className="text-white white-glass w-full p-4 outline-none focus:outline-none mb-8 rounded-md focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="" disabled selected>Pick an issue</option>

            {data?.issues.map(({ name }, ind) => {
              return <option key={ind} value={name} >{name}</option>;
            })}
          </select>

          {/* <datalist id="issue">
            {issue.map(({ name }, ind) => {
              return <option key={ind} value={name} />;
            })}
          </datalist> */}
          <button className="brand-btn" onClick={() => router.push('/book-a-repair/review')}>
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
        </form>
      </div>
    </div >
  );
}
