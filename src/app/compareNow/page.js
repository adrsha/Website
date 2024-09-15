'use client';
import "./page.css";
<<<<<<< HEAD
import { Children } from "react";
import { useEffect, useState } from 'react';
export default function Compare() {

  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    insuredAmount: '',
    income: '',
    phoneNumber: '',
    age: '',
    insuredTerm: '',
    occupation: '',
  });

  useEffect(()=>{
    console.log(formData)
  }, [formData]);

  function convertToCSV(data) {
    console.log("button pressed!")
    const nameElement = document.getElementById('nameField');
    if (nameElement) {
      // Retrieve the parent elements and their children correctly
      const dob = nameElement.parentElement.children[1].value;
      const insuredAmount = nameElement.parentElement.children[2].value;
      const income = nameElement.parentElement.children[3].value;
      const phoneNumber = nameElement.parentElement.children[4].value;
      const age = nameElement.parentElement.parentElement.children[1].children[1].value;
      const insuredTerm = nameElement.parentElement.parentElement.children[1].children[2].value;
      const occupation = nameElement.parentElement.parentElement.children[1].children[3].value;

      const gender = document.querySelector('input[name="gender"]:checked')?.value;

      // Update the state with form data
      setFormData({
        name: nameElement.value,  // Correctly get the value
        dob,
        insuredAmount,
        income,
        phoneNumber,
        gender,
        age,
        insuredTerm,
        occupation,
      });
    }
    }
=======
import fs from 'fs';
import path from 'path';
export default function Compare() {
  const fPath= path.join(process.cwd(),'public','lic', 'endowment.csv');
  const csvdata = fs.readFileSync(fPath, 'utf-8');
  const rows = csvdata.split('/n');
  const parsedData = rows.map(row=>row.split(','));
  console.log(parsedData)
>>>>>>> daa1ac8 (chore: new things in compare)
  return (
    <>
      <div id="compareContainer">
        <div className="compareContents" id="searchPlans">
          <h1>
            <span id="searchSpan">Search</span>
            <span id="planSpan">Plans</span>
          </h1>
          <p>
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
              <input type="text" placeholder="Date Of Birth" id="dobField" />
              <input
                type="text"
                placeholder="Insured Ammount"
                id="insuredAmmountField"
              />
              <input type="text" placeholder="Income" id="incomeField" />
              <input
                type="text"
                placeholder="Phone Number"
                id="phoneField"
                className="optional"
              />
            </div>
            <div id="datafieldRight">
              <span id="gender">
                <input type="radio" name="gender" value="Male" /> Male
                <input type="radio" name="gender" value="Female" /> Female
              </span>
              <input type="text" placeholder="Age" id="ageField" />
              <input
                type="text"
                placeholder="Insured Term"
                id="insuredTermField"
              />
              <input
                type="text"
                placeholder="Occupation"
                id="occupationField"
                className="optional"
              />
              <button className="mainButton" onClick={convertToCSV}>Compare</button>
            </div>
          </form>
          {/* <form className="compareContents" id="termlifedatafields">
            <div id="datafieldLeft">
              <input
                type="text"
                placeholder="Name"
                id="nameField"
                className="optional"
              />
              <input type="text" placeholder="Date Of Birth" id="dobField" />
              <input
                type="text"
                placeholder="Insured Ammount"
                id="insuredAmmountField"
              />
              <input type="text" placeholder="Income" id="incomeField" />
              <input
                type="text"
                placeholder="Phone Number"
                id="phoneField"
                className="optional"
              />
            </div>
            <div id="datafieldRight">
              <span id="gender">
                <input type="radio" name="gender" value="Male" /> Male
                <input type="radio" name="gender" value="Female" /> Female
              </span>
              <input type="text" placeholder="Age" id="ageField" />
              <input
                type="text"
                placeholder="Insured Term"
                id="insuredTermField"
              />
              <input
                type="text"
                placeholder="Occupation"
                id="occupationField"
                className="optional"
              />
              <button className="mainButton" onClick={convertToCSV}>Compare</button>
            </div>
          </form> */}
        </div>

        <div id="chooseBreak"></div>

        <div id="contentChoose">
          <div id="selectPanel"></div>
          <div id="contentChooseCurrent">Endowment</div>
          <div>Term life</div>
          <div>Money back</div>

        </div>
          <h1>{formData.dob}</h1>
      </div>
    </>
  );
}
