function clickBoton(){
    const respuestas =[
        "SHALL",
        "SHAN'T",
        "what sort of question is that",
        "NOT EVEN GONNA AWNSER THAT ONE",
        "*wise nod*",
        "*shakes head, but in a brittish way*",
        "OUI",
        "INCONCIEVABLE",
        "42",
        "THAT IS THE SINGLE MOST STUPID QUESTION I HAVE HEARD IN ALL MY YEARS OF EXISTANCE. THY SHAN'T EVER TALK TO ME OR EVEN EXIST NEAR ME AGAIN, BE GONE",
        "what",
        "DON'T ASK ME QUESTIONS, I'M FIGHTENED OF QUESTIONS",
        "CORRECT",
        "INCORRECT",
        "HAHAHAHAHAHAHAHA no",
        "YAY",
        "NAY",
        "MAYBE",
        "WAIT TILL NEXT TUESDAY, THEN FIND OUT IF THAT WAS A GOOD QUESTION",
        "I AM SINCIERLY REALLY SORRY FOR YOU",
        "THY ART IN THE MATRIX",
        "VIOLENCE. VIOLENCE IS ALWAYS THE AWNSER.",
        "ASK THAT AGAIN, YOU SKANK.",
        "I'M SORRY, I DID NOT QUITE CATCH THAT",
        "TRY AGAIN LATER",
        "........YES?",
        "NOT EXACTLY?",
        "YOU SHOULD NOT BE ASKING SUCH QUESTIONS AT THIS AGE.",
        "JEEZ, KIDS THESE DAYS",
        "NOPE",
        "GO RIDE THE CYCLONE",
        "UHHHHHHHHHHHHHHHH",
        "AAAHHHHHHH!!!!!!"
        
    ];
    const numeroAleatorio =Math.floor(Math.random()*respuestas.length);
    document.getElementById("respuestas").textContent=respuestas[numeroAleatorio];

}