import evaluatecron from "./evaluateCron/evaluatecron.js";

const croninput = process.argv[2];

function parseCron(croninput) {
  const parts = croninput.trim().split(" ");

  if (parts.length < 6) {
    throw new Error("enter valid corn string");
  }

  const [min, hr, dom, mon, dow, ...val] = parts;
  const command = val.join(" ");

  const output = {
    minute: evaluatecron("minute", min),
    hour: evaluatecron("hour", hr),
    "day of month": evaluatecron("day of month", dom),
    month: evaluatecron("month", mon),
    "day of week": evaluatecron("day of week", dow),
    command: [command],
  };

  console.log(output);
}

parseCron(croninput);
