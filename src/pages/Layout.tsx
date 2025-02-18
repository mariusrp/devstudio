import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default Layout;
