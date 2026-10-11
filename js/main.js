document.addEventListener("DOMContentLoaded", () => {
    fetch("menu.html")
      .then((res) => {
        if (!res.ok) throw new Error("โหลด menu.html ไม่สำเร็จ");
        return res.text();
      })
      .then((html) => {
        document.getElementById("menu").innerHTML = html;
        setActiveMenu();
      })
      .catch((err) => console.error(err));
  
    setupRegisterForm();
    loadFooter();
    setupRegisterForm();
  });
const FOOTER = {
    year: new Date().getFullYear(),
    studentId: "69700746",
    studentName: "วรยุทธ บอนบุตร",
    links: [],
  };
  
  function loadFooter() {
    const box = document.getElementById("footer");
    if (!box) return;
  
    const linksHtml = FOOTER.links
      .map((l) => `<a href="${l.href}" class="link-secondary text-decoration-none mx-2">${l.text}</a>`)
      .join("");
  
    box.innerHTML = `
      <footer class="bg-body-tertiary text-center py-3 small">
        <div class="mb-1">${linksHtml}</div>
        <div>&copy; ${FOOTER.year} OnlineCourses. All rights reserved.
          by ${FOOTER.studentId} ${FOOTER.studentName}</div>
      </footer>`;
  }
  
  function setActiveMenu() {
    let page = location.pathname.split("/").pop();
    if (page === "" || page.toLowerCase() === "index.html") page = "Home.html";
    document.querySelectorAll("#menu .nav-link").forEach((link) => {
      if (link.getAttribute("href").toLowerCase() === page.toLowerCase()) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  }
  function setupRegisterForm() {
    const form = document.getElementById("registerForm");
    if (!form) return;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }
      const name = document.getElementById("fullName").value.trim();
      const course = document.getElementById("course").value;
      const msg = document.getElementById("successMsg");
      msg.textContent = `ลงทะเบียนสำเร็จ! คุณ ${name} ได้ลงทะเบียนเรียน ${course} แล้ว`;
      msg.classList.remove("d-none");
  
      form.reset();
      form.classList.remove("was-validated");
    });
  }


