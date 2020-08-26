const holiday = {
  newYear: {
    h: ['2020-1-1'],
    w: [],
  },
  spring: {
    h: [
      '2020-1-24',
      '2020-1-25',
      '2020-1-26',
      '2020-1-27',
      '2020-1-28',
      '2020-1-29',
      '2020-1-30',
      '2020-1-31',
      '2020-2-1',
      '2020-2-2',
    ],
    w: ['2020-1-19'],
  },
  qingming: {
    h: ['2020-4-4', '2020-4-5', '2020-4-6'],
    w: [],
  },
  labour: {
    h: ['2020-5-1', '2020-5-2', '2020-5-3', '2020-5-4', '2020-5-5'],
    w: ['2020-4-26', '2020-5-9'],
  },
  dragonBoat: {
    h: ['2020-6-25', '2020-6-26', '2020-6-27'],
    w: ['2020-6-28'],
  },
  national: {
    h: [
      '2020-10-1',
      '2020-10-2',
      '2020-10-3',
      '2020-10-4',
      '2020-10-5',
      '2020-10-6',
      '2020-10-7',
      '2020-10-8',
    ],
    w: ['2020-9-27', '2020-10-10'],
  },
};

type KEYS = keyof typeof holiday;
const keys = Object.keys(holiday) as KEYS[];
let holidayList: string[] = [];
let workList: string[] = [];
keys.forEach((key: KEYS) => {
  holidayList = holidayList.concat(holiday[key].h);
  workList = workList.concat(holiday[key].w);
});
export default {
  holiday,
  holidayList,
  workList,
};
