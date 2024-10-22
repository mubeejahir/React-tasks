import React, { useState } from "react";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchema, setSelectedSchema] = useState("");
  const [addedSchemas, setAddedSchemas] = useState([]);
  const [availableSchemas, setAvailableSchemas] = useState([
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ]);

  const handleSaveSegment = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSegmentName("");
    setSelectedSchema("");
  };

  const handleAddSchema = () => {
    if (selectedSchema) {
      setAddedSchemas([...addedSchemas, { value: selectedSchema, data: "" }]);
      const updatedAvailableSchemas = availableSchemas.filter(
        (schema) => schema.value !== selectedSchema
      );
      setAvailableSchemas(updatedAvailableSchemas);
      setSelectedSchema("");
    }
  };

  const handleSchemaChange = (e) => {
    setSelectedSchema(e.target.value);
  };

  const handleSchemaValueChange = (e, index) => {
    const updatedAddedSchemas = [...addedSchemas];
    updatedAddedSchemas[index].data = e.target.value;
    setAddedSchemas(updatedAddedSchemas);
  };

  return (
    <div className="App">
      <button onClick={handleSaveSegment}>Save segment</button>
      {showPopup && (
        <div className="popup">
          <h2>Segment Details</h2>
          <label htmlFor="segmentName">Segment Name:</label>
          <input
            type="text"
            id="segmentName"
            value={segmentName}
            onChange={(e) => setSegmentName(e.target.value)}
          />
          <br />
          <label htmlFor="schemaDropdown">Add schema to segment:</label>
          <select
            id="schemaDropdown"
            value={selectedSchema}
            onChange={handleSchemaChange}
          >
            <option value="">Select Schema</option>
            {availableSchemas.map((schema) => (
              <option key={schema.value} value={schema.value}>
                {schema.label}
              </option>
            ))}
          </select>
          <button onClick={handleAddSchema}>+ Add new schema</button>
          <br />
          <button onClick={handlePopupClose}>Close</button>
          <div className="blueBox">
            {addedSchemas.map((schema, index) => (
              <div key={index}>
                <label>{schema.value}</label>
                <select
                  value={schema.data}
                  onChange={(e) => handleSchemaValueChange(e, index)}
                >
                  <option value="">Select Value</option>
                  {availableSchemas.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
