//require('dotenv').config();

// Print out value of API key stored in .env file
//console.log(process.env.API_KEY)


const API_KEY = "56pgof12jBtbTXGp0PdAzKGgchCVa5av"; 
async function getImage(query) {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=56pgof12jBtbTXGp0PdAzKGgchCVa5av&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.data.map(gif => gif.images.original.url); // Return an array of image URLs
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return [];
  }
}

function displayGifs(gifUrls) {
  const container = document.getElementById("gifResults");
  container.innerHTML = gifUrls
    .map(url => `<img src="${url}" alt="GIF" />`)
    .join("");
}

document.getElementById("gifForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const gifs = await getImage(query);
  displayGifs(gifs);
});

