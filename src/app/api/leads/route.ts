import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

type LeadRecord = {
  id: string
  createdAt: string
  source: string
  [key: string]: string
}

const dataDir = path.join(process.cwd(), 'data')
const dataFile = path.join(dataDir, 'leads.json')

async function readLeads(): Promise<LeadRecord[]> {
  try {
    const raw = await readFile(dataFile, 'utf8')
    const parsed = JSON.parse(raw) as LeadRecord[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const source = asString(body.source) || 'unknown'
  const email = asString(body.email)

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  }

  if (source === 'renter-intake') {
    const required = ['firstName', 'lastName', 'phone', 'area', 'budget', 'creditProfile', 'consent']
    for (const key of required) {
      if (!asString(body[key])) {
        return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 })
      }
    }
  }

  if (source === 'partner-interest') {
    const required = ['contactName', 'community', 'phone']
    for (const key of required) {
      if (!asString(body[key])) {
        return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 })
      }
    }
  }

  const record: LeadRecord = {
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    source,
  }

  for (const [key, value] of Object.entries(body)) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      record[key] = String(value).trim()
    }
  }

  const leads = await readLeads()
  leads.push(record)
  await mkdir(dataDir, { recursive: true })
  await writeFile(dataFile, JSON.stringify(leads, null, 2), 'utf8')

  return NextResponse.json({ ok: true, id: record.id })
}
