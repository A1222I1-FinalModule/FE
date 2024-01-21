// Sample data for the chart
const data = [3000000, 3500000];
const labels = ['05', '06'];
const unit = 'Ngày'

const canvas = document.getElementById('revenue_canvas');
const ctx = canvas.getContext('2d');

const chartWidth = canvas.width - 40;
const chartHeight = canvas.height - 40;
const columnWidth = chartWidth / data.length;
const columnGap = 10;
const maxValue = Math.max(...data);

// Function to draw the column chart
function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'blue';

  for (let i = 0; i < data.length; i++) {
    const columnHeight = (data[i] / maxValue) * chartHeight;

    const x = i * (columnWidth + columnGap) + 20;
    const y = chartHeight - columnHeight + 10;

    ctx.fillRect(x, y, columnWidth, columnHeight);

    // Drawing labels
    ctx.fillStyle = 'black';
    ctx.fillText(labels[i], x + (columnWidth / 2) - 5, chartHeight + 25);

    // Drawing values
    ctx.fillText(data[i], x + (columnWidth / 2) - 5, y - 5);

    // Drawing unit label
    ctx.fillStyle = 'black';
    ctx.fillText(unit, 10, canvas.height - 10);
  }
}

drawChart(); // Call the function to draw the chart