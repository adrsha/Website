// import { e } from "mathjs";
// import papa from "papaparse"
// export const CalculatePremiumLic=(userData)=>{
//     const{SA, Term, Age, Mode="all", DAB=0, TR=0, YLY}=userData;///YLY =1 for yearly, =0.2 for HLY, 1/12 for Mthly
//     let tabrate=72.05
//     let loadingCharge=1.02
//     let rebate = 0


//     fetch('/lic/rebate.csv')
//     .then(response => response.text())
//     .then(csvText => {
//       const result = papa.parse(csvText, { header: false });
//       let rebatedata=result.data.find((row)=>{
//         (row[1]<=SA<=row[2])
//       });
//       if (rebatedata){
//           rebate=5
//       }
//     })
//     .then(console.log(rebate,"thasdf"))
//     .catch(error => console.error('Error fetching CSV:', error));



//     let hlyPremium = ((((tabrate*loadingCharge)-2)*SA/1000)+(DAB/1000)+(TR*7.94/1000))*YLY
// }


import { e } from "mathjs";
import papa from "papaparse";

export const CalculatePremiumLic = async (userData) => {
  const { SA, Term, Age, Mode = "all", DAB = 0, TR = 0, YLY = 1, tabrate = 2 } = userData;
  let rebate = 0;
  let loadingCharge = 0;

  try {
    // // Fetch multiple CSV files for different parameters
    // const [rebateCsv, loadingChargeCsv, tabrateCsv] = await Promise.all([
    //   fetch('/lic/rebate.csv').then(response => response.text()),
    //   fetch('/lic/loadingCharge.csv').then(response => response.text()),
    //   fetch('/lic/tabrate.csv').then(response => response.text())
    // ]);

    // Process rebate data
    const rebateData = papa.parse(rebateCsv, { header: false });
    const rebatedata = rebateData.data.find((row) => {
      return (row[1] <= SA && SA <= row[2]);
    });

    if (rebatedata) {
      rebate = 5; // Example rebate value
    }


    // // Process loading charge data
    // const loadingChargeData = papa.parse(loadingChargeCsv, { header: true });
    // const loadingCharge = loadingChargeData.data[0]?.value || 1.02; // Default if not found

    // // Process tabrate data
    // const tabrateData = papa.parse(tabrateCsv, { header: true });
    // const tabrate = tabrateData.data[0]?.value || 72.05; // Default if not found

    // Calculate the premium
    let hlyPremium = ((((tabrate * loadingCharge) - 2) * SA / 1000) + (DAB / 1000) + (TR * 7.94 / 1000)) * YLY;

    // Apply rebate if necessary
    hlyPremium -= rebate;

    return hlyPremium; // Return the calculated premium
  } catch (error) {
    console.error('Error fetching CSVs:', error);
    return null; // Return null in case of error
  }
};
