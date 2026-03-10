function createTable(title, list, V, L) {

let html = `<div class="section"><h3>${title}</h3>`;

html += `<table>
<tr>
<th>Ω/m</th>
<th>抵抗値Ω</th>
<th>電力(W)</th>
<th>電流(A)</th>
<th>W/m</th>
</tr>`;

list.forEach(r => {

const R = r * L;
const P = V * V / R;
const I = V / R;
const Wm = P / L;

let redClass = "";

if (title === "TF") {
if (Wm >= 50) redClass = "red";
}

if (title === "GH") {
if (Wm >= 100) redClass = "red";
}

html += `
<tr>
<td>${r}</td>
<td>${R.toFixed(1)}</td>
<td>${P.toFixed(1)}</td>
<td>${I.toFixed(2)}</td>
<td class="${redClass}">${Wm.toFixed(1)}</td>
</tr>
`;

});

html += `</table></div>`;
return html;

}
