export const slugify = (str: string, separator = "-"): string => str
    .toLowerCase()
    .replace(/[^\w\s]+/g, " ")
    .trim()
    .replace(/ +/g, separator)

export const random = (min: number, max: number): number => Math.random() * (max - min) + min
