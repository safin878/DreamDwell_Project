import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MembershipCard from "../../components/MembershipCard/MembershipCard";
const Membership = () => {
  const memCards = useLoaderData();
  console.log(memCards);
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>DD || Properties</title>
      </Helmet>
      <h1 className="text-center text-4xl font-bold">Our Packs</h1>
      <div className="grid grid-cols-3 gap-4 my-10">
        {memCards.map((card) => (
          <MembershipCard card={card} key={card.card_type}></MembershipCard>
        ))}
      </div>
    </div>
  );
};

export default Membership;
