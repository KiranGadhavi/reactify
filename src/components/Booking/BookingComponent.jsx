"use client";
import { useReducer } from "react";

// create initialState (object with data and errorStatus keys)
const initialState = {
  data: {
    fullName: "",
    postcode: "",
    house: "",
    city: "",
    phoneNumber: "",
    emailAddress: "",
  },
  errors: {},
  status: "Editing",
  formDesign: {
    inputClasses:
      "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    labelClasses: "block text-sm font-medium text-gray-700 mb-1",
    errorClasses: "mt-1 text-sm text-red-600",
  },
};

// Reducer function which has data and action, and different cases of action.type
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FORM_DATA":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.name]: action.payload.value,
        },
        errors: {
          ...state.errors,
          [action.payload.name]: "",
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.field]: action.payload.message,
        },
      };
    case "Submit_Started":
      return { ...state, Status: "Submitting" };
    case "Error":
      return { ...state, Status: "Error" };
    case "Form_Success":
      return { ...state, Status: "Success" };
    case "Form_Full":
      return { ...state, Status: "Editing" };
    default:
      return state;
  }
}

export default function BookingComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateField = (name, value) => {
    switch (name) {
      case "fullName":
        return value.trim() ? "" : "Full name is required";
      case "postcode":
        return /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(value)
          ? ""
          : "Invalid postcode format";
      case "house":
        return value.trim()
          ? ""
          : "House/Flat number and street name is required";
      case "city":
        return value.trim() ? "" : "City is required";
      case "phoneNumber":
        return /^(\+44|0)\d{10}$/.test(value) ? "" : "Invalid UK phone number";
      case "emailAddress":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address";
      default:
        return "";
    }
  };

  const handleChangeEvent = (event) => {
    const { name, value } = event.target;
    dispatch({
      type: "CHANGE_FORM_DATA",
      payload: { name, value },
    });

    const error = validateField(name, value);
    if (error) {
      dispatch({
        type: "SET_ERROR",
        payload: { field: name, message: error },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "Submit_Started" });

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
          payload: { field, message: errors[field] },
        });
      });
      dispatch({ type: "Error" });
      return;
    }

    // Simulating API call
    setTimeout(() => {
      dispatch({ type: "Form_Success" });
    }, 2000);
  };

  return (
    <section className="max-w-2xl mx-auto p-6">
      <article>
        {state.Status === "Success" ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
            Thank you for your booking
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Design Booking</h1>
            </div>
            <fieldset className="border p-4 rounded">
              <legend className="font-semibold">Personal Information:</legend>
              <div className="space-y-4">
                {["fullName", "postcode", "house", "city"].map((field) => (
                  <div key={field}>
                    <label className="block">
                      {field === "house"
                        ? "House/Flat Number and Street Name:"
                        : `${field.charAt(0).toUpperCase() + field.slice(1)}:`}
                      <input
                        type="text"
                        name={field}
                        value={state.data[field]}
                        onChange={handleChangeEvent}
                        placeholder={`Enter your ${
                          field === "house"
                            ? "House/Flat Number and Street Name"
                            : field
                        }`}
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm 
                          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                          transition duration-200 ease-in-out
                          ${
                            state.errors[field]
                              ? "border-red-500 bg-red-50"
                              : "border-gray-300 focus:bg-white"
                          }
                          ${
                            state.data[field] && !state.errors[field]
                              ? "bg-green-50"
                              : ""
                          }
                        `}
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

            <fieldset className="border p-4 rounded">
              <legend className="font-semibold">Contact Information:</legend>
              <div className="space-y-4">
                {["phoneNumber", "emailAddress"].map((field) => (
                  <div key={field}>
                    <label className="block">
                      {field === "phoneNumber"
                        ? "Phone Number:"
                        : "Email Address:"}
                      <input
                        type={field === "emailAddress" ? "email" : "tel"}
                        name={field}
                        value={state.data[field]}
                        onChange={handleChangeEvent}
                        className={`mt-1 block w-full rounded-md border-2 shadow-sm 
                          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                          transition duration-200 ease-in-out
                          ${
                            state.errors[field]
                              ? "border-red-500 bg-red-50"
                              : "border-gray-300 focus:bg-white"
                          }
                          ${
                            state.data[field] && !state.errors[field]
                              ? "bg-green-50"
                              : ""
                          }
                        `}
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
            {state.Status === "Submitting" ? (
              <div className="text-center text-blue-600">Submitting...</div>
            ) : (
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
