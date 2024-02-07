type message = 'normal' | 'underweight' | 'overweight'
const parseAgs = (args: string[]): { height: number; weight: number } => {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}

const calculateBMI = (height: number, weight: number): message => {
  const bmi = weight / (height / 100) ** 2
  if (bmi < 18.5) {
    return 'underweight'
  } else if (bmi < 25) {
    return 'normal'
  } else {
    return 'overweight'
  }
}

try {
  const { height, weight } = parseAgs(process.argv)
  console.log(calculateBMI(height, weight))
} catch (error: unknown) {
  let errorMessage = 'Something went wrong'
  if (error instanceof Error) {
    errorMessage += error.message
    console.error(errorMessage)
  }
}
