import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UniversalComponents/Button";
import Validator from "validatorjs";
import Swal from "sweetalert2";
import axios from "axios";
import { Text } from "../UniversalComponents/Text";

const intialValues = {
  name: "",
  floor: "",
  hall: "",
};

export const CreateKDSContainer = () => {
  const [params, setParams] = useState(intialValues);
  const [formErrors, setFormErrors] = useState(intialValues);
  // const [orders, setOrders] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);

  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("alankartoken");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newParams = { ...params };
    newParams[name] = value;
    setParams(newParams);
  };

  const handleSubmit = (e) => {
    setButtonStatus(false);
    e.preventDefault();
    let validation = new Validator(params, {
      name: "required|alpha_num|max:20",
      floor: "required|numeric",
      hall: "required|numeric",
    });
    if (validation.fails()) {
      const fieldErrors = {};
      for (let key in validation.errors.errors) {
        fieldErrors[key] = validation.errors.errors[key][0];
      }
      setFormErrors(fieldErrors);
      return;
    }
    setFormErrors({});

    const obj = {
      name: params.name,
      floor: params.floor,
      hall: params.hall,
    };
    axios
      .post(`${BASE_URL}/kds`, obj, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "KDS created successfully",
          icon: "success",
          showConfirmButton: true,
          confirmButtonClass: "confirm_btn",
          timer: 1500,
        }).then(() => {
          setParams(intialValues);
          setButtonStatus(true);
        });
        navigate("/menu/kds/view-kds");
      })
      .catch((error) => {
        Swal.fire({
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkitK8NiMeQBgpqD77bYCmZN60jvMG_JHwVw&usqp=CAU",
          imageWidth: 200,
          imageHeight: 200,
          text: `${error.response.data.errors.message}`,
          confirmButtonText: "OK",
          confirmButtonClass: "confirm_btn",
        });
      });
  };

  return (
    <div className=" bg-darkwhite">
      <div className="flex flex-col  px-11 mt-2">
        <p className="font-semibold text-orange text-xl font-sans">View KDS</p>
        <p className=" font-semibold text-lg font-sans">
          KDS &#8250; Create KDS
        </p>
        <hr className=" mt-3 mb-6 border-2 border-b-button_border border-t-white border-l-white border-r-white" />
      </div>
      <form onSubmit={handleSubmit} className="formContainer pr-8 lg:pr-0">
        <div className=" pl-11">
          <label className="block text-lg  font-semibold mb-2 ">
            Kitchen Name
          </label>
          <Text
            name="name"
            value={params.name}
            handleChange={handleChange}
            error={formErrors.name}
            placeholder=""
            className="h-16"
          />
        </div>

        <div className="pl-11">
          <label className=" block text-lg  font-semibold mb-2">Floor</label>
          <Text
            name="floor"
            value={params.floor}
            handleChange={handleChange}
            error={formErrors.floor}
            placeholder=""
            className="h-16"
          />
        </div>

        <div className="pl-11">
          <label className=" block text-lg  font-semibold mb-2">Hall</label>
          <Text
            name="hall"
            value={params.hall}
            handleChange={handleChange}
            error={formErrors.hall}
            placeholder=""
            className="h-16"
          />
        </div>
        <div></div>
        <div className="flex col-span-2 justify-center items-center mt-10">
          {buttonStatus ? (
            <Button
              text="Create"
              onClick={handleSubmit}
              className="px-14"
            ></Button>
          ) : (
            <Button text="Creating Kds" className="px-14"></Button>
          )}
        </div>
      </form>
    </div>
  );
};
