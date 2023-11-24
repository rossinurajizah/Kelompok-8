// Mendefinisikan fungsi untuk menghitung titik puncak
function hitungTitikPuncak() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const xp = -b / (2 * a);
    const yp = a * xp * xp + b * xp + c;

    alert(`Titik puncak adalah (${xp}, ${yp})`);
}

// Mendefinisikan fungsi untuk menghitung himpunan penyelesaian
function hitungHimpunanPenyelesaian() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    const x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

    alert(`Himpunan penyelesaian adalah x1 = ${x1}, x2 = ${x2}`);
}

// Mendefinisikan fungsi untuk menentukan tindakan saat tombol "Hitung" diklik
function hitung() {
    const choice = document.getElementById("choice").value;

    if (choice === "titikPuncak") {
        hitungTitikPuncak();
    } else if (choice === "himpunanPenyelesaian") {
        hitungHimpunanPenyelesaian();
    }
}
