const date = new Date();

const renderCalendar = () => {

    // date.setMonth(4)
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];


    // const month = date.getMonth();
    // console.log(month)

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    document.querySelector('.date p').innerHTML = new Date().toDateString();
    // document.querySelector('.today').innerHTML = date.getDate();

    let days = "";
    const monthDays = document.querySelector('.days')
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
    // console.log(lastDay.getDate())

    date.setDate(1)
    const firstDayIndex = date.getDay()

    // Rotate to fit Monday as starting day of week
    // TODO Allow switching first day of week
    // let rotatedFirstDayIndex = firstDayIndex - 1
    // if (rotatedFirstDayIndex <= 0) rotatedFirstDayIndex = 6
    // console.log(firstDayIndex)
    // console.log(rotatedFirstDayIndex)

    // ROtate index as a function
    function rotateIndex(originalIdx) {
        let rotIdx = originalIdx - 1
        if (rotIdx < 0) { rotIdx = 6; }
        return rotIdx;
    }

    // The previous month
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    // console.log(prevLastDay)

    for (let x = rotateIndex(firstDayIndex); x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }

    // The month in focus
    for (let i = 1; i <= lastDay.getDate(); i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class='today'>${i}</div>`;
        }
        else days += `<div>${i}</div>`;
        monthDays.innerHTML = days;
    }

    // Next month
    const lastDayIndex = lastDay.getDay();
    // console.log(rotateIndex(lastDayIndex))

    for (let y = rotateIndex(lastDayIndex), ctr = 1; y < 6; y++, ctr++) {
        days += `<div class="next-date">${ctr}</div>`
        monthDays.innerHTML = days;
    }
}



// Arrow button functionality
document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar();
    // console.log('clickity')
})

renderCalendar();