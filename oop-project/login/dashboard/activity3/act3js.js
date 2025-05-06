let isExampleShown = false;

function showExample() {
  const a = 6;
  const b = 3;
  const btn = document.querySelector("button");
  const outputDiv = document.getElementById("example-output");

  if (!isExampleShown) {
    const output = `
      <div class="example-container">
        <h2>Example:</h2>
        <p><strong>Given: a = 6 (0110), b = 3 (0011)</strong></p>
        <ul style="text-align: left; display: inline-block;">
          <li>a & b = ${a & b} → 0110 & 0011 = 0010</li>
          <li>a | b = ${a | b} → 0110 | 0011 = 0111</li>
          <li>a ^ b = ${a ^ b} → 0110 ^ 0011 = 0101</li>
          <li>~a = ${~a} → NOT 0110 = ${~a}</li>
          <li>a << 1 = ${a << 1} → 0110 << 1 = 1100</li>
          <li>a >> 1 = ${a >> 1} → 0110 >> 1 = 0011</li>
        </ul>
      </div>
    `;
    outputDiv.innerHTML = output;
    btn.textContent = "Hide Example";
  } else {
    outputDiv.innerHTML = "";
    btn.textContent = "Show Example";
  }

  isExampleShown = !isExampleShown;
}
