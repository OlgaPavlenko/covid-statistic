import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { DOMAttributes, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { currentCounyrySelector } from "store/selectors/country";
import { DataCategory } from "../DataCategory";
import { useStyle } from "./styles";
import confirmed from "../../assets/icons/modalIcons/confirmed.svg";
import death from "../../assets/icons/modalIcons/death.svg";
import recovered from "../../assets/icons/modalIcons/recovered.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid white",
  borderRadius: "2%",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

interface IBasicModalProps extends DOMAttributes<HTMLElement> {
  open: boolean;
  modalClose: () => void;
}

export const BasicModal: FunctionComponent<IBasicModalProps> = ({
  open,
  modalClose,
}) => {
  const classes = useStyle();
  const currentCounty = useSelector(currentCounyrySelector);
  const { Country, TotalConfirmed, TotalDeaths, TotalRecovered } =
    currentCounty;

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <h1>{Country}</h1>
          <div>
            <DataCategory
              icon={confirmed}
              title="Total Confirmed"
              count={TotalConfirmed}
            />
            <DataCategory
              icon={death}
              title="Total Deaths"
              count={TotalDeaths}
            />
            <DataCategory
              icon={recovered}
              title="Total Recovered"
              count={TotalRecovered}
            />
          </div>
          <button onClick={modalClose} className={classes.button}>
            OK
          </button>
        </Box>
      </Modal>
    </div>
  );
};
