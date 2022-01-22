export const toCommas = (value) => {
  //   if (value === null) return null;
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};


// Format Money
export const formatMoney = (num) => {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const toKobo = (value) => {
  return value * 100
}


// RiskProfile Calculation
export const riskProfile = (value) => {
  if(value >=76){
    return 'Aggressive'
  }
  else if(value >=62){
    return 'Growth'
  }
  else if(value >=48){
    return 'Balanced'
  }
  else if(value >=34){
    return 'Cautious'
  }
  else{
    return 'Curious'
  }
}