const urlify: (str: string) => (string) = (str: string) => str.toLowerCase().replace(/ /g, '-')

export default urlify