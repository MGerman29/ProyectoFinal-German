const FALLBACK = "https://placehold.co/400"

export default function CustomImage({ src, alt, ...props }) {
  return <img src={src || FALLBACK} alt={alt} {...props} />
}
