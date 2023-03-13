import { useState } from "react";
import { FormStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // deixa de fazer refresh a pagina toda, search/cuisine ficam na mesma
    navigate(`/searched/${input}`);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

export default Search;