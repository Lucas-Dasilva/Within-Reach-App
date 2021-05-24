export interface IPost {
  id: number,
  body: string,
  likes: number,
  latitude: string,
  longitude: string,
  timestamp: string,
  user_id: number,
  distance: number
  reply_count: number
}