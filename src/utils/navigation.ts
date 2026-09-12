export const navigationItems = [
  { href: '/blog/', label: 'Blog' },
  // { href: '/tags/', label: 'Tags' },
]

export const isCurrentPath = (currentPath: string, href: string) => {
  const normalizedCurrentPath = currentPath.replace(/\/+$/, '') || '/'
  const normalizedHref = href.replace(/\/+$/, '') || '/'

  return (
    normalizedCurrentPath === normalizedHref ||
    (normalizedHref !== '/' &&
      normalizedCurrentPath.startsWith(`${normalizedHref}/`))
  )
}
