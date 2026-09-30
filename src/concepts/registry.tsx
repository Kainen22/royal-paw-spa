import type { ComponentType } from 'react'
import { LuxurySpaConcept } from '@/concepts/sites/luxury-spa/Concept'
import { GlamGroomingConcept } from '@/concepts/sites/glam-grooming/Concept'
import { ModernAtelierConcept } from '@/concepts/sites/modern-atelier/Concept'
import { CleanProfessionalConcept } from '@/concepts/sites/clean-professional/Concept'
import { GroomingCenteredConcept } from '@/concepts/sites/grooming-centered/Concept'
import { LuxuryElevatedConcept } from '@/concepts/sites/luxury-elevated/Concept'
import { SoftPastelsConcept } from '@/concepts/sites/soft-pastels/Concept'

export const conceptComponents: Record<string, ComponentType> = {
  'luxury-spa': LuxurySpaConcept,
  'glam-grooming': GlamGroomingConcept,
  'modern-atelier': ModernAtelierConcept,
  'clean-professional': CleanProfessionalConcept,
  'grooming-centered': GroomingCenteredConcept,
  'luxury-elevated': LuxuryElevatedConcept,
  'soft-pastels': SoftPastelsConcept,
}
