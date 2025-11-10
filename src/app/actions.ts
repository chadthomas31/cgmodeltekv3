"use server";

type RFQFormState = { success: boolean; error?: string; message?: string } | null;

export async function submitRFQ(
  prevState: RFQFormState,
  formData: FormData,
): Promise<RFQFormState> {
  // Extract form data
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    company: formData.get("company") as string,
    title: formData.get("title") as string,
    details: formData.get("details") as string,
    timeline: formData.get("timeline") as string,
    budget: formData.get("budget") as string,
  };

  // Validate required fields
  if (!data.name || data.name.trim().length < 2) {
    return {
      success: false,
      error: "Please enter a valid name (at least 2 characters)",
    };
  }

  if (!data.email || data.email.trim().length === 0) {
    return {
      success: false,
      error: "Email address is required",
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      error: "Please enter a valid email address",
    };
  }

  if (!data.title || data.title.trim().length < 5) {
    return {
      success: false,
      error: "Please provide a project title (at least 5 characters)",
    };
  }

  if (!data.details || data.details.trim().length < 10) {
    return {
      success: false,
      error: "Please provide more details about your project (at least 10 characters)",
    };
  }

  // Phone validation (optional, but validate format if provided)
  if (data.phone && data.phone.trim().length > 0) {
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
      return {
        success: false,
        error: "Please enter a valid phone number",
      };
    }
  }

  // TODO: Implement actual email sending or API integration
  // For now, simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // In production, you would:
  // 1. Send email via SendGrid, Resend, or similar service
  // 2. Store in database (Postgres, MongoDB, etc.)
  // 3. Send notification to sales team
  // 4. Add to CRM system
  console.log("RFQ Submission:", data);

  // Return success
  return {
    success: true,
    message: "Thank you! We've received your request and will contact you within 24 hours.",
  };
}
