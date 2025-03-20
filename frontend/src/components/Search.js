import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
    const [keyword, setKeyword] = useState(""); // Initialize as an empty string
    const navigate = useNavigate();

    // Debugging: Log keyword changes
    useEffect(() => {
        console.log("Search keyword updated:", keyword);
    }, [keyword]);

    // Handle search when the user clicks the search button or presses Enter
    const searchHandler = () => {
        const trimmedKeyword = keyword.trim();
        if (trimmedKeyword) {
            navigate(`/search?keyword=${encodeURIComponent(trimmedKeyword)}`);
        } else {
            navigate('/'); // Navigate to home if keyword is empty
        }
    };

    // Handle Enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission if inside a form
            searchHandler();
        }
    };

    return (
        <div className="input-group">
            <input
                type="text"
                id="search_field"
                value={keyword || ""} // Ensure value is always a string
                onChange={(e) => setKeyword(e.target.value || "")} // Ensure state is always a string
                className="form-control"
                onKeyDown={handleKeyDown} // Use onKeyDown instead of onKeyPress
                placeholder="Enter Product Name ..."
            />
            <div className="input-group-append">
                <button onClick={searchHandler} id="search_btn" className="btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
}
