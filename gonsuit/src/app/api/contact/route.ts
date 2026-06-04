import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const data = await request.json();

    // 1. Save to Supabase (Database)
    const { error: dbError } = await supabase.from("contacts").insert([
      {
        name: data.name,
        email: data.email,
        category: data.category,
        subject: data.subject,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (dbError) {
      console.error("Supabase Insert Error:", dbError);
    }

    // 2. Send Email Notification via Resend (Notification)
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "고앤슈트 <info@gonsuit.com>", // Verified domain in Resend
          to: "info@gonsuit.com", 
          subject: `[문의접수] ${data.subject}`,
          html: `
            <h3>새로운 협업 문의가 접수되었습니다.</h3>
            <p><strong>이름/회사명:</strong> ${data.name}</p>
            <p><strong>이메일:</strong> ${data.email}</p>
            <p><strong>분류:</strong> ${data.category}</p>
            <p><strong>제목:</strong> ${data.subject}</p>
            <p><strong>내용:</strong></p>
            <div style="white-space: pre-wrap;">${data.message}</div>
          `,
        });
      } catch (mailError: any) {
        console.error("Resend Email Exception:", mailError);
      }
    }

    return NextResponse.json({ success: true, message: "Inquiry received" });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Internal Server Error"
      },
      { status: 500 }
    );
  }
}
