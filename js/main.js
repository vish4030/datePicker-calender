const checkYear = (year) => {
    if (year % 4 == 0) {
      if (
        (year % 400 == 0 && year % 100 == 0) ||
        (year % 400 != 0 && year % 100 != 0)
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  
  let years = document.querySelector("#year");
  let months = document.querySelector("#month");
  let day = document.querySelector("#day");
  
  let year_option = "",
    month_option = "";
  
  
  for (let i = 2100; i>=1; i--) {
    let temp =0;
    if (i < 10) temp = `000${i}`;
    else if (i < 100) temp = `00${i}`;
    else if (i < 1000) temp = `0${i}`;
    else temp = i;
  
    year_option += `<option> ${temp} </option>`;
  }
  
  
  for (let i = 0; i <= 12; i++) {
    let temp;
    switch (i) {
      case 0: 
        temp = "-- Select Month --";
        break;
      case 1:
        temp = "January";
        break;
      case 2:
        temp = "February";
        break;
      case 3:
        temp = "March";
        break;
      case 4:
        temp = "April";
        break;
      case 5:
        temp = "May";
        break;
      case 6:
        temp = "June";
        break;
      case 7:
        temp = "July";
        break;
      case 8:
        temp = "August";
        break;
      case 9:
        temp = "September";
        break;
      case 10:
        temp = "October";
        break;
      case 11:
        temp = "November";
        break;
      case 12:
        temp = "December";
        break;
    }
  
    month_option += `<option> ${temp} </option>`;
  }
  
  years.innerHTML = '<option>-- Select Year --</option>'+year_option;
  months.innerHTML = month_option;
  
  
  let days = 0;
  
const setDays = (month, year) =>{
  if (
    month == "January" ||
    month == "March" ||
    month == "May" ||
    month == "July" ||
    month == "August" ||
    month == "October" ||
    month == "December"
  ) {
    days = 31;
  } else if (month == "February") {
    if (checkYear(year)) days = 29;
    else days = 28;
  } else {
    days = "30";
  }
  let option = "";
  for (let i = 1; i <= days; i++) {
    option += `<option> ${i} </option>`;
  }
  
  day.innerHTML = option;
  
  }
  
  years.addEventListener("change", ()=>{setDays(months.value, years.value)})
  month.addEventListener("change", ()=>{setDays(months.value, years.value)})

  
  

  day.addEventListener("change", ()=>{
    console.log(`${month.value} ${day.value}, ${year.value}`)
    const d = new Date(`${month.value} ${day.value}, ${year.value}`);
    let dayName = d.getDay();
    switch(dayName){
        case 0: dayName="Sunday";break;
        case 1: dayName="Monday"; break;
        case 2: dayName="Tuesday";break;
        case 3: dayName="Wednesday"; break;
        case 4: dayName="Thursday";break;
        case 5: dayName="Friday"; break;
        case 6: dayName="Saturday"; break;
    }
    document.querySelector("#selected_date").innerHTML =`${dayName}, ${day.value} ${months.value}, ${years.value}` })
  
  