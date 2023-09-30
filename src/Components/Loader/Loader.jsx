import React from 'react'
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
   <>
    <div className="loading-spinner">
          <TailSpin
            height={80}
            width={80}
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius={1}
          />
        </div>
   </>

  )
}
