export interface JanneInformation {
  id: string
  name: string
  imageUrl?: string
}

export const janneEntries: JanneInformation[] = [
  {
    id: '1',
    name: 'Janne enjoying the beach',
    imageUrl:
      'https://media.discordapp.net/attachments/879088744299380736/1364944443236683836/raw.png?ex=680b8312&is=680a3192&hm=3ccf65bf4a514004465826c6a717ff04b8cd2305d3767af3e0a4e5b83b4ce41e&=&format=webp&quality=lossless&width=640&height=960',
  },
  {
    id: '2',
    name: 'Janne enjoying a late-night kebab with the ladies',
    imageUrl:
      'https://media.discordapp.net/attachments/879088744299380736/1364945222810734675/raw.png?ex=680b83cc&is=680a324c&hm=75ae49c579abda8373539fdbbd0e2d67be76248b7dd5163a8d6ac3e2fcb78586&=&format=webp&quality=lossless&width=1376&height=917',
  },
]
