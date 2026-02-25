function clickBoton(){
    const respuestas =[
        "HEADS",
        "TAILS",
        "RIGHT ARMS",
        "LEFT ARMS",
        "RIGHT LEGS",
        "LEFT LEGS",
        "EYEBALLS",
        "LEFT TOENAIL",
        "FINGERS",
        "EARS",
        "THIGHS",
        "RIGHT FOOTS",
        "LEFT FOOTS",
        "PALMS",
        "THUMBS",
        "FINGERTIPS",
        "SOULS",
        "THE VOICES",
        "RINGFINGERS",
        "INDEX FINGERS",
        "EYELASHES",
        "HAIR",
        "NOSES",
        "NECKS",
    ];
    const numeroAleatorio =Math.floor(Math.random()*respuestas.length);
    document.getElementById("respuestas").textContent=respuestas[numeroAleatorio];

}