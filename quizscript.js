


        // Was geschieht wenn man auf den Knopf drückt

        document.getElementById("submit").onclick = function () {

            // Anzahl Fragen defienieren und fehler und Fehlerquote definieren mit einem undefiniertem Wert

            var fehler = 0;
            var anzahl_fragen = 10;
            var fehlerquote;

            // Alle Nachrichten wieder ausstellen

            document.getElementById('result1incorrect').style.display = 'none';
            document.getElementById('result1correct').style.display = 'none';
            document.getElementById('result2incorrect').style.display = 'none';
            document.getElementById('result2correct').style.display = 'none';
            document.getElementById('result3incorrect').style.display = 'none';
            document.getElementById('result3correct').style.display = 'none';
            document.getElementById('result4incorrect').style.display = 'none';
            document.getElementById('result4correct').style.display = 'none';
            document.getElementById('result5incorrect').style.display = 'none';
            document.getElementById('result5correct').style.display = 'none';
            document.getElementById('result6incorrect').style.display = 'none';
            document.getElementById('result6correct').style.display = 'none';
            document.getElementById('result7incorrect').style.display = 'none';
            document.getElementById('result7correct').style.display = 'none';
            document.getElementById('result8incorrect').style.display = 'none';
            document.getElementById('result8correct').style.display = 'none';
            document.getElementById('result9incorrect').style.display = 'none';
            document.getElementById('result9correct').style.display = 'none';
            document.getElementById('result10incorrect').style.display = 'none';
            document.getElementById('result10correct').style.display = 'none';
 


            // Überprüfen, ob die richtige Box ausgewählt ist.

            if (document.getElementById("1.3").checked) {

                document.getElementById('result1correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result1incorrect').style.display = 'block';

            }


            if (document.getElementById("2.2").checked) {

                document.getElementById('result2correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result2incorrect').style.display = 'block';

            }

            if (document.getElementById("3.1").checked) {

                document.getElementById('result3correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result3incorrect').style.display = 'block';

            }

            if (document.getElementById("4.2").checked) {

                document.getElementById('result4correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result4incorrect').style.display = 'block';

            }

            if (document.getElementById("5.1").checked) {

                document.getElementById('result5correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result5incorrect').style.display = 'block';

            }
            if (document.getElementById("6.3").checked) {

                document.getElementById('result6correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result6incorrect').style.display = 'block';

            }
            if (document.getElementById("7.1").checked) {

                document.getElementById('result7correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result7incorrect').style.display = 'block';

            }
            if (document.getElementById("8.3").checked) {

                document.getElementById('result8correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result8incorrect').style.display = 'block';

            }
            if (document.getElementById("9.2").checked) {

                document.getElementById('result9correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result9incorrect').style.display = 'block';

            }
            if (document.getElementById("10.3").checked) {

                document.getElementById('result10correct').style.display = 'block';


            } else {

                fehler += 1;
                document.getElementById('result10incorrect').style.display = 'block';

            }


            //Fehlerquote in % ausrechen
            var fehlerquote = fehler / anzahl_fragen;

            var fehlerquote = fehlerquote * 1000;

            var fehlerquote = Math.floor(fehlerquote);

            var fehlerquote = fehlerquote / 10;

            // Was passiert bei einer Fehlerquote über 50%

            if (fehlerquote > 49) {

                document.getElementById('repeat').style.display = 'inline';
                document.getElementById('submit').style.display = 'none';
                document.getElementById('ausgabe').style.backgroundColor = 'lightcoral';
                document.getElementById('ausgabe').style.color = 'red';
                document.getElementById('ausgabe').style.padding = '8px';
                document.getElementById('ausgabe').style.borderRadius = '4px';
                document.getElementById('ausgabe').style.border = 'solid 2px rgb(241, 97, 97)';
                document.getElementById("anzahlfehler").innerHTML = "Du hast " + fehler + " Fehler und eine Fehlerquote von " + fehlerquote + "%, du solltest das Quiz wiederholen! 😅";


                // Was passiert bei einer Fehlerquote von 25%

            } else if (fehlerquote > 9) {

                document.getElementById('ausgabe').style.backgroundColor = 'lightgreen';
                document.getElementById('repeat').style.display = 'inline';
                document.getElementById('submit').style.display = 'none';
                document.getElementById('ausgabe').style.color = 'green';
                document.getElementById('ausgabe').style.padding = '8px';
                document.getElementById('ausgabe').style.borderRadius = '4px';
                document.getElementById('ausgabe').style.border = 'solid 2px rgb(5, 185, 5)';
                document.getElementById('tostart').style.display = 'inline';
                document.getElementById("anzahlfehler").innerHTML = "Du hast " + fehler +
                    " Fehler und eine Fehlerquote von " + fehlerquote + "%, du kannst das Quiz jetzt wiederholen wenn du möchtst. 😉";

            } else {

                document.getElementById('ausgabe').style.backgroundColor = 'lightgreen';
                document.getElementById('submit').style.display = 'none';
                document.getElementById('ausgabe').style.color = 'green';
                document.getElementById('ausgabe').style.padding = '8px';
                document.getElementById('ausgabe').style.borderRadius = '4px';
                document.getElementById('ausgabe').style.border = 'solid 2px rgb(5, 185, 5)';
                document.getElementById('repeat').style.display = 'none';
                document.getElementById('tostart').style.display = 'inline';
                document.getElementById("anzahlfehler").innerHTML = "Du hast " + fehler + " Fehler und eine Fehlerquote von " + fehlerquote + "%, super gemacht, du kannst jetzt wieder zur Startseite zurückkehren. 😁";





            }
        }



