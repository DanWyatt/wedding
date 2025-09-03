export const DietaryRestrictions = {
  vegetarian: {label: "Vegetarian", description: undefined},
  vegan: {label: "Vegan", description: undefined},
  gluten: {label: "No Gluten", description: undefined},
  peanut: {label: "No Peanut", description: undefined},
  nuts: {label: "No Nuts", description: undefined},
  sesame: {label: "No sesasme", description: undefined},
  soya: {label: "No soya", description: undefined},
  egg: {label: "No egg", description: undefined},
  dairy: {label: "No dairy", description: undefined},
  fish: {label: "No fish", description: undefined},
  celery: {label: "No celery", description: undefined},
  lupin: {label: "No lupin", description: undefined},
  mustard: {label: "No mustard", description: undefined},
  crustaceans: {label: "No crustaceans", description: "i.e. prawn, crab etc"},
  molluscs: {label: "No molluscs", description: "i.e. mussels, oyster etc"},
  sulphurDioxide: {label: "No sulphites", description: "i.e. sulphur dioxide"},
  other: {label: "Other", description: "Please describe in the box below"},
} as const;

export type DietaryRestriction = keyof typeof DietaryRestrictions;

export interface MealChoice {
  key: string,
  title: string,
  description: string,
  notSuitableFor: DietaryRestriction[],
}

export type MealChoices = MealChoice[];

export const Starters = [
  {
    key: 'GoatsCheeseTartlet',
    title: 'Goat’s cheese tartlet',
    description: 'Goat’s cheese and sundried tomato tartlet, rocket salad and basil mayo (v)',
    notSuitableFor: ['vegan'],
  },
  {
    key: "PrawnCocktail",
    title: 'Prawn cocktail',
    description: 'Prawn cocktail, smoked salmon shavings',
    notSuitableFor: ['vegetarian', 'vegan', 'fish', 'crustaceans'],
  },
] as MealChoices

export const Mains = [
  {
    key: "PorkPlatter",
    title: 'Roast Pork Sharing Platter',
    description: 'Joints of slow roasted Somerset pork with thyme & apricots',
    notSuitableFor: ['vegetarian', 'vegan'],
  },
  {
    key: "MushroomWellington",
    title: 'Mushroom Wellington',
    description: 'A meat-free twist on the classic',
    notSuitableFor: [],
  },
] as MealChoices

export const Desserts = [
  {
    key: "Profiteroles",
    title: 'Profiteroles',
    description: 'Cream filled profiteroles served with warm chocolate sauce (v)',
    notSuitableFor: ['dairy', 'vegan'],
  },
  {
    key: "Pavlova",
    title: 'Berry pavlova',
    description: 'Served with raspberry coulis (v)',
    notSuitableFor: ['vegan'],
  },
  {
    key: "LemonTart",
    title: 'Lemon tart',
    description: 'Served with raspberry coulis and lemon sorbet (v)',
    notSuitableFor: ['vegan'],
  },
] as MealChoices