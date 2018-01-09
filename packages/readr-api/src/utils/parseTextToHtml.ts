export default function parseTextToHtml(str: string): string {
  let html = ''
  const paragraphs = str.split('\n')

  for (let i = 0; i < paragraphs.length; i++) {
    html += '<p>' + paragraphs[i] + '</p>'
  }

  return html
}
