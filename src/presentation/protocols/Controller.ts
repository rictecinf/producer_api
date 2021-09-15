import { Request, Response } from './http'
export interface Controller{
  handler: (req: Request) => Promise<Response>
}
