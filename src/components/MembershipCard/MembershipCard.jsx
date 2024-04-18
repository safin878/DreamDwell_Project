import { HiOutlineBadgeCheck } from "react-icons/hi";

const MembershipCard = ({ card }) => {
  const { card_type, price, features } = card;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="text-center  p-8 bg-gradient-to-b from-pcolor form-10% to-scolor to-90% rounded-xl text-lcolor"
    >
      <div>
        <h2 className="text-3xl font-medium">{card_type}</h2>
        <h3 className="text-2xl text-white mb-8">
          {price} <span className="text-sm">/Month</span>
        </h3>
        <hr />
      </div>
      <div className="my-8">
        {features.map((feature) => (
          <div
            key={feature}
            className="text-xl flex justify-center items-center"
          >
            <HiOutlineBadgeCheck /> {feature}
          </div>
        ))}
      </div>
      <button className="btn border border-pcolor bg-pcolor hover:bg-scolor hover:border-pcolor ">
        Buy now
      </button>
    </div>
  );
};

export default MembershipCard;
