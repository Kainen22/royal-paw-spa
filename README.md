# RenterMatch

Two-sided lead marketplace matching renters with qualification barriers to apartment communities willing to work with them.

**Initial niche:** thin file / no credit / limited credit / recent credit issues / nontraditional income.  
**Long-term brand:** broader alternative-housing marketplace for any barrier to qualifying.

## MVP scope

- Renter landing page (Denver metro first)
- Intake form (budget, location, income, self-reported credit, needs)
- Property-partner interest page
- Lead capture API (stores submissions locally for early sales calls)
- Fair Housing / no-guarantee disclaimers

Not included yet: credit pulls, automated screening decisions, broker tooling, multi-market scale.

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000

Leads land in `data/leads.json` (gitignored). Review them while you build apartment relationships by hand.

## Revenue experiments

| Model | Test pricing |
| --- | --- |
| Qualified renter lead | $15–$40 |
| Scheduled property tour | $30–$75 |
| Successful lease placement | $150–$400+ |

Prefer lease-placement when operators will pay — incentives align.

## Compliance note

Do not promise approval. Do not independently make tenant-screening decisions. Review Fair Housing, FCRA/credit-report rules, privacy law, and state apartment referral / broker licensing before charging for placements.
