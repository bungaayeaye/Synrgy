const url = "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const time       = document.getElementById("pickup");
const passenger  = document.getElementById("numofpassenger");
const search     = document.getElementById("btnSearch");
const cars       = document.getElementById("cars-container");
const Date       = document.getElementById("date");


let click = false
let data  = localStorage.getItem("CAR");
data      = JSON.parse(data);

    function hasil(parameter) {
        for (const x of parameter) {
          const div = document.createElement("div");
          div.classList.add("carContainer");
          div.classList.add("align-items-stretch");
          div.innerHTML = `
          <div class="card p-3">
              <img src="${x.image}" alt="" class="w-100 h-100" style="max-height: 160px">
            <div>
               <p class="fw-bold mt-1">${x.manufacture}/${x.model}</p>
            </div>
            <div>
              <h5 class="fw-bolder">Rp. ${x.rentPerDay} / hari</h5>
            </div>
             <div>
          <p>
          ${
            x.description != ""
              ? x.description
              : "  Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          </p>
        </div>
            <div>
              <span><i class="bi bi-people me-3"></i>${x.capacity} Orang</span>
           </div>
           <div>
              <span><i class="bi bi-gear me-3"></i>${x.transmission}</span>
          </div>
          <div>
             <span><i class="bi bi-calendar me-3"></i>Tahun ${x.year}</span>
          </div>
             <button class="btn btn-success"> Pilih Mobil</button>
         </div>`;
    cars.append(div);
  }
}

function hapus() {
  cars.innerHTML = "";
}

function mulai() {
  click      = true
  let newArr = [];
  if (
    Date.value !== "" &&
    time.value !== "" &&
    passenger.value !== ""
  ) {
    let DateTime = Date.parse(
      iDate.value + "T" + time.value + "Z"
    );
    newArr = data.filter((x) => Date.parse(x.available) >= DateTime);
    newArr = newArr.filter((x) => x.capacity >= passenger.value);
    hapus();
    tampilMobil(newArr);
  }
  if (
    Date.value !== "" &&
    time.value !== "" &&
    passenger.value === ""
  ) {
    let DateTime = Date.parse(
      Date.value + "T" + time.value + "Z"
    );
    newArr = [];
    newArr = data.filter((x) => Date.parse(x.available) >= DateTime);
    hapus();
    tampilMobil(newArr);
  }
  if (
    Date.value === "" &&
    time.value === "" &&
    passenger.value !== ""
  ) {
    newArr = [];
    newArr = data.filter((x) => x.capacity >= passenger.value);
    hapus();
    tampilMobil(newArr);
  }
}

if (click) hasil(data);
search.addEventListener("click", mulai);
