import React from 'react'
import { Link } from 'react-router'
import moment from 'moment'
import Markdown from '../../components/Markdown/Markdown'
import styles from './SitePosts.scss'

type Props = {
  children?: any
  post: Schema.Post
  useDigest?: boolean
  titleWithLink?: boolean
}

const Post = (props: Props) => {
  const { post, useDigest, titleWithLink } = props
  const time = moment(new Date(post.createdAt).valueOf()).format('YYYY年MM月DD日')

  return (
    <div className={styles['post']}>
      {
        titleWithLink
          ? (
            <Link className={styles['title-link']} to={`/blog/posts/${post.id}`}>
              <h2 className={styles['post-title']}>{post.title}</h2>
            </Link>
          )
          : (
            <h1 className={styles['post-title']}>{post.title}</h1>
          )
      }
      <div className={styles['time']}>{time}</div>
      {
        useDigest
          ? (
            <p>
              {
                Array.prototype
                  .slice.call(post.markdown, 0, 200)
                  .concat('...')
                  .join('')
                  .replace(/>|# |## |```/g, '')
              }
            </p>
          )
          : (
            <Markdown
              input={post.markdown}
            />
          )
      }
    </div>
  )
}

export default Post
