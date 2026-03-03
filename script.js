// TF
let tfClass = "";
if (tf !== undefined) {
    const R = tf * L;
    const P = V * V / R;
    const Wm = P / L;

    tfPower = P.toFixed(1);
    tfWm = Wm.toFixed(1);

    if (Wm >= 35) tfClass = "red"; // ← TF条件
}

// GH
let ghClass = "";
if (gh !== undefined) {
    const R = gh * L;
    const P = V * V / R;
    const Wm = P / L;

    ghPower = P.toFixed(1);
    ghWm = Wm.toFixed(1);

    if (Wm >= 100) ghClass = "red"; // ← GH条件
}
