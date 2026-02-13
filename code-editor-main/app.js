function displayResult() {
  let codeHTML = document.getElementById("html").value;
  let codeCSS  = document.getElementById("css").value;
  let codeJS   = document.getElementById("js").value;

  let resultEl = document.getElementById("result");

  // ใส่ HTML + CSS เข้าไปใน iframe
  resultEl.contentDocument.body.innerHTML =
    `${codeHTML}<style>${codeCSS}</style>`;

  // สั่งให้ JS ทำงานใน iframe
  resultEl.contentWindow.eval(codeJS);
}
