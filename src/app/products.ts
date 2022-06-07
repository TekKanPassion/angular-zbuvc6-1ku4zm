export interface Product {
  id: number;
  quoteRelevant: boolean;
  coverageUuid: string;
  coverageName: string;
  coverageType: string;
  parentCoverageRef: string;
  coverageDescription: string;
  peril: string;
  damage: string;
  condition: string;
  insurableEntity: string;
  limit: number;
  deductible: number;
  attachmentPoint: number;
  description: string;
  coverageRelationToCase: string;
}

export const products = [
  {
    coverageUuid: 'large-corp-property-felxa-pd/1600011125',
    coverageName: 'Coverage_Large Corp Property_FLEXA (PD)',
    coverageType: 'main-coverage',
    coverageDescription:
      'Direct physical loss or direct physical damage to tangible covered property on described premises resulting from Fire incl. Smoke, Lightning, Explosion and Aircraft Impact. ',
    insuredEntity:
      ' Content - Money - Electric and electronic devices - Stock - Valuable - Machinery - Building',
    peril: 'Fire incl. Smoke , Lightning, Explosion, Aircraft Impact, Smoke',
    damage: 'Material Damage',
    trigger: 'Occurrence',
  },
  {
    coverageUuid: 'large-corp-property-fire-pd/1600011125',
    coverageName: 'Coverage_Large Corp Property_Fire (PD)',
    coverageType: 'sub-coverage',
    parentCoverageRef: 'large-corp-property-felxa-pd/1600011125',
    coverageDescription:
      'Direct physical loss or direct physical damage to tangible covered property on described premises resulting from fire is a process of burning which produces flames that send out heat and light and might produce smoke',
    insuredEntity:
      ' Content - Money - Electric and electronic devices - Stock - Valuable - Machinery - Building',
    peril: 'fire',
    damage: 'Material Damage Direct financial loss of insured physical damage',
    trigger: 'Occurrence',
  },
  {
    coverageUuid: 'large-corp-property-felxa-bi/1600011126',
    coverageName: 'Coverage_Large Corp Property_FLEXA (BI)',
    coverageType: 'main-coverage',
    coverageDescription:
      'Direct financial consequence of a physical loss or physical damage to tangible covered property on described premises resulting from Fire incl. Smoke, Lightning, Explosion and Aircraft Impact.',
    insuredEntity:
      'Gorss Earning, Gross Profit, Fixed costs, Loss of Income (Income), Loss of rental revenue (Rent)',
    peril: 'Fire incl. Smoke , Lightning, Explosion, Aircraft Impact, Smoke',
    damage: 'Direct financial loss of insured physical damage ',
    trigger: 'Occurrence',
  },
  {
    coverageUuid: 'large-corp-property-fire-bi/1600011126',
    coverageName: 'Coverage_Large Corp Property_Fire (BI)',
    coverageType: 'sub-coverage',
    parentCoverageRef: 'large-corp-property-felxa-bi/1600011126',
    coverageDescription:
      'Direct financial consequence of a physical loss or physical damage to tangible covered property on described premises resulting from fire which is a process of burning which produces flames that send out heat and light and might produce smoke',
    insuredEntity:
      '- Additional increased cost of working, - Business (Person (Legal)), - Fixed costs, - Gross Profit (Profit), - Gross earnings, - Increased cost of working, - Loss of Income (Income), - Loss of rental (Rent), - Revenue',
    peril: 'fire',
    damage: 'Direct financial loss of insured physical damage ',
    trigger: 'Occurrence',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
