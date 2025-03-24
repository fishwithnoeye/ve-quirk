var submitBtn = document.getElementById('submitBtn');
var resetBtn = document.getElementById('resetBtn');
var textInput = document.getElementById('textInput').value;
// ---- char elements ----
let sova = document.getElementById('sova');
let dismas = document.getElementById('dismas');
let arcjec = document.getElementById('arcjec');
let jentha = document.getElementById('jentha');
let ellsee = document.getElementById('ellsee');
let albion = document.getElementById('albion');
let serpaz = document.getElementById('serpaz');
let laivan = document.getElementById('laivan');
let occeus = document.getElementById('occeus');
let taz = document.getElementById('taz');
let murrit = document.getElementById('murrit');
let calder = document.getElementById('calder');
// function
submitBtn.addEventListener("click", (e) => {
        sova.textContent = `(${textInput.toLowerCase()
            .replaceAll(":)", "o^o")})`
        dismas.textContent =
            textInput.replaceAll(/A|a/g, '/\\')
            .replaceAll(/V|v/g, '\\/')
            + '///';
        arcjec.textContent = `XDXD ${textInput} XDXD`;
        function jenthaText(){
                var firstLetter = textInput.charAt(0);
                var secondLetter = textInput.charAt(19);
                var thirdLetter = textInput.charAt(36);
                if (textInput.length >= 3 && textInput.length <= 12){
                    jentha.textContent = `${firstLetter} ${firstLetter} ${textInput}`;
                } else if (textInput.length >= 13 && textInput.length <= 25 && secondLetter != ' '){
                    jentha.textContent = `${firstLetter} ${firstLetter} ${textInput.replace
                        (textInput.charAt(19), ` ${secondLetter} ${secondLetter}`)} `;
                } else if (textInput.length > 25){
                    jentha.textContent = `${firstLetter} ${firstLetter} ${textInput.replace
                        (textInput.charAt(19), ` ${secondLetter} ${secondLetter}`).replace(textInput.charAt(36), ` ${thirdLetter} ${thirdLetter}`)}`;
        }};
        jenthaText();
        ellsee.textContent =
            textInput.replaceAll(/E|e/g, 'Σ')
            .replaceAll('!', '¡')
            .replaceAll('?', '¿')
            .replaceAll(':)', '=:)')
            .replaceAll(':/', '=:/')
            .replaceAll(';)', '=;)')
            .replaceAll(':D', '=:D')
            .replaceAll(';D', '=;D')
            .replaceAll('XD', '=XD')
            .replaceAll(':P', '=:P')
            .replaceAll(':o', '=:o')
            .replaceAll(':(','=:(')
            .replaceAll('>:(','=>:(')
            .replaceAll('>:)','=>:)')
            .replaceAll('>:D','=>:)')
            .replaceAll('>:P','>:P')
            .replaceAll('>:o','=>:o')
            ;
        albion.textContent =
            textInput.replaceAll(' ', '*')
            + '*';
        serpaz.textContent = 
            textInput.replaceAll(':D', '(|:D')
            .replaceAll('>:D', '(|>:D')
            .replaceAll(':)', '(|:)')
            .replaceAll(':o', '(|:o')
            .replaceAll(':/', '(|:/')
            .replaceAll(':(', '(|:(')
            .replaceAll(':P', '(|:P')
            .replaceAll('>:)', '(|>:)');
        laivan.textContent =
            textInput.replaceAll('.', '-');
        occeus.textContent =
            textInput.replaceAll('o', '.o.',)
            .replaceAll('oo', '.oo.')
            .replaceAll('I', 'Eye')
            .replaceAll(':)', 'cB}');
        taz.textContent = `~ 
        ${textInput.replaceAll(/T|t/g, '+')} ~`
        murrit.textContent = `>([${textInput.replaceAll(/H|h/g, '#')
                    .replaceAll('however', '#oweva')
                    .replaceAll('you', 'ya')
                    .replaceAll('your', 'ur')
                    .replaceAll('whats', 'wats')
                    .replaceAll('what', 'wat')
                    .replaceAll(/okay|ok/g, 'k')
                }]`;
        calder.textContent = textInput + '.';
        // ------------------------------------------- //

});
function reset(){
    textInput.value = " ";
    sova.textContent = " ";
    dismas.textContent = " ";
    arcjec.textContent = " ";
    jentha.textContent = " ";
    ellsee.textContent = " ";
    albion.textContent = " ";
    serpaz.textContent = " ";
    laivan.textContent = " ";
    occeus.textContent = " ";
    taz.textContent = " ";
    murrit.textContent = " ";
    calder.textContent = " ";
    
};