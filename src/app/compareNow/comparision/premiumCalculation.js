export const CalculatePremiumLic=(userData)=>{
    const{SA, Term, Age, Mode, DAB, TR, YLY}=userData;///YLY =1 for yearly, =0.2 for HLY, 1/12 for Mthly
    let tabrate=72.05
    let loadingCharge=1.02
    let rebate = 2

    let hlyPremium = ((((tabrate*loadingCharge)-2)*SA/1000)+(DAB/1000)+(TR*7.94/1000))*YLY
}