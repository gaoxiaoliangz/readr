// 最新的在前面
export default function sortByDate(a, b) {
  return new Date(a.date_updated).valueOf() < new Date(b.date_updated).valueOf()
}
