'use client';
import { CalculatePremiumLic } from "./premiumCalculation";
import { useEffect, useState } from "react";

export default function DisplayData({data}){
    const [fxncalled, setfxncalled]=useState("")
    useEffect(()=>{
        console.clear();
        CalculatePremiumLic({SA:800000, Term:12, Age:10, Mode:"", DAB:0, TR:0, YLY:0.2})
        console.log(data,"from DisplayData file")
    },[data])
    return (
        <>
            <h1> Hello </h1>
            <p>Data: {JSON.stringify(data)}</p>
        </>
    );
};