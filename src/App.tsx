import React from "react";
import "./scss/main.scss";
import CompanyProfile from "./components/companyProfile";
import CompanyMatchPage from "./components/companyMatchPage";
import CompanyJobPost from "./components/CompanyJobPost";
import DateSelector from "./components/CompanyJobPost/DatePicker";
import Tags from "./components/CompanyJobPost/Tags";

const App = () => (
  <>
    {/* <CompanyProfile /> */}
    {/* <CompanyMatchPage /> */}
    {/* <CompanyJobPost /> */}
    <DateSelector />
    <Tags />
  </>
);

export default App;
