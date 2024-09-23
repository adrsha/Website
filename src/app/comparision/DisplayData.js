'use client';

import { useEffect, useState } from "react";

export default function DisplayData({data}){
    const [fxncalled, setfxncalled]=useState("")
    useEffect(()=>{
        console.clear();
        console.log(data,"from DisplayData file")
    },[data])
    return (
        <>
            <h1> Hello </h1>
            <p>Data: {JSON.stringify(data)}</p>
        </>
    );
};