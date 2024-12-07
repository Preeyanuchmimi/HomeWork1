// script.js
document.getElementById("calculateBtn").addEventListener("click", function() {
    const usage = parseFloat(document.getElementById("usage").value);
    const rate = parseFloat(document.getElementById("rate").value);
  
    if (isNaN(usage) || isNaN(rate) || usage <= 0 || rate <= 0) {
      alert("Please enter valid numbers for water usage and rate.");
      return;
    }
  
    // คำนวณค่าน้ำ
    const totalBill = usage * rate;
  
    // แสดงผลลัพธ์
    document.getElementById("totalBill").textContent = totalBill.toFixed(2);
  });
  