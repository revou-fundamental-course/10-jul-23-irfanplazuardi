document.getElementById("calculate").addEventListener("click", function() {
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        result.textContent = "Harap masukan valid data tinggi badan, usia dan berat badan";
    } else {
        var bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
        result.textContent = "Anda memiliki berat badan" + 
        " " +  bmi;
        if (bmi < 18.5) {
            result.textContent += " Kekurangan berat badan";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.textContent += " Normal (ideal)";
        } else if (bmi >= 25 && bmi <= 29.9) {
            result.textContent += " Kelebihan berat badan";
        } else { 
            result.textContent += " Kegemukan (obesitas)";
        }
    }

    reset.addEventListener("click", function(){
        resetPageState()
    })
    function resetPageState(){
        window.location.reload();
    } 
});
