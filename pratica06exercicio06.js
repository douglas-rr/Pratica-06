function converter () {
    var conversao, temp = document.getElementById ("temperatura").value;

    conversao = ((5/9) * (temp - 32));

    document.getElementById ("resposta").innerHTML += conversao.toFixed (2) + "°C </br></br>";
}