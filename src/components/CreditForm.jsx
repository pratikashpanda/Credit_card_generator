import React from "react";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import "../styles/CreditForm.css";

const CreditForm = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const validationSchema = Yup.object().shape({
    cardHolderName: Yup.string().required("Card holder name is required"),
    cardNumber: Yup.string()
      .matches(/^[0-9]+$/, "Card number must only contain numbers")
      .length(16, "Card number must be 16 digits")
      .required("Card number is required"),
    expiryMonth: Yup.string()
      .matches(/^[0-9]+$/, "Expiry month must be a number")
      .required("Expiry month is required"),
    expiryYear: Yup.string()
      .matches(/^[0-9]+$/, "Expiry year must be a number")
      .required("Expiry year is required")
      .min(
        currentYear.toString(),
        "Expiry year must be greater or equal to the current year"
      ),
    cvc: Yup.string()
      .matches(/^[0-9]+$/, "CVC must be numeric")
      .length(3, "CVC must be 3 digits")
      .required("CVC is required"),
  });

  const initialValues = {
    cardHolderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="cardHolderName">Card Holder Name</label>
        <input
          type="text"
          id="cardHolderName"
          name="cardHolderName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardHolderName}
        />
        {formik.touched.cardHolderName && formik.errors.cardHolderName && (
          <div>{formik.errors.cardHolderName}</div>
        )}
      </div>

      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cardNumber}
        />
        {formik.touched.cardNumber && formik.errors.cardNumber && (
          <div>{formik.errors.cardNumber}</div>
        )}
      </div>

      <div className="labels">
        <label htmlFor="cardNumber">EXP. DATE (MM/YY)</label>
        <label htmlFor="cardNumber">CVC</label>
      </div>
      <div className="cvc-box">
        <div className="expiry">
          {/* <label htmlFor="cardNumber">MM/YY</label> */}
          <div className="expMon">
            <input
              type="text"
              id="expiryMonth"
              name="expiryMonth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.expiryMonth}
            />
            {formik.touched.expiryMonth && formik.errors.expiryMonth && (
              <div>{formik.errors.expiryMonth}</div>
            )}
          </div>
          <div className="expYear">
            <input
              type="text"
              id="expiryYear"
              name="expiryYear"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.expiryYear}
            />
            {formik.touched.expiryYear && formik.errors.expiryYear && (
              <div>{formik.errors.expiryYear}</div>
            )}
          </div>
        </div>

        <div>
          {/* <label htmlFor="cardNumber">CVC</label> */}
          <input
            type="text"
            id="cvc"
            name="cvc"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cvc}
          />
          {formik.touched.cvc && formik.errors.cvc && (
            <div>{formik.errors.cvc}</div>
          )}
        </div>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
};

export default CreditForm;
