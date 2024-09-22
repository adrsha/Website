"use client";
import "./page.css";
import { Children } from "react";
import { useEffect, useState } from "react";
import filter from "./comparision/filter.js"
import papa from "papaparse"
import { row } from "mathjs";
export default function Compare() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    insuredAmount: "",
    income: "",
    phoneNumber: "",
    age: "",
    insuredTerm: "",
    occupation: "",
  });
  const [csvData, setCsvData] = useState([]);
  const [comparisonResult, setComparisonResult] = useState("");

  // runs at start; used to fetch and parse csv file
  useEffect(() => {
    let term=document.getElementById("preselect")
    term.click()
    fetch('/lic/Endowment/parameters.csv')
      .then(response => response.text())
      .then(csvText => {
        const result = papa.parse(csvText, { header: false });
        setCsvData(result.data);
      })
      .catch(error => console.error('Error fetching CSV:', error));
  }, []);

  //activates each time csvData fetch from file and formData from user changes
    useEffect(() => {
    //console.log("hello");
     //console.log(formData);
     filter(formData)
    // console.log(csvData, "csv data")

    if (csvData.length > 0) {
      compareFormWithCSV();
    }

  }, [formData, csvData]);

  //just simple fxn to calculate age from date
  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

  //compares the formData with csvData
  const compareFormWithCSV = () => {
    //console.log(csvData)
    const match = csvData.find(row => 
      console.log(row)
      //row[1]<formData.age
      // row.dob === formData.dob &&
      // row.insuredAmount === formData.insuredAmount &&
      // row.income === formData.income &&
      // row.phoneNumber === formData.phoneNumber &&
      // row.age === formData.age &&
      // row.insuredTerm === formData.insuredTerm &&
      // row.occupation === formData.occupation &&
      // row.gender === formData.gender
    );

    if (match) {
      setComparisonResult("Match found in CSV!");
    } else {
      setComparisonResult("No match found in CSV.");
    }
  };
  function convertToCSV(data) {
    const nameElement = document.getElementById("nameField");
    const dob = nameElement.parentElement.children[1].value;
    const insuredAmount = nameElement.parentElement.children[2].value;
    const income = nameElement.parentElement.children[3].value;
    const insuredTerm = nameElement.parentElement.parentElement.children[1].children[2].value;
    const gender = document.querySelector(
      'input[name="gender"]:checked',
    )?.value;
    if (nameElement.value!="" && dob!="" && insuredAmount!="" && income!="" && insuredAmount!="" && gender!="") {
      // Retrieve the parent elements and their children correctly
      const phoneNumber = nameElement.parentElement.children[4].value;
      const age =
        nameElement.parentElement.parentElement.children[1].children[1].value;
      const occupation =
        nameElement.parentElement.parentElement.children[1].children[3].value;

      // Update the state with form data
      setFormData({
        name: nameElement.value, // Correctly get the value
        dob,
        insuredAmount,
        income,
        phoneNumber,
        gender,
        age,
        insuredTerm,
        occupation,
      });
      saveUserData(formData);
    }
  }


  async function saveUserData(data) {
    try {
      const response = await fetch('/api/saveUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(response.json())
      } else {
        const errorText = await response.text();
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }
  return (
    <>
      <div id="compareContainer">
        <div className="compareContents" id="searchPlans">
          <h1>
            <span id="searchSpan">Search</span>
            <span id="planSpan">Plans</span>
          </h1>
          <p className="fattext">
            Choosing the right plan can be a crucial decision for your needs,
            whether you’re an individual, a small business, or a large
            enterprise. To help you make the best choice, we’ve outlined the key
            features and benefits of each of our plans below. Compare and select
            the plan that suits you best.
          </p>
        </div>

        <div className="surrounddatafields">
          <form className="compareContents" id="endowmentdatafields">
            <div id="datafieldLeft">
              <input
                type="text"
                placeholder="Name"
                id="nameField"
                className="optional"
              />
              <input
                type="text"
                placeholder="Insured Term"
                id="insuredTermField"
              />
              <input
                type="text"
                placeholder="Insured Amount"
                id="insuredAmmountField"
              />
              <input type="text" placeholder="Income" id="incomeField" />
              <input
                type="text"
                placeholder="Phone Number(optional)"
                id="phoneField"
                className="optional"
              />
            </div>
            <div id="datafieldRight">
              <span id="gender">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="optional"
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="optional"
                />{" "}
                Female
              </span>
              <span id="type">
                <input type="radio" name="type" value="Endowment" /> Endowment
                <input type="radio" name="type" value="TermLife" /> Term Life
                <input type="radio" name="type" value="MoneyBack" /> Money Back
              </span>

              <span id="term">
                <input type="radio" name="term" value="Monthly" /> Monthly
                <input type="radio" name="term" value="Quarterly" /> Quarterly
                <input type="radio" name="term" value="Half-Yearly" /> Half-Yearly
                <input id="preselect" type="radio" name="term" value="Yearly" aria-checked="true"/> Yearly
              </span>
              <input type="text" placeholder="Date Of Birth  (B.S.)" id="dobField" />
              <input
                type="text"
                placeholder="Occupation(optional)"
                id="occupationField"
                className="optional"
              />
              <button className="mainButton" onClick={convertToCSV} type="button">
                Compare
              </button>
            </div>
          </form>
        </div>

        <div id="chooseBreak"></div>
      </div>
    </>
  );
}
