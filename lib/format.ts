export function fmtReference(book: string, chapter: number, verse: number, version: string): string {
  return `${book} ${chapter}:${verse} (${version})`
}

export function fmtAnswer(citation: string, verseText: string, care: string): string {
  const pre = care ? `${care} ` : ""
  return `${pre}根据${citation}，经文是这样说的："${verseText}"。`
}

