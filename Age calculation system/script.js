// script.js
document.getElementById("calculateBtn").addEventListener("click", function() {
    const dob = document.getElementById("dob").value;
    if (!dob) {
      alert("Please enter a valid date of birth.");
      return;
    }
  
    const birthDate = new Date(dob);
    const today = new Date();
  
    // คำนวณอายุ
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
  
    // ตรวจสอบถ้าเดือนเกิดยังไม่ถึงปีนี้
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    // แสดงผลลัพธ์
    document.getElementById("age").textContent = age;
  });
  