export interface Location {
  name: string;
  slug: string;
  county: string;
  population?: number;
  description: string;
}

export const locations: Location[] = [
  { name: 'Newark', slug: 'newark', county: 'Essex', population: 311549, description: 'New Jersey\'s largest city and a major commercial hub' },
  { name: 'Jersey City', slug: 'jersey-city', county: 'Hudson', population: 292449, description: 'Vibrant waterfront city across from Manhattan' },
  { name: 'Paterson', slug: 'paterson', county: 'Passaic', population: 159732, description: 'Historic silk city with rich industrial heritage' },
  { name: 'Elizabeth', slug: 'elizabeth', county: 'Union', population: 137298, description: 'Gateway to Newark Airport and major retail destination' },
  { name: 'Edison', slug: 'edison', county: 'Middlesex', population: 107588, description: 'Named after Thomas Edison, known for diverse community' },
  { name: 'Woodbridge Township', slug: 'woodbridge-township', county: 'Middlesex', population: 103353, description: 'Sprawling township with multiple distinct neighborhoods' },
  { name: 'Lakewood Township', slug: 'lakewood-township', county: 'Ocean', population: 135158, description: 'Fast-growing community in Ocean County' },
  { name: 'Toms River', slug: 'toms-river', county: 'Ocean', population: 95438, description: 'Ocean County seat and Jersey Shore gateway' },
  { name: 'Hamilton Township', slug: 'hamilton-township', county: 'Mercer', population: 92297, description: 'Large suburban township near Trenton' },
  { name: 'Trenton', slug: 'trenton', county: 'Mercer', population: 90871, description: 'New Jersey\'s historic capital city' },
  { name: 'Clifton', slug: 'clifton', county: 'Passaic', population: 90296, description: 'Diverse city with strong community feel' },
  { name: 'Brick Township', slug: 'brick-township', county: 'Ocean', population: 77520, description: 'Popular Shore community with excellent schools' },
  { name: 'Camden', slug: 'camden', county: 'Camden', population: 73742, description: 'Waterfront city experiencing urban renewal' },
  { name: 'Cherry Hill', slug: 'cherry-hill', county: 'Camden', population: 74553, description: 'Upscale suburb with excellent shopping and dining' },
  { name: 'Bayonne', slug: 'bayonne', county: 'Hudson', population: 71852, description: 'Peninsula city with waterfront development' },
  { name: 'Passaic', slug: 'passaic', county: 'Passaic', population: 72307, description: 'Diverse city along the Passaic River' },
  { name: 'East Orange', slug: 'east-orange', county: 'Essex', population: 69673, description: 'Historic city with strong community pride' },
  { name: 'Franklin Township', slug: 'franklin-township', county: 'Somerset', population: 68104, description: 'Growing township with excellent schools' },
  { name: 'Union City', slug: 'union-city', county: 'Hudson', population: 73999, description: 'Densely populated city with vibrant culture' },
  { name: 'Old Bridge Township', slug: 'old-bridge-township', county: 'Middlesex', population: 68195, description: 'Family-friendly township with parks' },
  { name: 'Middletown Township', slug: 'middletown-township', county: 'Monmouth', population: 67106, description: 'Bayshore community with historic villages' },
  { name: 'Piscataway', slug: 'piscataway', county: 'Middlesex', population: 60571, description: 'Home to Rutgers University campus' },
  { name: 'Hoboken', slug: 'hoboken', county: 'Hudson', population: 60419, description: 'Trendy waterfront city with Manhattan views' },
  { name: 'Perth Amboy', slug: 'perth-amboy', county: 'Middlesex', population: 55436, description: 'Historic waterfront city with diverse community' },
  { name: 'Plainfield', slug: 'plainfield', county: 'Union', population: 54586, description: 'Historic city with Victorian architecture' },
  { name: 'New Brunswick', slug: 'new-brunswick', county: 'Middlesex', population: 56100, description: 'College town home to Rutgers University' },
  { name: 'Howell Township', slug: 'howell-township', county: 'Monmouth', population: 54711, description: 'Large suburban township with rural character' },
  { name: 'Bloomfield', slug: 'bloomfield', county: 'Essex', population: 53510, description: 'Diverse township with small-town charm' },
  { name: 'North Bergen', slug: 'north-bergen', county: 'Hudson', population: 64793, description: 'Township with stunning NYC skyline views' },
  { name: 'West New York', slug: 'west-new-york', county: 'Hudson', population: 54997, description: 'Densely populated town on the Hudson' },
  { name: 'Irvington', slug: 'irvington', county: 'Essex', population: 54110, description: 'Township with convenient Newark access' },
  { name: 'Union Township', slug: 'union-township', county: 'Union', population: 59987, description: 'Central location with excellent transit' },
  { name: 'Jackson Township', slug: 'jackson-township', county: 'Ocean', population: 58651, description: 'Home to Six Flags Great Adventure' },
  { name: 'Wayne', slug: 'wayne', county: 'Passaic', population: 53892, description: 'Upscale township with excellent schools' },
  { name: 'Parsippany-Troy Hills', slug: 'parsippany-troy-hills', county: 'Morris', population: 56000, description: 'Corporate hub with diverse housing' },
  { name: 'Mount Laurel', slug: 'mount-laurel', county: 'Burlington', population: 45505, description: 'Growing suburb with excellent amenities' },
  { name: 'Bridgewater Township', slug: 'bridgewater-township', county: 'Somerset', population: 46596, description: 'Affluent township with top-rated schools' },
  { name: 'Manalapan Township', slug: 'manalapan-township', county: 'Monmouth', population: 40203, description: 'Upscale suburban community' },
  { name: 'Hackensack', slug: 'hackensack', county: 'Bergen', population: 46030, description: 'Bergen County seat with medical centers' },
  { name: 'Sayreville', slug: 'sayreville', county: 'Middlesex', population: 47589, description: 'Waterfront borough with redevelopment' },
  { name: 'Linden', slug: 'linden', county: 'Union', population: 44951, description: 'Industrial city with residential neighborhoods' },
  { name: 'Kearny', slug: 'kearny', county: 'Hudson', population: 44016, description: 'Town with Scottish heritage and history' },
  { name: 'Atlantic City', slug: 'atlantic-city', county: 'Atlantic', population: 40226, description: 'Famous resort city with casinos and beaches' },
  { name: 'Teaneck', slug: 'teaneck', county: 'Bergen', population: 41484, description: 'Diverse township with strong schools' },
  { name: 'Vineland', slug: 'vineland', county: 'Cumberland', population: 60470, description: 'South Jersey\'s largest city by area' },
  { name: 'Monroe Township', slug: 'monroe-township', county: 'Middlesex', population: 48594, description: 'Active adult communities and families' },
  { name: 'Bergenfield', slug: 'bergenfield', county: 'Bergen', population: 28473, description: 'Diverse borough with community spirit' },
  { name: 'Paramus', slug: 'paramus', county: 'Bergen', population: 27653, description: 'Major retail destination with blue laws' },
  { name: 'Fair Lawn', slug: 'fair-lawn', county: 'Bergen', population: 35926, description: 'Family-friendly borough with parks' },
  { name: 'Marlboro Township', slug: 'marlboro-township', county: 'Monmouth', population: 40466, description: 'Affluent township with top schools' },
  { name: 'Carteret', slug: 'carteret', county: 'Middlesex', population: 25151, description: 'Diverse borough with waterfront access' },
  { name: 'Livingston', slug: 'livingston', county: 'Essex', population: 31047, description: 'Upscale township with excellent schools' },
  { name: 'Maplewood', slug: 'maplewood', county: 'Essex', population: 26118, description: 'Charming township with village center' },
  { name: 'Millburn', slug: 'millburn', county: 'Essex', population: 21710, description: 'Affluent township with Paper Mill Playhouse' },
  { name: 'Summit', slug: 'summit', county: 'Union', population: 22794, description: 'Upscale city with vibrant downtown' },
  { name: 'Morristown', slug: 'morristown', county: 'Morris', population: 20166, description: 'Historic town with thriving downtown' },
  { name: 'South Orange', slug: 'south-orange', county: 'Essex', population: 17470, description: 'College town with excellent transit' },
  { name: 'Nutley', slug: 'nutley', county: 'Essex', population: 29891, description: 'Township with small-town character' },
  { name: 'Montclair', slug: 'montclair', county: 'Essex', population: 41023, description: 'Arts community with diverse neighborhoods' },
  { name: 'Ridgewood', slug: 'ridgewood', county: 'Bergen', population: 26215, description: 'Upscale village with charming downtown' },
  { name: 'Princeton', slug: 'princeton', county: 'Mercer', population: 31822, description: 'Ivy League town with historic character' },
  { name: 'Somerville', slug: 'somerville', county: 'Somerset', population: 13029, description: 'County seat with revitalized downtown' },
  { name: 'Freehold Borough', slug: 'freehold-borough', county: 'Monmouth', population: 12052, description: 'Historic downtown with antique shops' },
  { name: 'Long Branch', slug: 'long-branch', county: 'Monmouth', population: 33565, description: 'Beachfront city with boardwalk' },
  { name: 'Asbury Park', slug: 'asbury-park', county: 'Monmouth', population: 16795, description: 'Revitalized Shore town with music scene' },
  { name: 'Neptune Township', slug: 'neptune-township', county: 'Monmouth', population: 28010, description: 'Shore community near Ocean Grove' },
  { name: 'Englewood', slug: 'englewood', county: 'Bergen', population: 29861, description: 'Diverse city with hospital and arts' },
  { name: 'Westfield', slug: 'westfield', county: 'Union', population: 32036, description: 'Upscale town with vibrant downtown' },
  { name: 'Scotch Plains', slug: 'scotch-plains', county: 'Union', population: 24747, description: 'Township with excellent schools' },
  { name: 'Rahway', slug: 'rahway', county: 'Union', population: 32724, description: 'City with arts district and transit' },
  { name: 'Roselle', slug: 'roselle', county: 'Union', population: 22866, description: 'First community lit by electricity' },
  { name: 'Lodi', slug: 'lodi', county: 'Bergen', population: 26980, description: 'Diverse borough with strong community' },
  { name: 'Fort Lee', slug: 'fort-lee', county: 'Bergen', population: 40199, description: 'High-rise borough at GW Bridge' },
  { name: 'Secaucus', slug: 'secaucus', county: 'Hudson', population: 21783, description: 'Outlet shopping and transit hub' },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(location => location.slug === slug);
}

export function getLocationsByCounty(county: string): Location[] {
  return locations.filter(location => location.county === county);
}

export const counties = [...new Set(locations.map(l => l.county))].sort();
