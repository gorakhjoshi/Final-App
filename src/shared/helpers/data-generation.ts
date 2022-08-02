import { generateRange, getRandom } from "shared/helpers/math.utils";

const nameTokens = ["Cataleya", "Melissa", "Luis", "Welch", "Walton", "Payne"];

export function generateData(id: number) {
  return {
    id,
    first_name: nameTokens[getRandom(0, nameTokens.length - 1)],
    last_name: nameTokens[getRandom(0, nameTokens.length - 1)],
  };
}

export function generateStudents() {
  return generateRange(5).map((item, i) => generateData(i + 1));
}
