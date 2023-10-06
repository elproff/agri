const pdfList = document.getElementById("pdf-list");

// Replace 'GOOGLE_DRIVE_FOLDER_LINK' with the shareable link of your specific folder on Google Drive
const googleDriveFolderLink = "https://drive.google.com/drive/folders/1gFH-9IKMm20MuIKv_1NZwh9hU2CSJ-DH?usp=sharing";

// Use the Google Drive API to list files in the folder
fetch(`https://www.googleapis.com/drive/v3/files?q='${googleDriveFolderLink}' in parents&key=YOUR_GOOGLE_API_KEY`)
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
