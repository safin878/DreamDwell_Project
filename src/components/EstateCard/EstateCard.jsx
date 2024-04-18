import { FaVectorSquare } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { TbUsersGroup } from "react-icons/tb";
import { Link } from "react-router-dom";
const EstateCard = ({ card }) => {
  const {
    id,
    image,
    estate_title,
    price,
    status,
    description,
    area,
    additional_info,
    location,
  } = card;
  return (
    <div data-aos="fade-right" data-aos-delay="100">
      <div className="card card-compact h-full  bg-base-100 shadow-xl hover:scale-105 transition border-2 hover:border-pcolor">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h4 className="text-2xl font-semibold text-pcolor">{price}</h4>
            <h5 className="bg-scolor px-2 rounded-xl font-medium">
              To {status}
            </h5>
          </div>
          <h2 className="card-title">{estate_title}</h2>
          <p className="text-lg">{description}</p>
          <hr />
          <div className="card-actions gap-4 ">
            <div className="flex items-center gap-2">
              <TbUsersGroup size="25px" />
              <h2 className="font-medium">{additional_info.capacity} People</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaVectorSquare size="25px" />
              <h2 className="font-medium">{area}</h2>
            </div>
            <div className="flex items-center gap-2">
              <GrLocation size="25px" />
              <h2 className="font-medium">{location}</h2>
            </div>
          </div>
          <hr />
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`}>
              <button className="btn bg-pcolor hover:bg-scolor">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
