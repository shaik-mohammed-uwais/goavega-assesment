import { checkvalid, healper } from "../healperFunc/healper.js";

export const range = {
  minute: [0, 59],
  hour: [0, 23],
  "day of month": [1, 31],
  month: [1, 12],
  "day of week": [0, 6],
};

export default function evaluatecron(field, val) {
  const [min, max] = range[field];

  if (val === "*") {
    let rangeval = healper(min, max);
    return rangeval;
  }

  if (val.includes(",")) {
    let ranesvalues = val.split(",").map(Number);
    ranesvalues.forEach((v) => checkvalid(v, min, max, field));
    return ranesvalues;
  }

  if (val.includes("-")) {
    let [start, end] = val.split("-").map(Number);
    checkvalid(start, min, max, field);
    checkvalid(end, min, max, field);
    let range = healper(start, end);
    return range;
  }

  if (val.includes("/")) {
    let [left, right] = val.split("/");
    right = Number(right);

    if (left === "*") {
      left = `${min}-${max}`;
    }

    let [start, end] = left.split("-").map(Number);
    checkvalid(start, min, max, field);
    checkvalid(end, min, max, field);
    let res = healper(start, end, right);
    return res;
  }

  let num = Number(val);
  checkvalid(num, min, max, field);
  return [num];
}
