export async function GET() {
    const dishes = await getMenuData()
    return Response.json(dishes)
}