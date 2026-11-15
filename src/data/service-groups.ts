/**
 * Groups used to filter and colour the service cards. Every service slug in
 * services.ts must appear in exactly one group.
 */
export const serviceGroups = [
  {
    label: "Everyday items",
    slugs: ["junk-removal", "furniture-removal", "sofa-removal", "mattress-removal", "appliance-removal", "same-day-junk-removal"],
  },
  { label: "Whole properties", slugs: ["house-villa-clearance", "move-out-clearance"] },
  { label: "Offices and business", slugs: ["office-clearance"] },
  { label: "Waste and debris", slugs: ["garden-waste-removal", "construction-debris-removal", "e-waste-removal"] },
] as const;

export function serviceGroupIndex(slug: string): number {
  const index = serviceGroups.findIndex((group) => (group.slugs as readonly string[]).includes(slug));
  return index < 0 ? 0 : index;
}
