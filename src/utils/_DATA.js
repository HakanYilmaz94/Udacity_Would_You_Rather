

let users = {
  markzuckerberg: {
    id: 'ua8dgqe7',
    name: 'Mark Zuckerberg',
    username: 'markzuckerberg',
    avatarURL: 'https://example.com/MarkZuckerbergAvatar.png',
    answers: {
      "abc123456789012": 1,
      "def456789012345": 2,
      "ghi789012345678": 2
    },
    questions: ['abc123456789012']
  },
  timcook: {
    id: 'ukl829gx',
    name: 'Tim Cook',
    username: 'timcook',
    avatarURL: 'https://example.com/TimCookAvatar.png',
    answers: {
      "mno345678901234": 1,
      "def456789012345": 2,
      "jkl012345678901": 2
    },
    questions: ['mno345678901234', 'def456789012345'],
  },
  elonmusk: {
    id: 'xsf6u92x',
    name: 'Elon Musk',
    username: 'elonmusk',
    avatarURL: 'https://example.com/ElonMuskAvatar.png',
    answers: {
      "jkl012345678901": 1,
      "mno345678901234": 2
    },
    questions: ['ghi789012345678', "jkl012345678901"],
  }
};


let questions = {
  "abc123456789012": {
    id: 'abc123456789012',
    author: 'markzuckerberg',

    1: {
      votes: ['markzuckerberg'],
      text: 'Linux',
    },
    2: {
      votes: [],
      text: 'Microsoft'
    },
    timestamp: 112
  },
  "def456789012345": {
    id: 'def456789012345',
    author: 'timcook',

    1: {
      votes: [],
      text: 'Apple Watch',
    },
    2: {
      votes: ['timcook', 'markzuckerberg'],
      text: 'Iphone'
    },
    timestamp: 108
  },
  "ghi789012345678": {
    id: 'ghi789012345678',
    author: 'elonmusk',
    1: {
      votes: [],
      text: '.Net',
    },
    2: {
      votes: ['markzuckerberg'],
      text: 'C#'
    },
    timestamp: 1493669800090
  },
  "jkl012345678901": {
    id: 'jkl012345678901',
    author: 'elonmusk',
    1: {
      votes: ['elonmusk'],
      text: 'Windows 11',
    },
    2: {
      votes: ['timcook'],
      text: 'Macos Catalina'
    },
    timestamp: 1493579799890
  },
  "mno345678901234": {
    id: 'mno345678901234',
    author: 'timcook',
    1: {
      votes: ['timcook'],
      text: 'Apple Music',
    },
    2: {
      votes: ['elonmusk'],
      text: 'Spotify'
    },
    timestamp: 1493579767190
  },
};


export function generateUID() {
  return Math.random().toString(10).substring(2, 10) + Math.random().toString(10).substring(2, 10)
}

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export function getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000)
  })
}
