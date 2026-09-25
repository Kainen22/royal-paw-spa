type BrandMarkProps = {
  size?: number
}

export function BrandMark({ size = 36 }: BrandMarkProps) {
  return (
    <img
      className="brand-mark"
      src="/logo.svg"
      alt=""
      width={size}
      height={Math.round(size * 1.125)}
    />
  )
}
