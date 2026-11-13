import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, eventType, eventDate, city, message } = body;

    // Validate essential fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    // Log inquiry for studio dashboard / records
    console.log("[INQUIRY_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name,
      phone,
      eventType,
      eventDate,
      city,
      message,
    });

    // In production, owner can plug in Formspree, Resend, or Google Sheets Webhook here!
    return NextResponse.json({
      success: true,
      message: "Inquiry recorded successfully. Proceeding to WhatsApp.",
      data: { name, phone, eventType, eventDate, city },
    });
  } catch (error) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json(
      { error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}

