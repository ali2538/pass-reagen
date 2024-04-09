"use client";
import Label from "./Label";
import CheckBox from "./CheckBox";
import { useEffect, useState } from "react";
import Button from "./Button";
import TextBox from "./TextBox";
import NumberAdjust from "./NumberAdjust";
import Slider from "./Slider";
import { resolve } from "styled-jsx/css";
export default function Form() {
    //var minPasswordLength = 10
    const url_base = "http://127.0.0.1:8000/api/passwd/";
    const maxPasswordLength = 50;
    const minNumberOfLowercase = 1;
    const minNumberOfUppercase = 1;
    const minNumberOfLetters = 2;
    const [minPasswordLength, setMinPasswordLength] = useState(10);
    const [uppercaseSelected, setUppercaseSelected] = useState(true);
    const [lowercaseSelected, setLowercaseSelected] = useState(true);
    const [digitsSelected, setDigitsSelected] = useState(true);
    const [specialCharsSelected, setSpecialCharsSelected] = useState(false);
    const [passwordGenerated, setPasswordGenerated] = useState(false);
    const [passwordLength, setPasswordLength] = useState(10);
    const [numberOfDigits, setNumberOfDigits] = useState(1);
    const [digitsOptionChanged, setDigitsOptionChanged] = useState(false)
    const [specialCharOptionChanged, setSpecialCharOptionChanged] = useState(false)
    const [numberOfSpecialChars, setNumberOfSpecialChars] = useState(0);
    const [numberOfLetters, setNumberOfLetters] = useState(
        maxPasswordLength - numberOfDigits - numberOfSpecialChars
    );
    const [generatedPassword, setGeneratedPassword] = useState("");
    useEffect(() => {
        if (specialCharOptionChanged) {
            if (specialCharsSelected) {
                setNumberOfSpecialChars(1)
            } else if (!specialCharsSelected) {
                setNumberOfSpecialChars(0)
            }
            setSpecialCharOptionChanged(false)
        }
        if (digitsOptionChanged) {
            if (digitsSelected) {
                setNumberOfDigits(1)
            } else if (!digitsSelected) {
                setNumberOfDigits(0)
            }
            setDigitsOptionChanged(false)
        }

    })
    //var setSpecialCharSelectionToggle = () => new Promise(resolve => setSpecialCharsSelected(!specialCharsSelected))
    async function toggleOption(e) {
        switch (e.target.id) {
            case "uppercaseOption":
                if (!lowercaseSelected && !digitsSelected && !specialCharsSelected) {
                    setUppercaseSelected(!uppercaseSelected);
                    setLowercaseSelected(true);
                } else {
                    setUppercaseSelected(!uppercaseSelected);
                }
                break;
            case "lowercaseOption":
                if (!uppercaseSelected && !digitsSelected && !specialCharsSelected) {
                    setLowercaseSelected(!lowercaseSelected);
                    setUppercaseSelected(true);
                } else {
                    setLowercaseSelected(!lowercaseSelected);
                }
                break;
            case "digitsOption":
                if (
                    !uppercaseSelected &&
                    digitsSelected &&
                    !specialCharsSelected &&
                    !lowercaseSelected
                ) {
                    setDigitsSelected(!digitsSelected);
                    setLowercaseSelected(true);
                    setDigitsOptionChanged(true)
                } else {
                    setDigitsSelected(!digitsSelected);
                    setDigitsOptionChanged(true)
                }

                break;
            case "specialCharOptions":
                if (
                    !uppercaseSelected &&
                    !digitsSelected &&
                    specialCharsSelected &&
                    !lowercaseSelected
                ) {
                    setSpecialCharsSelected(!specialCharsSelected);
                    setLowercaseSelected(true);
                    setSpecialCharOptionChanged(true)
                } else {
                    setSpecialCharsSelected(!specialCharsSelected);
                    setSpecialCharOptionChanged(true)
                }
                //if (specialCharsSelected) setNumberOfSpecialChars(1)
                //setSpecialCharsSelected(!specialCharsSelected);

                console.log(`special char count ${numberOfSpecialChars}`);
                break;
            default:
                break;
        }
    }
    async function generatePassword(e) {
        e.preventDefault();
        console.log(
            `${url_base}?passw_length=${passwordLength}&uppercase=${uppercaseSelected}&lowercase=${lowercaseSelected}&min_digits=${numberOfDigits}&min_spec_chars=${numberOfSpecialChars}&digits=${digitsSelected}&spec_chars=${specialCharsSelected}`
        );
        const response = await fetch(
            `${url_base}?passw_length=${passwordLength}&uppercase=${uppercaseSelected}&lowercase=${lowercaseSelected}&min_digits=${numberOfDigits}&min_spec_chars=${numberOfSpecialChars}&digits=${digitsSelected}&spec_chars=${specialCharsSelected}`
        );
        const data = await response.json();
        console.log(data.gen_password);
        setGeneratedPassword(data.gen_password);
        setPasswordGenerated(true);
    }
    function passwordLengthChanged(e) {
        setPasswordLength(e.target.value);
    }
    function numberOfDigitsChanged(e) {
        setNumberOfDigits(e.target.value);
    }
    function numberOfSpecialCharsChanged(e) {
        setNumberOfSpecialChars(e.target.value);
    }
    function checkMe() {
        console.log("You got me");
        console.log(uppercaseSelected);
    }
    return (
        <form>
            <CheckBox
                checked={uppercaseSelected}
                id="uppercaseOption"
                onChange={toggleOption}
            />
            <Label text="A-Z" htmlFor="uppercaseOption" />
            <br />
            <br />
            <CheckBox
                checked={lowercaseSelected}
                id="lowercaseOption"
                onChange={toggleOption}
            />
            <Label text="a-z" htmlFor="lowercaseOption" />
            <br />
            <br />
            <CheckBox
                checked={digitsSelected}
                id="digitsOption"
                onChange={toggleOption}
            />
            <Label text="0-9" htmlFor="digitsOption" />
            <br />
            <br />
            <CheckBox
                checked={specialCharsSelected}
                id="specialCharOptions"
                onChange={toggleOption}
            />
            <Label text="!@#$%^&*" htmlFor="specialCharOptions" />
            <br />
            <br />
            <Button title="Generate Password" onClick={generatePassword} />
            <br />
            <Button title="Copy to Clipboard" />
            <br />
            <Button title="Clear Password" />
            <br />
            <TextBox id="generatedPassword" value={generatedPassword} />
            <br />
            <NumberAdjust
                min={minPasswordLength}
                max={maxPasswordLength}
                value={passwordLength}
                id="password-length-number"
                onChange={passwordLengthChanged}
            />
            <br />
            <Slider
                min={minPasswordLength}
                max={maxPasswordLength}
                value={passwordLength}
                id="password-length-slider"
                onChange={passwordLengthChanged}
            />
            <br />
            <NumberAdjust
                min="1"
                max={minPasswordLength - minNumberOfLetters - numberOfSpecialChars}
                disabled={digitsSelected ? "" : "disabled"}
                value={numberOfDigits}
                id="digits-count"
                onChange={numberOfDigitsChanged}
            />
            <br />
            <NumberAdjust
                min="0"
                max={minPasswordLength - minNumberOfLetters - numberOfDigits}
                disabled={specialCharsSelected ? "" : "disabled"}
                value={numberOfSpecialChars}
                id="spec-char-count"
                onChange={numberOfSpecialCharsChanged}
            />
            <br />
        </form>
    );
}
