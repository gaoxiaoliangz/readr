export default function isDescendant(parent: HTMLElement, child: HTMLElement) {
  let node = child.parentNode

  while (node != null) {
    if (node === parent) {
      return true
    }
    node = node.parentNode
  }
  return false
}
