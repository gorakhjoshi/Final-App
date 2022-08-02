import { generateData, generateStudents } from "shared/helpers/data-generation";
import { generateRange } from "shared/helpers/math.utils";

console.log(generateData(10));

console.log(generateRange(5));

console.log(generateStudents());

export default function App() {
  return <div className="App">hello world</div>;
}
