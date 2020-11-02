export default function formatDate(timestamp) {
  var date = new Date(Number(timestamp))
  return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
