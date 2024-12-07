// script.js
document.getElementById("calculateBtn").addEventListener("click", function() {
    const baseSalary = parseFloat(document.getElementById("baseSalary").value);
    const taxRate = parseFloat(document.getElementById("taxRate").value);
  
    if (isNaN(baseSalary) || isNaN(taxRate) || baseSalary <= 0 || taxRate < 0) {
      alert("Please enter valid numbers for salary and tax rate.");
      return;
    }
  
    // คำนวณภาษีและเงินเดือนสุทธิ
    const taxAmount = (baseSalary * taxRate) / 100;
    const netSalary = baseSalary - taxAmount;
  
    // แสดงผลลัพธ์
    document.getElementById("netSalary").textContent = netSalary.toFixed(2);
  });
  