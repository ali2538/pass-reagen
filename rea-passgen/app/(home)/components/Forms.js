"use client"
import Label from "./Label";
import CheckBox from "./CheckBox";
import { useState } from "react";
export default function Form() {
    const [uppercaseSelected, setUppercaseSelected] = useState(true)
    const [lowercaseSelected, setLowercaseSelected] = useState(true)
    const [digitsSelected, setDigitsSelected] = useState(true)
    const [specialCharsSelected, setSpecialCharsSelected] = useState(false)
    function toggleOption(e) {
        switch (e.target.id) {
            case "uppercaseOption":
                setUppercaseSelected(!uppercaseSelected);
                break;
            case "lowercaseOption":
                setLowercaseSelected(!lowercaseSelected);
                break;
            case "digitsOption":
                setDigitsSelected(!digitsSelected);
                break;
            case "specialCharOptions":
                setSpecialCharsSelected(!specialCharsSelected);
                break;
            default:
                break;
        }

    }

    function checkMe() {
        console.log("You got me");
        console.log(uppercaseSelected);
    }
    return (
        <form>
            <CheckBox defaultChecked={uppercaseSelected} checked={uppercaseSelected} id="uppercaseOption" onChange={toggleOption} />
            <Label text="A-Z" htmlFor="uppercaseOption" />
            <br />
            <br />
            <CheckBox defaultChecked={lowercaseSelected} checked={lowercaseSelected} id="lowercaseOption" onChange={toggleOption} />
            <Label text="a-z" htmlFor="lowercaseOption" />
            <br />
            <br />
            <CheckBox defaultChecked={digitsSelected} checked={digitsSelected} id="digitsOption" onChange={toggleOption} />
            <Label text="0-9" htmlFor="digitsOption" />
            <br />
            <br />
            <CheckBox defaultChecked={specialCharsSelected} checked={specialCharsSelected} id="specialCharOptions" onChange={toggleOption} />
            <Label text="!@#$%^&*" htmlFor="specialCharOptions" />
            <br />
            <br />
        </form>
    )
}