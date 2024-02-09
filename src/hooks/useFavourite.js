import axios from 'axios';
import { useEffect, useState } from 'react';
import useToast from './useToast';
  
 
const useFavourite = (item, user) => {
  const { displayToast } = useToast();
  const [existing, setExisting] = useState();  
  const [favourite, setFavourite] = useState({}); 
  const [status, setStatus] = useState(false);  

  // Fetch data when component mounts or when dependencies change
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if user is logged in
        if (user) { 
          const response = await axios.get(`http://localhost:6060/api/v1/tools/featured/${item._id}/${user.email}`);
          const result = response.data;
          setExisting(result.exist); // Update existing favorites
          setFavourite(result.favour); // Update favorite item details
           
          if (response.status !== 200) {
            console.error(`Failed to fetch data. Status: ${response.status}`);
          }
        }
      } catch (error) { 
        console.error('Error fetching data:', error.message);
      }
    };
     
    fetchData();
  }, [item, user, status]); // Depend on item, user, and status

  // Function to handle adding a feature to an item
  const handelOnAddFeature = (id) => {
    // Check if user is logged in
    if (!user) { 
      displayToast({ status: 'error', message: 'Please log in to your account!' });
      return;
    }
 
    axios.put(`http://localhost:6060/api/v1/tools/featured/${id}/${user?.email}`)
      .then(res => {
        // Toggle status to trigger data refetch
        setStatus(prevStatus => !prevStatus); 
        setExisting(result.exist); 
      })
      .catch(error => { 
        console.error('Error:', error.message); 
      });
  };
  // Return existing favorites, favorite item details, and the function to handle adding a feature
  return { existing, favourite, handelOnAddFeature };
};

export default useFavourite;


