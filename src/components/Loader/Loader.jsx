import style from "./Loader.module.css";
import { ThreeCircles } from "react-loader-spinner";

const Loader = ({ loading }) => {
  return (
    loading && (
      <div className={style.loaderBox}>
        <ThreeCircles
          visible={loading}
          height="100"
          width="100"
          color="red"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  );
};
export default Loader;
