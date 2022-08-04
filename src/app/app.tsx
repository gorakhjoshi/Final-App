import { Header } from "app/components/header/header-component";
import { BrowserRouter } from "react-router-dom";
import { getHomeboardStudents } from "api/get-homeboard-students";
import { useEffect } from "react";
import { HomeBoard } from "app/home/home.page";
import { ActivityRoll } from "app/components/activity-roll-overlay/activity-roll-overlay.component";

export default function App() {
  useEffect(() => {
    getHomeboardStudents().then((res) => console.log(res));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <HomeBoard />
      <ActivityRoll />
    </BrowserRouter>
  );
}
