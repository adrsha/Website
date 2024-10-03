'use client';
import { CalculatePremiumLic } from "./premiumCalculation";
import { useEffect, useState } from "react";

export default function DisplayData({data}){
    const [fxncalled, setfxncalled]=useState("")

    useEffect(()=>{
        let insuredAmt=data.insuredAmt
        let term=data.Term
        CalculatePremiumLic({SA:80000, Term:12, Age:10, Mode:"", DAB:0, TR:0, YLY:0.2})
        console.log(data,"from DisplayData file")
    },[data])
};