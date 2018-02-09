export default function reverse(arr: any[]) {
  return arr.map((c, i) => {
    return arr[arr.length - i - 1]
  })
}
