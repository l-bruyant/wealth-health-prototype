export default function createRandomKey10000 (param) {
    const randomKey = param + Math.round(Math.random() * (99000 - 10000) + 10000)
    return randomKey
}