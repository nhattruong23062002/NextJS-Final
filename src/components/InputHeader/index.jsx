import { useState } from "react";
import Link from "next/link";

const InputHeader = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Tìm kiếm sản phẩm..."
      />
      <Link className="search-button"  href={`/productsSearch?searchTerm=${encodeURIComponent(searchTerm)}`}>Search</Link>
    </div>
  );
};
export default InputHeader;
