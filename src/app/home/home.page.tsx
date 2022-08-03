import Button from "@mui/material/Button";
import styled from "styled-components";
import { useApi } from "../../shared/hooks/useApi";

export function HomeBoard() {
  console.log(useApi());
  return (
    <div>
      <Button>Hello </Button>
    </div>
  );
}

// const S = {
//   Button: styled(ButtonBase)`
//     background-color: red;
//   `,
// };
