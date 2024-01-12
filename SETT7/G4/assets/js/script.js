function fetchImages(url) {
    fetch(url, {
      headers: {
        Authorization: vXvmaZ1sj2jfW3z8FdYvEMu38xu7TACFfiOTt0UkuDlydAcJGqSExXEK
      }
    })
    .then(response => response.json())
    .then(data => displayImages(data.photos))
    .catch(error => console.error("Error fetching images:", error));
  }

  function loadImages() {
    const query = document.getElementById("search").value;
    fetchImages(`https://api.pexels.com/v1/search?query=[your-query]`);
  }

  function loadSecondaryImages() {
    const secondaryQuery = "[your-secondary-query]";
    fetchImages(`https://api.pexels.com/v1/search?query=[your-secondary-query]`);
  }