import {
  FaClipboardList,
  FaRegBuilding,
  FaVectorSquare,
} from "react-icons/fa6";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { MdGrade } from "react-icons/md";
import { SiBisecthosting } from "react-icons/si";
import { TbUsersGroup } from "react-icons/tb";
import { VscDiffRenamed } from "react-icons/vsc";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetailes = () => {
  const dem = useLoaderData();
  const { id } = useParams();
  const idIndex = parseInt(id - 1);
  const {
    image,
    estate_title,
    price,
    status,
    description,
    location,
    segment_name,
    area,
    facilities,
    additional_info,
  } = dem[idIndex];

  return (
    <div className="container mx-auto">
      <div className="lg:w-[1000px] mx-auto relative">
        <img
          src={image}
          className="w-[1000px] mx-auto relative rounded-lg"
          alt=""
        />
        <div className="absolute top-1 right-1 md:top-10 md:right-10 font-semibold border-2 border-scolor bg-pcolor rounded-lg p-2 text-2xl text-white">
          {price} <div className="text-center font-normal ">For {status}</div>
        </div>
        <div className="absolute bottom-1 left-1 md:bottom-10 md:left-10 font-semibold   text-2xl text-white ">
          {estate_title}
        </div>
      </div>
      <div className="text-4xl font-bold mt-6">
        <h3>Property Details :</h3>
      </div>
      <div className="text-2xl my-4 space-y-4">
        {description}
        <div className="text-lcolor flex items-center text-lg mt-4">
          {" "}
          <VscDiffRenamed className="text-pcolor" size="30px" />
          <span className="font-medium mr-2">Segment Name: </span>{" "}
          {segment_name}
        </div>
        <div className="text-lcolor flex items-center text-lg">
          {" "}
          <IoLocationOutline className="text-pcolor" size="30px" />
          <span className="font-medium mr-2">Loction: </span> {location}
        </div>
        <div className="text-lcolor flex items-center text-lg">
          {" "}
          <FaVectorSquare className="text-pcolor" size="30px" />
          <span className="font-medium mr-2">Area: </span> {area}
        </div>
        <div className="text-lcolor flex items-center text-lg">
          {" "}
          <FaClipboardList className="text-pcolor" size="30px" />
          <span className="font-medium mr-2">Facilities: </span> {facilities}
        </div>
        <div className="space-y-4 flex gap-4 items-center">
          {additional_info.beds && (
            <div className="text-lcolor flex items-center text-lg mt-4">
              {" "}
              <IoBedOutline className="text-pcolor" size="30px" />
              <span className="font-medium mr-2">Beds: </span>{" "}
              {additional_info.beds}
            </div>
          )}
          {additional_info.grades && (
            <div className="text-lcolor flex items-center text-lg mt-4">
              {" "}
              <MdGrade className="text-pcolor" size="30px" />
              <span className="font-medium mr-2">Grades: </span>{" "}
              {additional_info.grades}
            </div>
          )}
          {additional_info.sect && (
            <div className="text-lcolor flex items-center text-lg mt-4">
              {" "}
              <SiBisecthosting className="text-pcolor" size="30px" />
              <span className="font-medium mr-2">Sect: </span>{" "}
              {additional_info.sect}
            </div>
          )}
          <div className="text-lcolor flex items-center text-lg">
            {" "}
            <TbUsersGroup className="text-pcolor" size="30px" />
            <span className="font-medium mr-2">Capacity: </span>{" "}
            {additional_info.capacity}
          </div>
          <div className="text-lcolor flex items-center text-lg">
            {" "}
            <FaRegBuilding className="text-pcolor" size="30px" />
            <span className="font-medium mr-2">Year Built: </span>{" "}
            {additional_info.year_built}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetailes;
