export function generateBsn() {
    let success = false;
    let amount = 1;
    let n = "";
    do {

        n = "";
        for (let j = 0; j < 9; j++) {
            let x = Math.floor(Math.random() * 10);
            n = n + x.toString();
        }

    } while (checkBsn(n) == false);

    return n;
}

export function checkBsn(nummer) {
    let totaal = 0;
    let j = 9;
    let rest = 0;
    for (let i = 0; i < 9; i++) {
        if (j == 1) { j = -1; }
        totaal = totaal + parseInt((nummer[i] * j));
        j--;
    }

    return ((totaal % 11) == 0);
}