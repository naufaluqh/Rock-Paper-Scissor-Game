function getValueComputer() {
  const computer = Math.random();

  if (computer < 0.33) return "rock";
  if (computer >= 0.33 && computer <= 0.66) return "paper";
  return "scissor";
}

function getResult(player, computer) {
  if (player == computer) return "Draw";
  if (player == "rock") return computer == "scissor" ? "Win" : "Lose";
  if (player == "paper") return computer == "scissor" ? "Lose" : "Win";
  if (player == "scissor") return computer == "rock" ? "Lose" : "Win";
}

const chooses = document.querySelectorAll("li img");

chooses.forEach((choose) => {
  choose.addEventListener("click", () => {
    const info = document.querySelector(".info");
    const getImage = document.querySelector(".img-computer");
    let getPlayer = choose.className;
    let options = ["rock.jpg", "paper.jpg", "scissor.jpg"];
    let spinIndex = 0;
    const spinInterval = setInterval(() => {
      getImage.setAttribute("src", "img/" + options[spinIndex]);
      spinIndex = (spinIndex + 1) % options.length;
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);

      let getComputer = getValueComputer();
      let result = getResult(getPlayer, getComputer);

      info.textContent = result;
      getImage.setAttribute("src", "img/" + getComputer + ".jpg");
    }, 2000);
  });
});
