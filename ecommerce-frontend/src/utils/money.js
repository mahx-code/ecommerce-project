export function formatMoney(amountCents) {
    let result = String(`${(amountCents / 100).toFixed(2)}`);
    if (result >= 0) {
        return `$${result}`
    } else {
        return `-$${result.substring(1)}`
    }
}

console.log(formatMoney(1090))