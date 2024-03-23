import { useState } from "react";
import './Search.scss'
const Search = () =>{
    const[value,setValue] = useState("Đây là danh sách các người dùng đang hoạt động!!!");
    const[searchValue,setSearchValue] = useState("");

    const handleReplaceClick = () => {
        setValue(searchValue);
        setSearchValue("");
      };
    
      const handleInputChange = (event) => {
        setSearchValue(event.target.value);
      };

    return (
        <div className="search">
            <h1>{value}</h1>
            <div className="container">
                <input type="text" placeholder="Thay thế dòng tiêu đề trên..." onChange={handleInputChange} value={searchValue}></input>
                <button onClick={handleReplaceClick}>Thay thế</button>
            </div>
        </div>
    )
}

export default Search;