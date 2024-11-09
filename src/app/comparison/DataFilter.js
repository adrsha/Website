//core backend.....contains interface to userData, filter through multiple policies, contains multiple premium results to be passed to display page


"use client";
import { CalculatePremiumLic } from "./premiumCalculation";
import { useEffect, useState } from "react";

export default function DataFilter({ data }) {

  // useEffect(() => {
  //   let insuredAmt = data.insuredAmount;
  //   let term = data.insuredTerm;
  //   let mode = data.type;
  //   let ylyStr = data.term;
  //   let yly;
  //
  //   //just simple fxn to calculate age from date
  //
  //   switch (ylyStr) {
  //     case "Yearly":
  //       yly = 1;
  //       break;
  //     case "Half-Yearly":
  //       yly = 0.5;
  //       break;
  //     case "Quarterly":
  //       yly = 0.25;
  //       break;
  //     case "Monthly":
  //       yly = 0.0833;
  //       break;
  //   }
  //   console.log(insuredAmt, term, mode, yly, "from DataFilter file");
  // }, [data]);


  return (
    <div>
      <h1></h1>
    </div>
  );
}
