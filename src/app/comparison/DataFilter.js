//core backend.....contains interface to userData, filter through multiple policies, contains multiple premium results to be passed to display page


"use client";
import { CalculatePremiumLic } from "./premiumCalculation";
import { useEffect, useState } from "react";

export default function DataFilter({ data }) {
  const [fxncalled, setfxncalled] = useState("");

  useEffect(() => {
    let insuredAmt = data.insuredAmount;
    let term = data.insuredTerm;
    let mode = data.type;
    let ylyStr = data.term;
    let yly;

    //just simple fxn to calculate age from date
    function calculateAge(dob) {
      const birthDate = new Date(dob);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();

      // Adjust age if the birthday hasn't occurred yet this year
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return age;
    }

    switch (ylyStr) {
      case "Yearly":
        yly = 1;
        break;
      case "Half-Yearly":
        yly = 0.5;
        break;
      case "Quarterly":
        yly = 0.25;
        break;
      case "Monthly":
        yly = 0.0833;
        break;
    }
    CalculatePremiumLic({
      SA: insuredAmt,
      Term: term,
      Age: 10,
      Mode: mode,
      DAB: 0,
      TR: 0,
      YLY: yly,
      tabrate: 2,
    });
    console.log(insuredAmt, term, mode, yly, "from DataFilter file");
    
  }, [data]);
  return (
    <div>
      <h1>DataFilter </h1>
    </div>
  );
}
