// CityInputCell.tsx
import React, { useState, useRef } from "react";

interface CityInputCellProps {
  initialValue?: string;
  onChange?: (value: string) => void;
  apiKey: string;
}

interface Suggestion {
  place_id: string;
  description: string;
}

const CityInputCell: React.FC<CityInputCellProps> = ({
  initialValue = "",
  onChange,
  apiKey,
}) => {
  const [city, setCity] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const debounceRef = useRef<number | null>(null); // <-- browser-friendly

  const fetchLocations = async (input: string) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
          input,
        )}&types=(cities)&key=${apiKey}`,
      );
      const data = await response.json();
      if (data.status === "OK") {
        setSuggestions(data.predictions);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Google Places error:", err);
      setSuggestions([]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    if (onChange) onChange(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      fetchLocations(value);
    }, 300);
  };

  const handleSelect = (suggestion: Suggestion) => {
    setCity(suggestion.description);
    setSuggestions([]);
    if (onChange) onChange(suggestion.description);
  };

  //   const handleClear = () => {
  //     setCity("");
  //     setSuggestions([]);
  //     if (onChange) onChange("");
  //   };

  return (
    <div className="flex flex-col gap-1 px-3 truncate relative">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter city"
          className="w-full text-sm px-2 py-1 border-0 border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-transparent"
          value={city}
          onChange={handleChange}
        />
        {/* {city && (
          <button
            type="button"
            onClick={handleClear}
            className="text-gray-500 hover:text-gray-800 px-2"
          >
            ✕
          </button>
        )} */}
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md max-h-60 overflow-y-auto mt-1">
          {suggestions.map((sug) => (
            <li
              key={sug.place_id}
              className="px-2 py-1 hover:bg-blue-100 cursor-pointer text-sm"
              onClick={() => handleSelect(sug)}
            >
              {sug.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityInputCell;
