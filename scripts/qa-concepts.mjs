#!/usr/bin/env node
/**
 * Integrity QA for /concepts explorer.
 * Run: node scripts/qa-concepts.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const fail = []
const pass = []

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8')
}

const catalog = read('src/concepts/catalog.ts')
const registry = read('src/concepts/registry.tsx')
const slugMatches = [...catalog.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1])
const expected = [
  'luxury-spa',
  'glam-grooming',
  'modern-atelier',
  'clean-professional',
  'grooming-centered',
  'luxury-elevated',
  'soft-pastels',
]

if (JSON.stringify(slugMatches) === JSON.stringify(expected)) {
  pass.push('catalog slugs match expected 7')
} else {
  fail.push(`catalog slugs mismatch: ${slugMatches.join(', ')}`)
}

for (const slug of expected) {
  const folder = path.join(root, 'src/concepts/sites', slug)
  const tsx = path.join(folder, 'Concept.tsx')
  const css = path.join(folder, 'concept.css')
  if (!fs.existsSync(tsx) || !fs.existsSync(css)) {
    fail.push(`${slug}: missing Concept.tsx or concept.css`)
    continue
  }
  const src = fs.readFileSync(tsx, 'utf8')
  if (!src.includes("from '@/concepts/shared'") && !src.includes('from "@/concepts/shared"')) {
    fail.push(`${slug}: does not import conceptKit shared`)
  } else {
    pass.push(`${slug}: imports shared kit`)
  }
  if (!src.includes("./concept.css")) {
    fail.push(`${slug}: missing concept.css import`)
  }
  if (!registry.includes(`'${slug}'`)) {
    fail.push(`${slug}: missing from registry`)
  } else {
    pass.push(`${slug}: registered`)
  }
  const scope = `.c-${slug}`
  const cssSrc = fs.readFileSync(css, 'utf8')
  if (!cssSrc.includes(scope)) {
    fail.push(`${slug}: CSS missing scope ${scope}`)
  } else {
    pass.push(`${slug}: CSS scoped`)
  }
}

const redo = {
  'luxury-spa': ['Luxury mobile grooming', 'Service Area', 'self care', 'Professional Groomers'],
  'glam-grooming': ['Before', 'After', 'We come to you', 'Service Area'],
  'modern-atelier': ['Same love', 'Premium care for every paw', 'Service Area'],
  'clean-professional': ['Healthy Pets. Happy Humans.', 'Our Grooming Services', 'Bath & Brush'],
  'luxury-elevated': ['The Royal Treatment', 'Luxury / Care / Convenience', 'Premium Products'],
}

for (const [slug, needles] of Object.entries(redo)) {
  const src = read(`src/concepts/sites/${slug}/Concept.tsx`) + read(`src/concepts/sites/${slug}/concept.css`)
  const missing = needles.filter((n) => !src.toLowerCase().includes(n.toLowerCase()))
  if (missing.length) fail.push(`${slug}: mockup markers missing → ${missing.join(', ')}`)
  else pass.push(`${slug}: mockup markers present`)
}

console.log('QA Concepts Integrity')
console.log('PASS', pass.length)
for (const p of pass) console.log('  ✓', p)
console.log('FAIL', fail.length)
for (const f of fail) console.log('  ✗', f)
process.exit(fail.length ? 1 : 0)
