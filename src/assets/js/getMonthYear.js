getMonthYear()

function getMonthYear() {
  const now = new Date()
  const date = now.toLocaleDateString().split(',')[0].split('/')
  const month = date[1]
  const year = date[2]
  console.log(date);
  document.querySelector('#month_year').textContent = month + '/' + year
}