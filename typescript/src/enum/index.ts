enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book,
}

export function getMedia(mediaName: string): PrintMedia {
  if (mediaName === 'Forbes' || mediaName === 'Outlook') {
    return PrintMedia.Magazine
  }

  return PrintMedia.Newsletter
}
