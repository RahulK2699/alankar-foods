import React from "react";

const TableCard = (props) => {
  console.log(props.data.data, "props for table");
  return (
    <div>
      <div className=" box h-48 mb-16 lg:mb-1">
        <div className="h-16 bg-orange rounded-t-lg pt-4 flex flex-row justify-between pl-2 pr-2">
          <div className="text-white mt-1 font-sans font-semibold text-left">
            Table: {props.data.data.name}
          </div>
          <div className="text-white mt-1 font-sans font-semibold text-left">
            <div>Floor: {props.data.data.floor}</div>
          </div>
          <div className="text-white mt-1 font-sans font-semibold text-left">
            <div>Hall: {props.data.data.hall}</div>
          </div>
        </div>
        <div className="h-24 flex flex-col gap-3 bg-white pt-2 pl-2 pr-2">
          <div className="flex flex-row gap-1">
            <div className="w-3/6 text-left font-semibold">Status:</div>
            {props.data.data.status === 2 ? (
              <div className="w-3/6 text-left text-red-600">Occupied</div>
            ) : (
              <div className="w-3/6 text-left text-green-700">Not Occupied</div>
            )}
          </div>
          <div className="flex flex-row gap-1">
            <div className="w-3/6 text-left font-semibold">Members:</div>
            {props.data.data.status === 2 ? (
              <div className="w-3/6 text-left">14</div>
            ) : (
              <div className="w-3/6 text-left">0</div>
            )}
          </div>
        </div>
        <div className="h-8 add text-center font-sans font-semibold text-white rounded-lg cursor-pointer"></div>
      </div>
    </div>
  );
};

export default TableCard;
