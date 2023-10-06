const pdfList = document.getElementById("pdf-list");

fetch("https://api.github.com/repos/elproff/agri/contents/book.pdf")
    .then(response => response.json())
    .then(data => {
        const listItem = document.createElement("li");
        const pdfLink = document.createElement("a");
        pdfLink.href = data.download_url;
        pdfLink.textContent = "book.pdf";
        pdfLink.setAttribute("target", "_blank");
        listItem.appendChild(pdfLink);
        pdfList.appendChild(listItem);
    })
    .catch(error => {
        console.error("Error:", error);
    });
