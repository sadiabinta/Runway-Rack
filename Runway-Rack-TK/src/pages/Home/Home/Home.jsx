import ContactCard from "../ContactCard/ContactCard";
import OfferDeals from "../OfferDeals";


const Home = () => {
    return (
        <div className="min-h-screen">
            <ContactCard></ContactCard>
            <OfferDeals/>
        </div>
    );
};

export default Home;