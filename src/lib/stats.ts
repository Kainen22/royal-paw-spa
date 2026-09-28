type BusinessStat = {
  value: string
  suffix?: string
  label: string
  note: string
}

export const businessStats: BusinessStat[] = [
  {
    value: '4+',
    suffix: ' years',
    label: 'In business',
    note: 'Independent mobile grooming',
  },
  {
    value: '429+',
    label: 'Pets serviced',
    note: '409 dogs · 20 cats',
  },
  {
    value: '297+',
    label: 'Clients',
    note: '152 returning · 145 first-time',
  },
  {
    value: '2.4+',
    suffix: ' years',
    label: 'Average client stay',
    note: 'Families keep coming back',
  },
]
