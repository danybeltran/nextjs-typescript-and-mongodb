import { getUserPreferences } from '@/lib/preferences'

export async function GET() {
  const preferences = await getUserPreferences()

  return Response.json(preferences)
}
