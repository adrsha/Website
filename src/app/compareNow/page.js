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

        <div className="compareContents" id="datafields">
          <div id="datafieldLeft"></div>
          <div id="datafieldRight"></div>
        </div>

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
