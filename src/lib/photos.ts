import fs from 'fs'
import path from 'path'

const PHOTO_DIR = path.join(process.cwd(), 'public', 'photos')
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif']
const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov']

export type GalleryItem = {
  src: string
  kind: 'photo' | 'video'
  poster?: string
}

function isImage(file: string) {
  return IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())
}

function isVideo(file: string) {
  return VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase())
}

function toPublicUrl(...segments: string[]) {
  return '/photos/' + segments.map(encodeURIComponent).join('/')
}

function byName(a: string, b: string) {
  return a.localeCompare(b, undefined, { numeric: true })
}

export function findPhoto(name: string): string | null {
  if (!fs.existsSync(PHOTO_DIR)) return null

  const match = fs
    .readdirSync(PHOTO_DIR)
    .find((file) => isImage(file) && path.parse(file).name.toLowerCase() === name.toLowerCase())

  return match ? toPublicUrl(match) : null
}

export function listGalleryPhotos(): string[] {
  return listGalleryItems()
    .filter((item) => item.kind === 'photo')
    .map((item) => item.src)
}

export function listGalleryItems(): GalleryItem[] {
  const galleryDir = path.join(PHOTO_DIR, 'gallery')
  if (!fs.existsSync(galleryDir)) return []

  const files = fs.readdirSync(galleryDir)
  const videos = files.filter(isVideo).sort(byName)
  const posterNames = new Set(videos.map((file) => path.parse(file).name))
  const photos = files.filter(isImage).filter((file) => !posterNames.has(path.parse(file).name)).sort(byName)

  const items: GalleryItem[] = [
    ...videos.map((file) => {
      const stem = path.parse(file).name
      const poster = files.find((candidate) => isImage(candidate) && path.parse(candidate).name === stem)
      return {
        src: toPublicUrl('gallery', file),
        kind: 'video' as const,
        poster: poster ? toPublicUrl('gallery', poster) : undefined,
      }
    }),
    ...photos.map((file) => ({
      src: toPublicUrl('gallery', file),
      kind: 'photo' as const,
    })),
  ]

  return items
}
