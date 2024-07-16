// app/api/subscribe/route.js
import { Resend } from "resend";
import React from "react";
import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  try {
    const { email } = await req.json();
    const from = "no-reply@mailblitz.io"; // Your verified domain
    const subject = "Coming Soon: Mail Blitz";
    const firstName = "Subscriber";
    const message =
      "Thank you for subscribing! Stay tuned for more updates on Mail Blitz.";

    if (!email || !from || !subject || !firstName || !message) {
      throw new Error("Missing required fields");
    }

    console.log("Sending email with data:", {
      email,
      from,
      subject,
      firstName,
      message,
    });

    const { data, error } = await resend.emails.send({
      from,
      to: [email],
      subject,
      react: React.createElement(EmailTemplate, { firstName, message }),
    });

    if (error) {
      console.error("Error from Resend API:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/subscribe:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
