import React from "react";
import { Input } from "../QueryInput/styles.js";

const DatePicker = ({ onChange }) => {
  return <Input type={"date"} onChange={onChange} />;
};

export default DatePicker;
