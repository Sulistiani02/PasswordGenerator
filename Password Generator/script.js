document.addEventListener("DOMContentLoaded", function() {
    const inputSlider = document.getElementById("inputSlider");
    const sliderValue = document.getElementById("sliderValue");
    const passBox = document.getElementById("passBox");
    const lowercaseE1 = document.getElementById("lowercase");
    const uppercaseE1 = document.getElementById("uppercase");
    const numberE1 = document.getElementById("numbers");
    const symbolE1 = document.getElementById("symbols");
    const generateBtn = document.getElementById("getBtn");
    const copyIcon = document.getElementById("copyIcon");
    const strength = document.getElementById("strength");
    const message = document.getElementById("message");

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_-+=/{}[];:?/<>';

    sliderValue.textContent = inputSlider.value;
    inputSlider.addEventListener("input", () => {
        sliderValue.textContent = inputSlider.value;
    });

    generateBtn.addEventListener("click", () => {
        passBox.value = generatePassword();
        updateStrength(passBox.value.length);
    });

    function generatePassword() {
        const length = inputSlider.value;
        let characters = "";
        let password = "";

        if (lowercaseE1.checked) characters += lowercaseLetters;
        if (uppercaseE1.checked) characters += uppercaseLetters;
        if (numberE1.checked) characters += numbers;
        if (symbolE1.checked) characters += symbols;

        if (characters.length === 0) {
            return "";
        }

        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        return password;
    }

    copyIcon.addEventListener("click", () => {
        if (passBox.value !== "" && passBox.value.length >= 10) {
            navigator.clipboard.writeText(passBox.value);
            copyIcon.innerText = "check";

            setTimeout(() => {
                copyIcon.innerHTML = "content_copy";
            }, 3000);
        }
    });

    function updateStrength(passwordLength) {
        let strengthValue = '';

        if (passwordLength === 0) {
            strengthValue = '';
        } else if (passwordLength < 10) {
            strengthValue = 'Weak';
        } else if (passwordLength < 15) {
            strengthValue = 'Medium';
        } else {
            strengthValue = 'Strong';
        }

        strength.textContent = strengthValue;
        message.style.display = "block"; //display message
    }
});