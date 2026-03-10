function createTable(title, list, V, L) {
    let html = `<div class="section"><h3>${title}</h3>`;
    html += `<table>
        <tr>
            <th>Ω/m</th>
            <th>電力(W)</th>
            <th>W/m</th>
        </tr>`;

    list.forEach(r => {
        const R = r * L;
        const P = V * V / R;
        comst I = V / R;
        const Wm = P / L;

        let redClass = "";

        // 
        if (title === "TF" && Wm >= 35) redClass = "red";
        if (title === "GH" && Wm >= 100) redClass = "red";

        html += `
        <tr>
            <td>${r}</td>
            <td>${R.toFixed(1)}</td>
            <td>${P.toFixed(1)}</td>
            <td>${I.toFixed(1)}</td>
            <td class="${redClass}">${Wm.toFixed(1)}</td>
        </tr>`;
    });

    html += `</table></div>`;
    return html;
}
