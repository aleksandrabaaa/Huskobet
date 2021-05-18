const calendarContainers = document.querySelectorAll(".app-calendar");
  console.log(calendarContainers);

  for (let calendarContainer of calendarContainers) {
    
    for(let day = 1; day <= 31; day++){
      calendarContainer.insertAdjacentHTML("beforeend",
      `<div class="day">${day}</div>`
      );
    }

  }

