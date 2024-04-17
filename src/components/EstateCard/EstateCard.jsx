import { TbUsersGroup } from "react-icons/tb";
const EstateCard = ({ card }) => {
  const { image, estate_title, price, status, description, additional_info } =
    card;
  return (
    <div>
      <div className="card card-compact h-full  bg-base-100 shadow-xl">
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
          <div className="card-actions ">
            <div className="flex items-center gap-2">
              <TbUsersGroup size="25px" />
              <h2 className="font-medium">{additional_info.capacity}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
