interface Multiplier {
  value1: number
  value2: number
}

const parseArgs = (args: string[]): Multiplier => {
  if (args.length < 4) throw new Error('Not enough arguments')
  if (args.length > 4) throw new Error('Too many arguments')

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3]),
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}
const multiplier = (a: number, b: number, printText: string) => {
  console.log(a * b)
}

try {
  const { value1, value2 } = parseArgs(process.argv)
  multiplier(
    value1,
    value2,
    `Multiplied ${value1} and ${value2}, the result is:`,
  )
} catch (error: unknown) {
  let errorMessage = 'Something went wrong'
  if (error instanceof Error) {
    errorMessage += error.message
    console.error(errorMessage)
  }
}
