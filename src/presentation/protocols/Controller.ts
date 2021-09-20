import { Request, Response } from '@/presentation/protocols/http'
export interface Controller{
  handler: (req: Request) => Promise<Response>
}
