import { Header } from "app/components/header/header-component";
import { BrowserRouter } from "react-router-dom";
import { getStudents } from "api/get-students";
import { useEffect } from "react";
import { HomeBoard } from "app/home/home.page";
import { ActivityRoll } from "app/components/activity-roll-overlay/activity-roll-overlay.component";
import { CenteredContainer } from "shared/components/centered-container.component";

export default function App() {
  useEffect(() => {
    getStudents().then((res) => console.log(res));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <HomeBoard />
      <ActivityRoll />
    </BrowserRouter>
  );
}
