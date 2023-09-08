let teamArray = [];

let inputTeam = document.querySelector(".team-name");
let addTeamBtn = document.querySelector(".add-team-btn");
let teamTable = document.getElementById("team-table");


addTeamBtn.addEventListener("click", function () {
  if (inputTeam.value !== "") {
    teamArray.push(inputTeam.value);
    

    getTeamList();
    
    inputTeam.value = "";

  } else {
    alert("Takım ismi boş girilemez!!!");
  }
});

function deleteRow(e) {

        let removeItem = e.parentElement.previousElementSibling.previousElementSibling.textContent;

        teamArray.splice((removeItem - 1), 1);

        getTeamList();

};

function getTeamList() {
    teamTable.innerHTML = `
    <tr>
        <th>Sıra</th>
        <th>Takım Adı</th>
        <th>Seçenekler</th>
    </tr>    
    `;
    for (let i = 0; i < teamArray.length; i++) {
        teamTable.innerHTML += `
          <tr>
              <td>${i + 1}</td>
              <td>${teamArray[i]}</td>
              <td>
                <button id="delete-btn" onclick="deleteRow(this)">Takımı Sil</button>
              </td>
          </tr>`;
      }
}
