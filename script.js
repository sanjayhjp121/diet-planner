const inputText = document.querySelector("#calories");
const calorieForm = document.querySelector(".app__form");
const breakFastResults = document.querySelector(".breakfast");
const lunchResults = document.querySelector(".lunch");
const dinnerResults = document.querySelector(".dinner");

const formSubmitHandler = (e) => {
  e.preventDefault();
  const calories = Number(inputText.value);

  const calorieValue =
    calories % 100 < 50
      ? Math.floor(calories / 100) * 100
      : Math.floor(calories / 100) * 100 + 50;

  const breakFastMeals = dietPlans[calorieValue].breakfast;
  const lunchMeals = dietPlans[calorieValue].lunch;
  const dinnerMeals = dietPlans[calorieValue].dinner;

  breakFastResults.innerHTML = "";
  lunchResults.innerHTML = "";
  dinnerResults.innerHTML = "";

  breakFastMeals.forEach((meal) => {
    breakFastResults.insertAdjacentHTML(
      "beforeend",
      `
        <div class="food__item">
            <img src="${meal.image}" alt="">
            <div class="food-item__info">
                <h4>${meal.name}</h4>
                <p>${meal.serving}</p>
            </div>
        </div>
        `
    );
  });

  lunchMeals.forEach((meal) => {
    lunchResults.insertAdjacentHTML(
      "beforeend",
      `
        <div class="food__item">
            <img src="${meal.image}" alt="">
            <div class="food-item__info">
                <h4>${meal.name}</h4>
                <p>${meal.serving}</p>
            </div>
        </div>
        `
    );
  });

  dinnerMeals.forEach((meal) => {
    dinnerResults.insertAdjacentHTML(
      "beforeend",
      `
        <div class="food__item">
            <img src="${meal.image}" alt="">
            <div class="food-item__info">
                <h4>${meal.name}</h4>
                <p>${meal.serving}</p>
            </div>
        </div>
        `
    );
  });
};

calorieForm.addEventListener("submit", formSubmitHandler);
