"use client";
import { useReducer, useEffect, useState } from "react";

const initialState = {
  data: {
    fullName: "",
    postcode: "",
    addressLine1: "",
    city: "",
    phoneNumber: "",
    emailAddress: "",
  },
  errors: {},
  status: "IDLE",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value,
        },
        errors: {
          ...state.errors,
          [action.field]: "",
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.message,
        },
      };
    case "SET_STATUS":
      return { ...state, status: action.status };
    default:
      return state;
  }
}

export default function BookingComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        return value.trim().split(/\s+/).length >= 2
          ? ""
          : "Please enter your full name";
      case "postcode":
        return /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(value)
          ? ""
          : "Please enter a valid UK postcode";
      case "addressLine1":
        return value.trim()
          ? ""
          : "Please enter your house/flat number and street name";
      case "city":
        return value.trim() ? "" : "Please enter your city";
      case "phoneNumber":
        return /^(\+44|0)\d{10}$/.test(value)
          ? ""
          : "Please enter a valid UK phone number";
      case "emailAddress":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address";
      default:
        return "";
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value,
    });

    const error = validateField(name, value);
    if (error) {
      dispatch({
        type: "SET_ERROR",
        field: name,
        message: error,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_STATUS", status: "SUBMITTING" });

    const errors = Object.keys(state.data).reduce((acc, key) => {
      const error = validateField(key, state.data[key]);
      if (error) {
        acc[key] = error;
      }
      return acc;
    }, {});

    if (Object.keys(errors).length > 0) {
      Object.keys(errors).forEach((field) => {
        dispatch({
          type: "SET_ERROR",
          field,
          message: errors[field],
        });
      });
      dispatch({ type: "SET_STATUS", status: "ERROR" });
      return;
    }

    // Simulating API call
    setTimeout(() => {
      dispatch({ type: "SET_STATUS", status: "SUCCESS" });
    }, 2000);
  };

  const inputClasses = `mt-1 block w-full rounded-md border-2 shadow-sm 
    focus:border-orange-500 focus:ring-2 focus:ring-orange-200 
    active:border-orange-600 active:ring-2 active:ring-orange-300
    transition duration-300 ease-in-out py-2 px-3 hover:border-orange-300
    transform hover:scale-[1.02] focus:scale-[1.02]
    focus:outline-none focus-visible:outline-none`; // Added focus-visible:outline-none

  return (
    <section className="max-w-2xl mx-auto p-6">
      <article
        className={`transition-all duration-700 ease-out transform 
          ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
      >
        {state.status === "SUCCESS" ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 animate-fade-in">
            Thank you for your booking. We will be in touch shortly to confirm
            your consultation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in">
                Design Consultation Booking
              </h1>
              <p className="text-md text-gray-600 animate-fade-in-delay">
                Schedule your personalized interior design session
              </p>
            </div>
            <fieldset className="border p-4 rounded">
              <legend className="font-semibold">Personal Information</legend>
              <div className="space-y-4">
                {["fullName", "postcode", "addressLine1", "city"].map(
                  (field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700">
                        {field === "addressLine1"
                          ? "Address Line 1"
                          : field.charAt(0).toUpperCase() +
                            field
                              .slice(1)
                              .replace(/([A-Z])/g, " $1")
                              .trim()}
                        <input
                          type="text"
                          name={field}
                          value={state.data[field]}
                          onChange={handleInputChange}
                          placeholder={`Enter your ${
                            field === "addressLine1"
                              ? "house/flat number and street name"
                              : field
                                  .replace(/([A-Z])/g, " $1")
                                  .toLowerCase()
                                  .trim()
                          }`}
                          className={`${inputClasses} ${
                            state.errors[field]
                              ? "border-red-500 bg-red-50"
                              : "border-gray-300 focus:bg-white"
                          } ${
                            state.data[field] && !state.errors[field]
                              ? "bg-green-50"
                              : ""
                          }`}
                          required
                        />
                      </label>
                      {state.errors[field] && (
                        <p className="mt-2 text-sm text-red-600">
                          {state.errors[field]}
                        </p>
                      )}
                    </div>
                  )
                )}
              </div>
            </fieldset>

            <fieldset className="border p-4 rounded">
              <legend className="font-semibold">Contact Information</legend>
              <div className="space-y-4">
                {["phoneNumber", "emailAddress"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-gray-700">
                      {field === "phoneNumber"
                        ? "Phone Number"
                        : "Email Address"}
                      <input
                        type={field === "emailAddress" ? "email" : "tel"}
                        name={field}
                        value={state.data[field]}
                        onChange={handleInputChange}
                        placeholder={`Enter your ${
                          field === "phoneNumber"
                            ? "phone number"
                            : "email address"
                        }`}
                        className={`${inputClasses} ${
                          state.errors[field]
                            ? "border-red-500 bg-red-50"
                            : "border-gray-300 focus:bg-white"
                        } ${
                          state.data[field] && !state.errors[field]
                            ? "bg-green-50"
                            : ""
                        }`}
                        required
                      />
                    </label>
                    {state.errors[field] && (
                      <p className="mt-2 text-sm text-red-600">
                        {state.errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </fieldset>
            {state.status === "SUBMITTING" ? (
              <div className="text-center text-orange-600 animate-pulse">
                Processing your request...
              </div>
            ) : (
              <button
                className="w-full rounded-lg p-2.5 bg-orange-600 text-white font-semibold shadow-md 
                hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 
                focus:ring-opacity-50 active:bg-orange-800 active:ring-2 active:ring-orange-600 
                transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:scale-[1.02]"
                type="submit"
              >
                Request Design Consultation
              </button>
            )}
          </form>
        )}
      </article>
    </section>
  );
}
