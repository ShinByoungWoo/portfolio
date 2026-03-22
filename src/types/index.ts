export type GameId = 'typing' | 'isometric' | 'spaceshooter'

export interface GameVideo {
  label: string
  src:   string
}

export interface GameMeta {
  id:          GameId
  title:       string
  description: string
  videos:      GameVideo[]
  tags:        string[]
}
