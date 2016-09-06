// 最新的在前面
export default function sortByDate() {
  return (a, b) => {
    return new Date(b.date_updated).valueOf() - new Date(a.date_updated).valueOf()
  }
}
