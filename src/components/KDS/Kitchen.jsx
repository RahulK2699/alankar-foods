
import "./kds.scss";
import { useNavigate} from "react-router-dom";

export const Kitchen = ({ data }) => {
  const navigate = useNavigate();

 const handleKitchen = (id) => {
  navigate(`/menu/kds/view-kds/${id}`)
 }
  return (
    <div>
     
        <div className=" w-44 h-44  cursor-pointer Btn flex flex-col justify-center gap-4" onClick={()=>{handleKitchen(data.id)}}>
          <img
            className=" w-24 h-24 rounded-[48px] mx-auto"
            src={data.img}
            alt="kitchen"
          />
          <p className=" font-semibold text-xl text-white mx-auto" >
            {data.type}
          </p>
        </div>
     
    </div>
  );
};
