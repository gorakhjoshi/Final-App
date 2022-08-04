import { Header } from "app/components/header/header-component";
import { BrowserRouter } from "react-router-dom";
import { useApi } from "shared/hooks/useApi";
import { HomeBoardPage } from "app/home/home.page";

export default function App() {
  console.log(useApi({ url: "get-activities" }));
  return (
    <BrowserRouter>
      <Header />
      <HomeBoardPage />
    </BrowserRouter>
  );
}
