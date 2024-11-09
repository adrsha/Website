//core backend.....contains interface to userData, filter through multiple policies, contains multiple premium results to be passed to display page


"use client";
import { CalculatePremiumLic } from "./premiumCalculation";
import { useEffect, useState } from "react";

export default function DataFilter({ data }) {
  console.log("Data", data)

  const policies = [
    { id: 1, min: 200000, max: 5000000, minEntry: 18, maxEntry: 60, minYears: 5, maxYearsParam: 52 },
    { id: 2, min: 300000, max: 7500000, minEntry: 18, maxEntry: 55, minYears: 5, maxYearsParam: 50 },
    { id: 3, min: 250000, max: 6000000, minEntry: 18, maxEntry: 60, minYears: 5, maxYearsParam: 45 },
    { id: 4, min: 300000, max: 8000000, minEntry: 18, maxEntry: 60, minYears: 5, maxYearsParam: 40 },
    { id: 5, min: 200000, max: 5000000, minEntry: 18, maxEntry: 60, minYears: 5, maxYearsParam: 50 },
    { id: 6, min: 400000, max: 10000000, minEntry: 18, maxEntry: 55, minYears: 5, maxYearsParam: 52 },
    { id: 7, min: 300000, max: 9000000, minEntry: 20, maxEntry: 60, minYears: 5, maxYearsParam: 50 },
    { id: 8, min: 250000, max: 7000000, minEntry: 20, maxEntry: 55, minYears: 5, maxYearsParam: 50 },
    { id: 9, min: 300000, max: 10000000, minEntry: 20, maxEntry: 55, minYears: 5, maxYearsParam: 45 }
    // Additional policies can be added here
  ];

  // Filter function
  function filterPolicies(userInput) {
    const { age, income, insuredAmount, insuredTerm } = userInput;

    return policies
      .filter(policy => {
        // Calculate maxYears based on age and maxYearsParam
        const maxYears = Math.min(70 - age, policy.maxYearsParam);

        // Check if the policy matches all user criteria
        return (
          insuredAmount >= policy.min && insuredAmount <= policy.max &&
          age >= policy.minEntry && age <= policy.maxEntry &&
          insuredTerm >= policy.minYears && insuredTerm <= maxYears
        );
      })
      .map(policy => policy.id); // Only return matching policy IDs
  }

  // Example usage
  const availablePolicies = filterPolicies(data);
  console.log("Available policies:", availablePolicies); // Output available policies

  // Function to calculate premium (add your formula for premium calculation)
  function calculatePremium(policyId, insuredAmount, insuredTerm) {
    const baseRate = 0.05; // Assume a base rate
    return insuredAmount * baseRate / insuredTerm;
  }

  return (
    <div>
      <h1></h1>
    </div>
  );
}
