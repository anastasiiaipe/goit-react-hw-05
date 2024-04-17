import style from "./Loader.module.css";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={style.loaderBox}>
      <ThreeCircles
        visible="true"
        height="100"
        width="100"
        color="rgba(128, 0, 255, 0.496)"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loader;
