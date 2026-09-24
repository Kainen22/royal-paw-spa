import fs from 'fs'
import path from 'path'

const PHOTO_DIR = path.join(process.cwd(), 'public', 'photos')
const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif']

function isImage(file: string) {
  return EXTENSIONS.includes(path.extname(file).toLowerCase())
}

function toPublicUrl(...segments: string[]) {
  return '/photos/' + segments.map(encodeURIComponent).join('/')
}

export function findPhoto(name: string): string | null {
  if (!fs.existsSync(PHOTO_DIR)) return null

  const match = fs
    .readdirSync(PHOTO_DIR)
    .find((file) => isImage(file) && path.parse(file).name.toLowerCase() === name.toLowerCase())

  return match ? toPublicUrl(match) : null
}

export function listGalleryPhotos(): string[] {
  const galleryDir = path.join(PHOTO_DIR, 'gallery')
  if (!fs.existsSync(galleryDir)) return []

  return fs
    .readdirSync(galleryDir)
    .filter(isImage)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => toPublicUrl('gallery', file))
}
