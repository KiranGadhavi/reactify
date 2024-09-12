"use client";
import React, { useState, useEffect } from "react";

const buttonData = [
  { id: 1, label: "England" },
  { id: 2, label: "Wales" },
  { id: 3, label: "Scotland" },
];

export default function ReviewsComponent() {
  const [reviews, setReviews] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      const fetchReviews = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(
            `https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`
          );
          const data = await response.json();
          setReviews(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchReviews();
    }
  }, [selectedCountry]);

  const handleClick = (country) => {
    setSelectedCountry(country);
    setSelectedButton(country);
  };

  return (
    <section className="grid grid-cols">
      <article className="text-center">
        <h1 className="m-2 text-xl">Trusted</h1>
        <hr />
        <p className="m-6">
          We've got thousands of happy customers all over the UK. Choose your
          country to see the latest review:
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {/* {buttonData.map((btnData) => (
            <div
              key={btnData.id}
              className="text-center w-40 bg-gray-600 m-4 p-1 rounded-md text-white hover:bg-orange-300 hover:rounded-md hover:p-1 hover:w-40 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-600"
            >
              <button
                onClick={() => handleClick(btnData.label)}
                className="m-2 w-full"
              >
                {btnData.label}
              </button>
            </div>
          ))} */}
          {buttonData.map((btnData) => (
            <div
              key={btnData.id}
              className={`text-center w-40 m-4 p-1 rounded-md text-white
                ${
                  selectedButton === btnData.label
                    ? "bg-orange-300 bg-gradient-to-r from-orange-300 to-orange-600"
                    : "bg-gray-600 hover:bg-orange-300 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-600"
                }`}
            >
              <button
                onClick={() => handleClick(btnData.label)}
                className="m-2 w-full"
              >
                {btnData.label}
              </button>
            </div>
          ))}
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {/* {Array.isArray(reviews) && reviews.length > 0 && (
          <div>
            <h2>Reviews for {selectedCountry}</h2>

            {reviews.map((review) => (
              <div key={review.id}>
                <h3>{review.text}</h3>
                <p>{review.author}</p>
                <p>{review.location}</p>
                <p>{review.date}</p>
                <p>{review.rating}</p>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        )} */}
        {selectedCountry && reviews && reviews.text && (
          <>
            <div className="bg-gray-200 p-4 rounded">{reviews.text}</div>
            <div className="text-right p-1 font-bold">
              {reviews.author}
              {reviews.location ? ` - ${reviews.location}` : ""}
            </div>
          </>
        )}
      </article>
    </section>
  );
}
