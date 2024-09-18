"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

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
            `${process.env.NEXT_PUBLIC_REVIEWS_API_URL}?country=${selectedCountry}`
          );

          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }

          const data = await response.json();
          setReviews(data);
        } catch (error) {
          setError(error.message);
        } finally {
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

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  const renderReview = (review) => (
    <motion.div
      key={review.id}
      className="bg-gray-100 p-6 rounded-lg shadow-md mb-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <p className="text-sm font-medium text-gray-900">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div className="flex">{renderStars(review.rating)}</div>
        <div className="text-right">
          <p className="font-semibold">{review.author}</p>
          {review.location && (
            <p className="text-sm text-gray-600 mt-1">{review.location}</p>
          )}
          <p className="text-sm text-gray-500 mt-1">{review.date}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="bg-white shadow-lg rounded-lg p-8 my-12">
      <article className="text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Trusted by Thousands
        </h1>
        <hr className="w-1/4 mx-auto border-orange-500 mb-8" />
        <p className="text-lg text-gray-600 mb-10">
          We&apos;ve earned the trust of thousands of satisfied customers across
          the UK. Select your country to view our latest reviews:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          {buttonData.map((btnData) => (
            <motion.button
              key={btnData.id}
              onClick={() => handleClick(btnData.label)}
              className={`px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 ${
                selectedButton === btnData.label
                  ? "bg-orange-500 shadow-lg"
                  : "bg-gray-600 hover:bg-orange-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {btnData.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg text-gray-600 mb-6"
            >
              Loading reviews...
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg text-red-500 mb-6"
            >
              Error: {error}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedCountry && reviews && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-8 text-gray-700">
                Reviews for {selectedCountry}
              </h2>
              <div className="space-y-6">
                {Array.isArray(reviews)
                  ? reviews.map(renderReview)
                  : renderReview(reviews)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </section>
  );
}
