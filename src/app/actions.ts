"use server";

import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

interface SubmitContactFormResponse {
  success: boolean;
  error?: string;
  data?: { name: string; email: string; message: string };
}

export async function submitContactForm(
  formData: z.infer<typeof contactFormSchema>
): Promise<SubmitContactFormResponse> {
  const validatedFields = contactFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      error: "Invalid form data. Please check your inputs.",
    };
  }

  const { name, email, message } = validatedFields.data;

  // In a real application, you would process the form data here,
  // e.g., send an email, save to a database, etc.
  // For this example, we'll just log it and simulate success.
  console.log("Contact form submission received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Simulate a delay for network request
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate potential errors (uncomment to test error handling)
  // if (Math.random() > 0.7) {
  //   return { success: false, error: "A simulated server error occurred." };
  // }

  return {
    success: true,
    data: { name, email, message },
  };
}
