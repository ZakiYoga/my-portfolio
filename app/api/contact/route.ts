import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { contactFormSchema } from "@/lib/validations/contact";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the request body
    const validatedDate = contactFormSchema.parse(body);

    // Save to database
    const contact = await prisma.contact.create({
        data: validatedDate
    });

    return NextResponse.json({ 
        success: true,
        data: contact
    }, { status: 201 });
  } catch (error) {
    console.error('Database Error: ', error);
    return NextResponse.json({
        success: false,
        error: 'Failed to submit contact form'
    }, { status: 500 });
  }
}