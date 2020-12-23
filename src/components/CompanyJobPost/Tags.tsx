import React, { useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "./style.scss";
const Tags = () => {
  const [tags, setTags] = useState([""]);
  return <ReactTagInput tags={tags} onChange={(newTags) => setTags(newTags)} />;
};

export default Tags;
