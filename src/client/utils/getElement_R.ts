export default function getElement_R(ui, name) {
  if (ui[name]) {
    return ui[name]
  }
  return {
    value: ''
  }
}