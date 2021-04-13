// This is an array of objects where each object is a project done by melissa with
// properties associated with them { title img description type style }
// When populating pages with appropriate artwork we will pull from this file
import family from '../images/family.jpg';

export const portfolio = [
  {
    title: 'owl',
    img: 'imgurl',
    description: 'sdfghd sdfg',
    type: 'misc',
    style: 'acrylic',
  },
  {
    title: 'eagle',
    img: 'imgurl',
    description: 'sdfghd sdfg',
    type: 'pet',
    style: 'paint',
  },
  {
    title: 'family',
    img: { family },
    description: 'A portrait of my son and two nieces.',
    type: 'people',
    style: 'pastel',
  },
];
