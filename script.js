const pdfList = document.getElementById("pdf-list");

// Replace 'FOLDER_ID' with the actual folder ID you obtained from the Google Drive URL
const folderId = "1gFH-9IKMm20MuIKv_1NZwh9hU2CSJ-DH";

// Use the Google Drive API to list files in the folder
fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=YOUR_GOOGLE_API_KEY`)
    .then(response => response.json())
    .then(data => {
        data.files.forEach(file => {
            if (file.mimeType === "application/pdf") {
                const listItem = document.createElement("li");
                const pdfLink = document.createElement("a");
                pdfLink.href = `https://drive.google.com/uc?export=download&id=${file.id}`;
                pdfLink.textContent = file.name;
                pdfLink.setAttribute("target", "_blank");
                listItem.appendChild(pdfLink);
                pdfList.appendChild(listItem);
            }
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });
