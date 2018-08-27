import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

const button = makeButton('Submit!');

document.body.appendChild(button);
document.body.appendChild(footer);