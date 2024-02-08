export interface exerciseValues {
  dailyHours: Array<number>;
  target: number;
}

const parseArg = (args: Array<string>): exerciseValues => {
  const dailyHours = args.slice(2, -1).map((hours) => Number(hours));
  const target = Number(args[args.length - 1]);

  if (dailyHours.some((hours) => isNaN(hours)) || isNaN(target)) {
    throw new Error('Provided values were not numbers!');
  }

  return {
    dailyHours,
    target,
  };
};
const calculateExercises = ({ dailyHours, target }: exerciseValues): object => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((hours) => hours > 0).length;

  const average = dailyHours.reduce((acc, cur) => acc + cur) / periodLength;

  const success = average >= target;
  let rating = 0;
  let ratingDescription = '';

  switch (true) {
    case average < target:
      rating = 1;
      ratingDescription = 'bad';
      break;
    case average < target / 2:
      rating = 2;
      ratingDescription = 'not too bad but could be better';
      break;
    case average >= target:
      rating = 3;
      ratingDescription = 'good';
      break;
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target: target,
    average,
  };
};

try {
  const exerciseValues = parseArg(process.argv);
  console.log(calculateExercises(exerciseValues));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong';
  if (error instanceof Error) {
    errorMessage += error.message;
    console.error(errorMessage);
  }
}

export default calculateExercises;
