import { db, cartTable } from "../../../lib/drizzle";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import { cookies } from "next/dist/client/components/headers";

export const GET = async (request: Request) => {
  const userId = cookies().get("user_id")?.value as string;
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, userId));
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const POST = async (request: Request) => {
  const req = await request.json();
  const uid = uuid();
  const setCookies = cookies();

  const userId = cookies().get("user_id");

  if (!userId) {
    setCookies.set("user_id", uid);
  }
  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    console.log("res", res);
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
