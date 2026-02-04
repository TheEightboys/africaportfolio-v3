import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    }

    // Send notification to Africa Economic Forum team
    const emailData = {
      from: 'Africa Economic Forum <info@africaef.com>',
      to: ['info@africaef.com'],
      reply_to: email,
      subject: `📬 New Contact Form Message: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Message</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📬 New Contact Form Message</h1>
          </div>
          
          <div style="background: #ffffff; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <div style="background: #dbeafe; border-left: 4px solid #1e3a8a; padding: 20px; border-radius: 4px; margin-bottom: 30px;">
              <p style="margin: 0; color: #1e3a8a; font-weight: bold; font-size: 16px;">
                You have received a new message from your website contact form.
              </p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr>
                <td style="padding: 15px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold; width: 30%;">
                  👤 Name:
                </td>
                <td style="padding: 15px; background: white; border: 1px solid #e5e7eb;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold;">
                  📧 Email:
                </td>
                <td style="padding: 15px; background: white; border: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #1e3a8a; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold;">
                  📋 Subject:
                </td>
                <td style="padding: 15px; background: white; border: 1px solid #e5e7eb;">
                  ${subject}
                </td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold; vertical-align: top;">
                  💬 Message:
                </td>
                <td style="padding: 15px; background: white; border: 1px solid #e5e7eb;">
                  <div style="white-space: pre-wrap; word-wrap: break-word;">${message}</div>
                </td>
              </tr>
              <tr>
                <td style="padding: 15px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: bold;">
                  📅 Received:
                </td>
                <td style="padding: 15px; background: white; border: 1px solid #e5e7eb;">
                  ${new Date().toLocaleString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    timeZoneName: 'short'
                  })}
                </td>
              </tr>
            </table>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <p style="margin: 0; color: #92400e;">
                <strong>💡 Quick Action:</strong> You can reply directly to this email to respond to ${name} at ${email}
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                 style="background: #1e3a8a; color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Reply to ${name}
              </a>
            </div>
            
            <p style="font-size: 12px; color: #9ca3af; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
              This is an automated notification from your Africa Economic Forum contact form.
            </p>
          </div>
        </body>
        </html>
      `,
    }

    // Send email notification using Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailData),
    })

    if (res.ok) {
      const data = await res.json()
      console.log('Contact notification email sent successfully:', data)
      
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Contact notification sent successfully',
          emailId: data.id
        }),
        { 
          status: 200,
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      )
    } else {
      const error = await res.text()
      console.error('Error sending contact notification:', error)
      throw new Error(error)
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({
        error: 'Failed to process contact form submission',
        details: error.message
      }),
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
  }
})
