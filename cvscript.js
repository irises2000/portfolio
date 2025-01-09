// Google Spreadsheet CSV URL
const csvUrl =
  "https://docs.google.com/spreadsheets/d/1J07q2MC4FQesoYljQqI7KCLzry3Wbr0HXHtSoAWn46A/gviz/tq?tqx=out:csv";

// Load and parse CSV data
function loadData() {
  Papa.parse(csvUrl, {
    download: true,
    header: true,
    complete: function (result) {
      console.log("CSV Data loaded:", result.data);

      const educationSection = document.getElementById("education-section");
      const experienceSection = document.getElementById("experience-section");

      educationSection.innerHTML = ""; // Reset education section
      experienceSection.innerHTML = ""; // Reset experience section

      result.data.forEach((row) => {
        // Education Data
        const education = row["Education"] || "";
        const edYear = row["Ed_Year"] || "";
        const educationE = row["Education_e"] || "";

        if (education && edYear) {
          const educationItem = document.createElement("div");
          educationItem.classList.add("item");
          educationItem.innerHTML = `
                        <div class="year">${edYear}</div>
                        <div class="description">
                            <div>${education}</div>
                            <div class="sub-text">${educationE}</div>
                        </div>
                    `;
          educationSection.appendChild(educationItem);
        }

        // Experience Data
        const experience = row["Experience"] || "";
        const exYear = row["Ex_Year"] || "";
        const experienceE = row["Experience_e"] || "";

        if (experience && exYear) {
          const experienceItem = document.createElement("div");
          experienceItem.classList.add("item");
          experienceItem.innerHTML = `
                        <div class="year">${exYear}</div>
                        <div class="description">
                            <div>${experience}</div>
                            <div class="sub-text">${experienceE}</div>
                        </div>
                    `;
          experienceSection.appendChild(experienceItem);
        }
      });
    },
    error: function (error) {
      console.error("CSV Parsing Error:", error);
    },
  });
}

// Load data on page load
window.onload = loadData;
