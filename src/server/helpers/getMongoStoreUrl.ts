import urljoin from 'url-join'

export default () => {
  return urljoin(`${process.env.DB_PROTOCOL}://${process.env.DB_HOST}:${process.env.DB_PORT}`, process.env.MONGOSTORE_NAME) as string
}
