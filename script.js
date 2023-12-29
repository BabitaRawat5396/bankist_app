const openAccount = document.querySelectorAll(".openAccountBtn");
const operationsCard = document.querySelector("#allOperations");
const featuresSection = document.querySelector("#features");
const rightArrow = document.getElementById("right-arrow");
const allOperations = document.querySelectorAll(".list");
const leftArrow = document.getElementById("left-arrow");
const container = document.getElementById("container");
const bxUpload = document.querySelector(".bx-upload");
const cards = document.querySelector("#cards");
let index = 0;

function showModal() {
  // Adding Modal HTML
  const modalHtml = `
   <div id="modal" class="hidden">
      <button id="cross">&Cross;</button>
      <div id="modal-content">
        <h1> Open your bank account in just <span class="bgColorHightlight"> <span class="text">5 minutes</span> <span class="underlay"></span></span></h1>
        <form action="">
          <div>
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div>
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" />
            </div>
            <button id="new-account-btn">Next Step &rightarrow;</button>
          </form>
        </div>
      </div>
      <div id="overlay" class="hidden"></div>
  `;

  addHtml(modalHtml, container, "afterend");

  // Removing Modal
  const cross = document.getElementById("cross");
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  cross.addEventListener("click", () => {
    modal.remove();
    overlay.remove();
  });
}

function addHtml(addHtml, toAdd, where) {
  toAdd.insertAdjacentHTML(where, addHtml);
}

function showOperationContentCard(operation) {
  const selectedOperation = operations.find((op) =>
    operation.textContent.includes(op.title)
  );

  if (selectedOperation) {
    const operationHTML = `
      <div class="operations-content">
        <i class="${selectedOperation.classname}"></i>
        <div>
          <h2>${selectedOperation.heading}</h2>
          <p>${selectedOperation.body}</p>
        </div>
      </div>
    `;
    const operationContent = document.querySelector(".operations-content");
    operationContent.remove();
    addHtml(operationHTML, operationsCard, "beforeend");
  }
}

function addingTestimonial(index) {
  const testimonialHtml = `
  <div id='card'>
    <div class="sliding-card-text">
      <h3>${testimonials[index].title}</h3>
      <p>${testimonials[index].body}</p>
    </div>
    <div class="profile">
      <img src="${testimonials[index].imgUrl}" alt="${testimonials[index].imgAlt}" />
      <div>
        <h3>${testimonials[index].userName}</h3>
        <p>${testimonials[index].location}</p>
      </div>
    </div>
  </div>`;
  const slidingCard = document.querySelector("#card");
  slidingCard.remove();
  addHtml(testimonialHtml, cards, "afterend");
}

leftArrow.addEventListener("click", () => {
  index = (index + 2) % 3;
  addingTestimonial(index);
});

rightArrow.addEventListener("click", () => {
  index = (index + 1) % 3;
  addingTestimonial(index);
});

features.forEach((feature, idx) => {
  const featureHtml = `
    <div class="features-subsection">
      ${
        idx % 2 === 0
          ? ""
          : `<img src="${feature.imgSource}" alt="${feature.imgAlt}" />`
      }
      <div class="features-subsection-content">
        <i class="${feature.classname}"></i>
        <h3>${feature.title}</h3>
        <p> ${feature.body}</p>
      </div>
      ${
        idx % 2 === 0
          ? `<img src="${feature.imgSource}" alt="${feature.imgAlt}" />`
          : ""
      }
    </div>
  `;
  featuresSection.insertAdjacentHTML("beforeend", featureHtml);
});

openAccount.forEach((btn) => btn.addEventListener("click", showModal));

allOperations.forEach((operation) =>
  operation.addEventListener("click", () => showOperationContentCard(operation))
);
