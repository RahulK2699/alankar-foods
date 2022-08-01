import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import KDSCard from "../UniversalComponents/KDSCard";

export const ViewKDS = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { id } = useParams();
  const token = localStorage.getItem("alankartoken");
  const [kdsData, setkdsData] = useState([]);

  useEffect(() => {
    getKitchens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getKitchens = () => {
    axios
      .get(`${BASE_URL}/kds-id?kitchen_id=${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })

      .then((res) => {
        setkdsData(res.data.data);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const handleClick = async (id, stats) => {
    if (stats === 1) var status = 2;
    else if (stats === 2) status = 3;
    else if (stats === 3) status = 4;
    await axios
      .patch(
        `${BASE_URL}/meta/${id}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        getKitchens();
      });
  };

  return (
    <div className="pt-2 mt-1  bg-darkwhite px-9">
      {kdsData.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
          {kdsData.map((item) => (
            <KDSCard data={{ item ,handleClick}} />
            // <div className="box h-72 rounded-lg" key={i + 1}>
            //   <div className="h-2/6 bg-orange grid grid-rows-2 grid-flow-col pl-2 pr-2 pt-2 rounded-t-lg text-white font-sans font-semibold text-base">
            //     <div className="text-left">Table: {item.table?.name}</div>
            //     <div className="text-left">Guests: {item.total_persons}</div>
            //     <div className="text-center">Floor: {item.table?.floor}</div>
            //     <div className="text-center">Hall: {item.table?.hall}</div>
            //     <div className="text-right">
            //       {/* {to12Hours('15:35')} */}
            //       {to12Hours(item?.created_at?.slice(11, 16))}
            //     </div>
            //     <div className="text-right">
            //       {item.table?.users[0]?.role?.name}:{" "}
            //       {item.table?.users[0]?.name}
            //     </div>
            //   </div>
            //   <div className="h-3/6 overflow-y-scroll">
            //     {item.meta_order?.map((ele, index) => (
            //       <div
            //         className="flex gap-2 pl-3 justify-between pr-3 mt-1 flex-row"
            //         key={index + 1}
            //       >
            //         {ele.menus === null ? (
            //           ""
            //         ) : (
            //           <>
            //             <div className="pt-2">{index + 1}.</div>
            //             <div className="pt-2">{ele?.menus?.name}</div>
            //             <div className="pt-2">x {ele?.quantity}</div>
            //           </>
            //         )}

            //         <div>
            //           {ele?.menus === null ? (
            //             ""
            //           ) : (
            //             <>
            //               {ele?.status === 1 ? (
            //                 <div>
            //                   <button
            //                     onClick={() => {
            //                       handleClick(ele?.id, ele?.status);
            //                     }}
            //                     className="border-2 border-button_border rounded-2xl bg-orange text-white pl-2 pr-2"
            //                   >
            //                     start
            //                   </button>
            //                 </div>
            //               ) : (
            //                 <div>
            //                   {ele?.status === 2 ? (
            //                     <div>
            //                       <button
            //                         className="border-2 border-button_border  rounded-2xl pl-2 pr-2 bg-green-600 text-white"
            //                         onClick={() => {
            //                           handleClick(ele?.id, ele?.status);
            //                         }}
            //                       >
            //                         Cooking
            //                       </button>
            //                     </div>
            //                   ) : (
            //                     <div>
            //                       {ele.status === 3 ? (
            //                         <div>
            //                           <button
            //                             className="border-2 border-button_border  rounded-2xl pl-2 pr-2 bg-green-600 text-white"
            //                             onClick={() => {
            //                               handleClick(ele?.id, ele?.status);
            //                             }}
            //                           >
            //                             Ready to serve
            //                           </button>
            //                         </div>
            //                       ) : (
            //                         <div>
            //                           <button className="border-2 border-button_border  rounded-2xl pl-2 pr-2 bg-green-600 text-white">
            //                             Served
            //                           </button>
            //                         </div>
            //                       )}
            //                     </div>
            //                   )}
            //                 </div>
            //               )}
            //             </>
            //           )}
            //         </div>
            //       </div>
            //     ))}
            //   </div>
            //   <div className="h-1/6 bg-orange flex flex-row justify-between pl-4 pr-4 py-3 text-white text-base font-semibold  rounded-b-lg">
            //     <div>#{item.id}</div>
            //     <div>
            //       {item.order_type === "1" ? (
            //         <div>Dine-In</div>
            //       ) : (
            //         <div>
            //           {item.order_type === "2" ? (
            //             <div>Take-away</div>
            //           ) : (
            //             <div>Party-order</div>
            //           )}
            //         </div>
            //       )}
            //     </div>
            //     <div></div>
            //   </div>
            // </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl text-center">
          <div className="my-56">No data found!</div>
        </div>
      )}
    </div>
  );
};
