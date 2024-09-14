import "./page.css";
export default function Compare() {
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

        <form className="compareContents" id="datafields">
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
            <button id="mainButton">Compare</button>
          </div>
        </form>

        <div id="chooseBreak"></div>

        <div className="compareContents" id="contentChoose">
          <div>Endowment</div>
          <div>Term life</div>
          <div>Money back</div>
        </div>
      </div>
    </>
  );
}
