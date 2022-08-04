import styled from "styled-components";
import Button from "@mui/material/ButtonBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spacing, BorderRadius, FontWeight } from "shared/styles/styles";
import { Colors } from "shared/styles/colors";
import { CenteredContainer } from "shared/components/centered-container/centered-container.component";
import { StudentListTile } from "app/components/student-list-tile/student-list-tile.component";
import { ActiveRollOverlay } from "app/components/active-roll-overlay/active-roll-overlay.component";

export const HomeBoardPage: React.FC = () => {
  return (
    <>
      <S.PageContainer>
        <Toolbar
          onItemClick={function () {
            return true;
          }}
        />

        <CenteredContainer>
          <FontAwesomeIcon icon="spinner" size="2x" spin />
        </CenteredContainer>

        <StudentListTile
          isRollMode={true}
          student={{ id: 1, first_name: "test", last_name: "test" }}
        />

        <CenteredContainer>
          <div>Failed to load</div>
        </CenteredContainer>
      </S.PageContainer>

      <ActiveRollOverlay
        isActive={true}
        onItemClick={function () {
          return true;
        }}
      />
    </>
  );
};

type ToolbarAction = "roll" | "sort";
interface ToolbarProps {
  onItemClick: (action: ToolbarAction, value?: string) => void;
}
const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <S.ToolbarContainer>
      <div
        onClick={function () {
          return true;
        }}
      >
        First Name
      </div>
      <div>Search</div>
      <S.Button
        onClick={function () {
          return true;
        }}
      >
        Start Roll
      </S.Button>
    </S.ToolbarContainer>
  );
};

const S = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: ${Spacing.u4} auto 140px;
  `,
  ToolbarContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: ${Colors.blue.base};
    padding: 6px 14px;
    font-weight: ${FontWeight.strong};
    border-radius: ${BorderRadius.default};
  `,
  Button: styled(Button)`
    && {
      padding: ${Spacing.u2};
      font-weight: ${FontWeight.strong};
      border-radius: ${BorderRadius.default};
    }
  `,
};
