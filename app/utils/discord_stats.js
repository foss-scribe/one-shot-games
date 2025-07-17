export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // throw new Error(`HTTP error! status: ${response.status}`);
      console.log(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return {
        approximate_member_count: data.approximate_member_count,
        approximate_presence_count: data.approximate_presence_count
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to allow calling code to handle it
  }
};