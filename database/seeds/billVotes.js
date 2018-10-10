const billVotes = [
  {
    Member: 'Ford, Hon. Doug',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: 'No Recorded Vote',
      timeAllocation: 'Aye',
      voteReading2: 'No Recorded Vote',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Horwath, Andrea',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: 'Nay',
      timeAllocation: 'Nay',
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Wynne, Kathleen',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: null,
    },
    bill5: {
      voteReading1: 'Nay',
      timeAllocation: 'Nay',
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Elliott, Hon. Christine',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: 'Aye',
      timeAllocation: 'No Recorded Vote',
      voteReading2: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Coteau, Michael',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: null,
      voteReading2: 'No Recorded Vote',
      timeAllocation: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Bisson, Gilles',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: 'Nay',
      voteReading2: 'Nay',
      timeAllocation: 'Nay',
      voteReading3: 'Nay',
    },
    bill27: {
      voteReading1: 'Aye',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Schreiner, Mike',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: 'Nay',
      voteReading2: 'Nay',
      timeAllocation: 'Nay',
      voteReading3: 'Nay',
    },
    bill27: {
      voteReading1: 'Aye',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Jones, Hon. Sylvia',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: 'Aye',
      timeAllocation: 'Aye',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Fraser, John',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: 'Nay',
      timeAllocation: 'Nay',
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Bell, Jessica',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: 'Nay',
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Anand, Deepak',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Arnott, Hon. Ted',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: 'Nay',
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Baber, Roman',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Babikian, Aris',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Bailey, Bob',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Barrett, Toby',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Bethlenfalvy, Hon. Peter',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Bouma, Will',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Calandra, Paul',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Cho, Hon. Raymond Sung Joon',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Cho, Stan',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Clark, Hon. Steve',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Coe, Lorne',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Crawford, Stephen',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Cuzzetto, Rudy',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Downey, Doug',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Dunlop, Jill',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Fedeli, Hon. Victor',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Fee, Amy',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Fullerton, Hon. Merrilee',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Ghamari, Goldie',
    bill2: {
      voteReading1: null,
      voteReading2: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Gill, Parm',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Hardeman, Hon. Ernie',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Harris, Mike',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
  },
  {
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Hillier, Randy',
    bill2: {
      voteReading1: null,
      voteReading2: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Hogarth, Christine',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Kanapathi, Logan',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Karahalios, Belinda',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Ke, Vincent',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Khanjin, Andrea',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Kramp, Daryl',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Kusendova, Natalia',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Lecce, Stephen',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'MacLeod, Hon. Lisa',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Martin, Robin',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Martow, Gila',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'McDonell, Jim',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'McKenna, Jane',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'McNaughton, Hon. Monte',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Miller, Norman',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Mitas, Christina Maria',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Mulroney, Hon. Caroline',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Nicholls, Rick',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Oosterhoff, Sam',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Pang, Billy',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Park, Lindsey',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Parsa, Michael',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Pettapiece, Randy',
    bill2: {
      voteReading1: null,
      voteReading2: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Phillips, Hon. Rod',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Piccini, David',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Rasheed, Kaleed',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Rickford, Hon. Greg',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Roberts, Jeremy',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Romano, Ross',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Sabawy, Sheref',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Sandhu, Amarjot',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Sarkaria, Prabmeet Singh',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Scott, Hon. Laurie',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Simard, Amanda',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Skelly, Donna',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Smith, Dave',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Smith, Hon. Todd',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Surma, Kinga',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Tangri, Nina',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Thanigasalam, Vijay',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Thompson, Hon. Lisa M.',
    bill2: {
      voteReading1: null,
      voteReading2: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Tibollo, Hon. Michael A',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Triantafilopoulos, Effie J.',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Wai, Daisy',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Walker, Bill',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Wilson, Jim',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Yakabuski, John',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Yurek, Jeff',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Andrew, Jill',
    bill2: {
      voteReading1: null,
      voteReading2: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Armstrong, Teresa J',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Arthur, Ian',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Begum, Doly',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Berns-McGown, Rima',
    bill2: {
      voteReading1: null,
      voteReading2: 'Nay',
      voteReading3: 'Nay',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Bourgouin, Guy',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Burch, Jeff',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Fife, Catherine',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'French, Jennifer K.',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Gates, Wayne',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'GÃ©linas, France',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Glover, Chris',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Gretzky, Lisa',
    bill2: {
      voteReading1: null,
      voteReading2: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Harden, Joel',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Hassan, Faisal',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Hatfield, Percy',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Karpoche, Bhutila',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Kernaghan, Terence',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Lindo, Laura Mae',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Mamakwa, Sol',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Mantha, Michael',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Monteith-Farrell, Judith',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Morrison, Suze',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Natyshak, Taras',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Rakocevic, Tom',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Sattler, Peggy',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Shaw, Sandy',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Singh, Gurratan',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Singh, Sara',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Stevens, Jennifer (Jennie)',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Stiles, Marit',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Tabuns, Peter',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Taylor, Monique',
    bill2: {
      voteReading1: null,
      voteReading2: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Vanthof, John',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'West, Jamie',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Yarde, Kevin',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Des Rosiers, Nathalie',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Gravelle, Michael',
    bill2: {
      voteReading1: null,
      voteReading2: 'No Recorded Vote',
      voteReading3: 'No Recorded Vote',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Hunter, Mitzi',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
  {
    Member: 'Lalonde, Marie-France',
    bill2: {
      voteReading1: null,
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill5: {
      voteReading1: null,
      timeAllocation: 'Nay',
      voteReading2: 'Aye',
      voteReading3: 'Aye',
    },
    bill27: {
      voteReading1: 'No Recorded Vote',
      voteReading2: null,
      voteReading3: null,
    },
  },
];

module.exports = billVotes;
