import { type NextRequest, NextResponse } from "next/server";
		
export async function GET(
    req: NextRequest
) {
    // If token is valid, proceed with the API logic
    const authToken = req.headers.get("authorization")?.replace("Bearer ", "");
    
    if (authToken !== process.env.CRON_SECRET) {
        return NextResponse.json(
            { error: "Unauthorized access. Invalid token." },
            { status: 401 }
        );
    }
		
    return NextResponse.json(
        { message: "Secure API accessed successfully" },
        { status: 200 }
    );
}
