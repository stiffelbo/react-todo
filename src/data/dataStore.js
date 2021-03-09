export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,          
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,          
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,          
          title: 'Harry Potter',
        },
        {
          key: 1,          
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,          
          title: 'The Witcher',
        },
        {
          key: 1,          
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    index: 0,
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    index: 1,
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    index: 2,
    columnId: 'column-1',
    title: 'Getting things done',
  },
  {
    id: 'card-4',
    index: 0,
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-5',
    index: 1,
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-6',
    index: 2,
    columnId: 'column-2',
    title: 'Snatch',
  },
  {
    id: 'card-7',
    index: 3,
    columnId: 'column-2',
    title: 'Equilibrium',
  },
  {
    id: 'card-8',
    index: 0,
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-9',
    index: 1,
    columnId: 'column-3',
    title: 'Skyrim',
  },
  {
    id: 'card-10',
    index: 2,
    columnId: 'column-3',
    title: 'MaxPayne',
  },
  {
    id: 'card-11',
    index: 3,
    columnId: 'column-3',
    title: 'NeedForSpeed',
  },
  {
    id: 'card-12',
    index: 4,
    columnId: 'column-3',
    title: 'Diablo',
  },
];

export const info = {
  heroImg: 'https://images.pexels.com/photos/87080/space-shuttle-start-discovery-spaceport-87080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  title: 'Important info',
  subtitle: 'Info subtitle',
  description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
};

export const faq = {
  heroImg: 'https://images.pexels.com/photos/220210/pexels-photo-220210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  title: 'FAQ',
  subtitle: 'Questions asked lately',
  questions: [
    {
      id: 0,
      title : 'How to add task?',
      answer: 'Just fill text field with content and click ok.',
    },
    {
      id: 1,
      title : 'How to delete task?',
      answer: 'Sorry you cant.',
    },
    {
      id: 2,
      title : 'How to move task?',
      answer: 'Sorry you cant. dragNdrop is not working properly.',
    },
    {
      id: 3,
      title : 'Can I add new column?',
      answer: 'Yes, just type name in text field and click ok.',
    },
  ],
};

export const header = {
  logo: 'star',
  nav: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Info',
      path: '/info',
    },
    {
      name: 'FAQ',
      path: '/faq',
    },
  ],
};

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
