function clickBotonDie(){
    const respuestas =[
        "WOW",
        "OH MY GODS",
        "THAT IS SO COOL",
        "WOWIE",
        "HOLY BANANA",
        "WHAT IN TARTARUS!?",
        "WOWOWOWOWOW",
        "IM IMPRESSES",
        "IM WONDERED",
        "IM STUNNED",
        "OMG",
        "THAT IS THE BEST EVER",
        "WOW",
        "WOW",
        "AAAAAAHHHHHHHHHHHH",
        "*pterodactyl sounds*",
        "*intense screeching*",
        "*too wowed to speek*",
        "*faints*",
        "HOLY HADES",
        "HOLY HEPHESTUS",
        "EEEEEEEEEEEEEEEEEE"
        
    ];
    const numeroAleatorio =Math.floor(Math.random()*respuestas.length);
    document.getElementById("respuestas").textContent=respuestas[numeroAleatorio];

}