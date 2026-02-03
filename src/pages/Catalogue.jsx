import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";
import data1 from "../data/response1.json"; // IND
import data2 from "../data/response2.json"; // IMF

export default function Catalogue() {
  const navigate = useNavigate();
  const [dataset, setDataset] = useState("IND");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn) navigate("/");
  }, [navigate]);

  // Select active dataset
  const activeData = dataset === "IND" ? data1 : data2;
  const frequent = activeData.frequent || [];

  // For IND: use the structured categories object
  // For IMF: dynamically extract unique categories from frequent items
  let categories = activeData.categories || {};

  if (dataset === "IMF" && !Object.keys(categories).length) {
    // Build categories from actual data in frequent
    const uniqueCats = [...new Set(frequent.map(item => item.cat).filter(Boolean))];
    categories = uniqueCats.reduce((acc, cat) => {
      acc[cat] = {}; // empty object — can be extended later if needed
      return acc;
    }, {});
  }

  // Filter data based on selected category
  const filteredData = selectedCategory
    ? frequent.filter(item => item.cat === selectedCategory)
    : frequent;

  return (
    <div className="flex h-screen">
      <Sidebar
        categories={categories}
        onCategoryChange={setSelectedCategory}
        onChangeDataset={(newDs) => {
          setDataset(newDs);
          setSelectedCategory(null); // reset filter on dataset change
        }}
      />
      <Table data={filteredData} />
    </div>
  );
}