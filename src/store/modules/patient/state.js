const state = () => ({
  patientId: '',
  patientName: '',
  reportDate: '',
  age: '',
  gender: '',
  interpretation: '',
  EASI: 0,
  BSA: 0,
  IGA: 0,
  'Chest & Shoulder': {
    id: '1',
    'Chest-I': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Chest-II': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Shoulder-I': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Shoulder-II': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
  },
  'Biceps & Triceps': {
    id: '2',
    'Triceps-I': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Triceps-II': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Biceps-I': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Biceps-II': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
  },
  'Abs & Backside': {
    id: '3',
    'Backside-I': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Backside-II': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Abs-I': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Abs-II': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
  },
  'Buttocks & Leg': {
    id: '4',
    'Leg-I': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Leg-II': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Buttocks-I': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
    'Buttocks-II': {
      weight: 0,
      reps: 0,
      sets: 0,
      movement: '',
    },
  },
});

export default state;
