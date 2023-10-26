import React from 'react';

const OfferDeals = () => {

  const ticketData = [
    {
      imgSrc: 'https://themehut.co/html/geair/assets/img/images/offer_img01.jpg',
      title: 'New York to California',
      date: '09 Jun 2022 - 16 Jun 2022',
      class: 'Economy',
      price: '$290',
    },
    {
      imgSrc: 'https://themehut.co/html/geair/assets/img/images/offer_img02.jpg',
      title: 'Los Angeles to Miami',
      date: '12 Jul 2022 - 19 Jul 2022',
      class: 'Business',
      price: '$600',
    },
    {
      imgSrc: 'https://themehut.co/html/geair/assets/img/images/offer_img03.jpg',
      title: 'Chicago to Seattle',
      date: '05 Aug 2022 - 12 Aug 2022',
      class: 'First Class',
      price: '$850',
    },
    {
      imgSrc: 'https://themehut.co/html/geair/assets/img/images/offer_img04.jpg',
      title: 'Dallas to Miami',
      date: '18 Sep 2022 - 25 Sep 2022',
      class: 'Economy',
      price: '$200',
    },
    {
      imgSrc: 'https://themehut.co/html/geair/assets/img/images/offer_img05.jpg',
      title: 'Boston to Dallas',
      date: '22 Oct 2022 - 29 Oct 2022',
      class: 'Business',
      price: '$480',
    },
    {
      imgSrc: 'https://themehut.co/html/geair/assets/img/images/offer_img01.jpg',
      title: 'Dhaka to Dubai',
      date: '09 Jun 2022 - 16 Jun 2022',
      class: 'Economy',
      price: '$980',
    },
  ];

    return (
      <>
      <div className='text-center mt-10 text-3xl font-semibold'>
      <h1 > Flight Offer Deals</h1>
      </div>
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-lg">
        <img
          src={ticketData[0].imgSrc}
          alt={`Ticket 1`}
          className="w-full h-3/4 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-xl font-bold mb-2">{ticketData[0].title}</h2>
        <p className="text-gray-600 mb-4">{ticketData[0].date}</p>
        <p className="text-gray-700 mb-4">{ticketData[0].class} from</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold mr-4">{ticketData[0].price}</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
      <div className="md:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {ticketData.slice(1, 5).map((ticket, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-lg">
            <img
              src={ticket.imgSrc}
              alt={`Ticket ${index + 2}`}
              className="w-full h-1/2 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">{ticket.title}</h2>
            <p className="text-gray-600 mb-4">{ticket.date}</p>
            <p className="text-gray-700 mb-4">{ticket.class} from</p>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold mr-4">{ticket.price}</p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default OfferDeals;