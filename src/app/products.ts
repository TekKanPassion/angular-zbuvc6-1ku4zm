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

  formId: string;
  formName: string;
  formDescription: string;
  questionNumber: string;
  questionId: string;
  questionText: string;
  answerType: string;
  questionGrouping: string;
}

export const products = [
  {
    formId: '8748250C5D6AD7B48825774D005C4DBB',
    formName: 'AA 6870DEC 05 10',
    formDescription: 'ANTIQUE AUTOMOBILE FLOATER DECLARATIONS',
    questionNumber: '1',
    questionId: 'i_62A66',
    questionText: 'Theft Deductible $ ',
    answerType: 'Text',
    questionGrouping: 'Schedule of Coverage',
  },
  {
    formId: '8748250C5D6AD7B48825774D005C4DBB',
    formName: 'AA 6870DEC 05 10',
    formDescription: 'ANTIQUE AUTOMOBILE FLOATER DECLARATIONS',
    questionNumber: '2',
    questionId: 'i_3B90E',
    questionText: 'Additional Insureds',
    answerType: 'Text Area',
    questionGrouping: 'Schedule of Coverage',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
