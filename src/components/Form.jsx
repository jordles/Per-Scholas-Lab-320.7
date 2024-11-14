import React from 'react'
import { useState } from 'react'
function Form(props){
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when we type into form
  const handleChange = (event) => {
    // Use the event object to detect key, and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevent page from refreshing on form submission
    event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.moviesearch(formData.searchterm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input
          type="text"
          name="searchterm" // this key is dynamically added in to our state on handleChange function. [event.target.name] so instead of finding an actual name property we grab the name property based on its value. 
          onChange={handleChange} // when we change the input, we run handleChange and update our formData state. 
          value={formData.searchterm} 
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form