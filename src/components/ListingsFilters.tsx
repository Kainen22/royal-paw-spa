import Link from 'next/link'
import { flexibilityLabels, type FlexibilityTag, type ListingFilters } from '@/lib/listings'
import { denverAreas } from '@/lib/site'

const tags = Object.keys(flexibilityLabels) as FlexibilityTag[]

export function ListingsFilters({ filters }: { filters: ListingFilters }) {
  return (
    <form className="listings-filters" method="get" action="/listings">
      <label>
        Area
        <select name="area" defaultValue={filters.area || ''}>
          <option value="">All {denverAreas.length} areas</option>
          {denverAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </label>
      <label>
        Screening fit
        <select name="tag" defaultValue={filters.tag || ''}>
          <option value="">Any flexibility</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {flexibilityLabels[tag]}
            </option>
          ))}
        </select>
      </label>
      <label>
        Max rent (min unit)
        <select name="maxRent" defaultValue={filters.maxRent?.toString() || ''}>
          <option value="">Any budget</option>
          <option value="1200">Up to $1,200</option>
          <option value="1400">Up to $1,400</option>
          <option value="1600">Up to $1,600</option>
          <option value="1800">Up to $1,800</option>
          <option value="2000">Up to $2,000</option>
          <option value="2500">Up to $2,500</option>
        </select>
      </label>
      <label>
        Beds
        <select name="beds" defaultValue={filters.beds || ''}>
          <option value="">Any</option>
          <option value="studio">Studio</option>
          <option value="1">1 bed</option>
          <option value="2">2 beds</option>
          <option value="3plus">3+ beds</option>
        </select>
      </label>
      <div className="form-actions" style={{ marginTop: 0, alignItems: 'flex-end' }}>
        <button className="btn btn-dark" type="submit">
          Show listings
        </button>
        <Link className="form-note" href="/listings">
          Clear
        </Link>
      </div>
    </form>
  )
}
