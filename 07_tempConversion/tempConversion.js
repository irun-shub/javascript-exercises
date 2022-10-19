const ftoc = function (fah) {
  let f = ((fah - 32) * 5/9);
 return Number(f.toFixed(1));
//  Math.round((f * 10)/10)
};

const ctof = function (cel) {
  let c = (cel * 9/5 + 32);
  return Number(c.toFixed(1));
  // Math.round((c * 10)/10)
};
// x °C ≘ (x ×9/5+ 32) °F	
// x °F ≘ (x − 32) ×5/9°C
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
