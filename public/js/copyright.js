OneDay = new Date();
OneYear = this.OneDay.getFullYear();

if (OneYear == 2025) {
    var cpr_2025 = document.getElementById("cpr");
    cpr_2025.innerHTML = "Copyright &copy; 2025 Takayuki Kamiyama. ";
} else {
    cpr_2025.innerHTML = "Copyright &copy; 2025-" + OneYear + " Takayuki Kamiyama.";
}