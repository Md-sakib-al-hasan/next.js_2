

import { getImageProps } from 'next/image'

export default function Page() {
  const common = { alt: 'Theme Example', width: 800, height: 400 }
  const {
    props: { srcSet: light },
  } = getImageProps({ ...common, src: 'https://i.ibb.co/L5T0206/Django-Featured-Image.jpg"' })
  const {
    props: { srcSet: dark, ...rest },
  } = getImageProps({ ...common, src: "https://i.ibb.co/7rT2cQ7/pexels-footnoteintravel-3229452.jpg" })

  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={dark} />
      <source media="(prefers-color-scheme: light)" srcSet={light} />
      <img alt='sk' {...rest} />
    </picture>
  )
}