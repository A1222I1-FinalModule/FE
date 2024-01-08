getDate()

function getDate() {
  const now = new Date()
  if (document.getElementById('input_date')) {
    document.querySelector('#input_date').textContent = now.toLocaleString().split(',')[0]
  } else if (document.getElementById('day_month_year')) {
    document.querySelector('#day_month_year').textContent = now.toLocaleString().split(',')[0]
  }
}
