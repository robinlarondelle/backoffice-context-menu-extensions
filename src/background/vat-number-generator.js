import { generateBsn } from './bsn-generator';

export function generateVatNumber() {

    let bsn = generateBsn();

    let r = Math.floor(Math.random() * 99) + 1;
    let result = "NL" + bsn + "B" + r;
    return (result);
}