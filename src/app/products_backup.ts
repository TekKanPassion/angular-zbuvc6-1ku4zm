export interface Product {
  id: number;
  quoteRelevant: boolean;
  name: string;
  coverageName: string;
  peril: string;
  damage: string;
  condition: string;
  insurableEntity: string;
  limit: number;
  deductible: number;
  attachmentPoint: number;
  description: string;
  coverageRelationToCase: string;
  cases:[
    coverageRelationToCase: string,
    peril: string,
    damage: string,
    insurableEntity: string,
    limit:string,
    deductible:string
  ]
}

export const products = [
  {
    id: 1,
    quoteRelevant: true,
    name: 'Primary',
    coverageName: 'Earthquake',
    peril: 'EQ',
    damage: 'PD+BI',
    insurableEntity: 'all locations',
    limit: '1.000 M',
    deductible:'5 M',
    attachmentPoint: 0,
    description: 'Primary layer 10M Xs 0',
    cases: [
      {
        coverageRelationToCase: 'except for',
        peril:'EQ',
        damage:'PD+BI',
        insurableEntity: 'all subsidiaries',
        limit:'30 M',
        dedcutible:'250 k'
      }
    ]
  },
  {
    id: 2,
    quoteRelevant: true,
    name: 'First Excess',
    limit: 50000,
    attachmentPoint: 10000,
    description: 'Excess layer 50M Xs 10M',
  },
  {
    id: 3,
    quoteRelevant: true,
    name: 'Second Excess',
    limit: 9000000,
    attachmentPoint: 50000,
    description: 'Excess layer 90M Xs 50M',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
