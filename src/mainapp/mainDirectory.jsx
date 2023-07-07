import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { logout } from "../httpcalls/authThunk";


const MainDirectory = () => {
  const dispatch = useDispatch()
    return (
      <>
    <Outlet />

    
      </>
    );
  }
  
export default MainDirectory;