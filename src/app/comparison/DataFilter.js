'use client';
import { CalculatePremiumLic } from "./premiumCalculation";
import { useEffect, useState } from "react";

export default function DataFilter({data}){
    const [fxncalled, setfxncalled]=useState("")

    useEffect(()=>{
        let insuredAmt=data.insuredAmount
        let term=data.insuredTerm
        let mode = data.type
        let ylyStr=data.term
        let yly
        switch(ylyStr){
            case "Yearly":
                yly=1
                break;
            case "Half-Yearly":
                yly=0.5
                break;
            case "Quarterly":
                yly=0.25
                break;
            case "Monthly":
                yly=0.0833
                break;
        }
        CalculatePremiumLic({SA:insuredAmt, Term:term, Age:10, Mode:mode, DAB:0, TR:0, YLY:yly, tabrate: 2})
        console.log(insuredAmt, term, mode, yly,"from DataFilter file")
    },[data])
};