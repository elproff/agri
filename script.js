const pdfList = document.getElementById("pdf-list");

// Replace 'USERNAME' with your GitHub username and 'REPOSITORY' with your repository name
fetch("https://api.github.com/repos/USERNAME/REPOSITORY/contents/")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            if (item.name.endsWith(".pdf")) {
                const listItem = document.createElement("li");
                const pdfLink = document.createElement("a");
                pdfLink.href = item.download_url;
                pdfLink.textContent = item.name;
                pdfLink.setAttribute("target", "_blank");
                listItem.appendChild(pdfLink);
                pdfList.appendChild(listItem);
            }
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });
