module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/app/api/submit-form/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // app/api/submit-form/route.js
// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';
// export async function POST(request) {
//   try {
//     const { name, email, message } = await request.json();
//     // Validate required fields
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'All fields (name, email, message) are required.'
//         },
//         { status: 400 }
//       );
//     }
//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Please provide a valid email address.'
//         },
//         { status: 400 }
//       );
//     }
//     // Validate field lengths
//     if (name.length < 2 || name.length > 100) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Name must be between 2 and 100 characters.'
//         },
//         { status: 400 }
//       );
//     }
//     if (message.length < 10 || message.length > 1000) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: 'Message must be between 10 and 1000 characters.'
//         },
//         { status: 400 }
//       );
//     }
//     // Create transporter for sending emails
//     const transporter = nodemailer.createTransporter({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
//     // Email content for you (notification)
//     const notificationEmail = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
//             New Contact Form Submission
//           </h2>
//           <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//           </div>
//           <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff;">
//             <h3 style="color: #333; margin-top: 0;">Message:</h3>
//             <p style="line-height: 1.6; color: #555;">${message}</p>
//           </div>
//           <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 8px;">
//             <p style="margin: 0; color: #666; font-size: 14px;">
//               <strong>Submitted:</strong> ${new Date().toLocaleString()}
//             </p>
//           </div>
//         </div>
//       `,
//     };
//     // Auto-reply email for the sender
//     const autoReplyEmail = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Thank you for contacting Dr. Olaosebikan Favour',
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
//             Thank You for Your Message!
//           </h2>
//           <p style="font-size: 16px; color: #333; line-height: 1.6;">
//             Hi ${name},
//           </p>
//           <p style="font-size: 16px; color: #333; line-height: 1.6;">
//             Thank you for reaching out! I've received your message and will get back to you as soon as possible, typically within 24-48 hours.
//           </p>
//           <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <h3 style="color: #007bff; margin-top: 0;">Your Message:</h3>
//             <p style="color: #555; font-style: italic;">"${message}"</p>
//           </div>
//           <div style="margin-top: 30px; padding: 20px; background-color: #007bff; border-radius: 8px; text-align: center;">
//             <p style="margin: 0; color: white; font-size: 16px;">
//               Best regards,<br>
//               <strong>Dr. Olaosebikan Favour</strong>
//             </p>
//           </div>
//         </div>
//       `,
//     };
//     // Send both emails
//     await Promise.all([
//       transporter.sendMail(notificationEmail),
//       transporter.sendMail(autoReplyEmail)
//     ]);
//     console.log(`New contact form submission from ${name} (${email}) at ${new Date().toISOString()}`);
//     return NextResponse.json({
//       success: true,
//       message: 'Thank you for your message! I will get back to you soon.'
//     });
//   } catch (error) {
//     console.error('Contact form submission error:', error);
//     return NextResponse.json(
//       {
//         success: false,
//         message: 'Sorry, there was an error sending your message. Please try again later.'
//       },
//       { status: 500 }
//     );
//   }
// }
// export async function OPTIONS() {
//   return new NextResponse(null, {
//     status: 200,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'POST, OPTIONS',
//       'Access-Control-Allow-Headers': 'Content-Type',
//     },
//   });
// }
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nodemailer$40$7$2e$0$2e$10$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nodemailer@7.0.10/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;
        if (!name || !email || !message) {
            return Response.json({
                success: false,
                error: "All fields are required."
            }, {
                status: 400
            });
        }
        // --- Email Transporter ---
        const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nodemailer$40$7$2e$0$2e$10$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        // --- Email Content ---
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
        };
        // --- Send Email ---
        await transporter.sendMail(mailOptions);
        return Response.json({
            success: true,
            message: "Your message was sent successfully!"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Email error:", error);
        return Response.json({
            success: false,
            error: "Sorry, something went wrong while sending your message."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f0d03b5c._.js.map