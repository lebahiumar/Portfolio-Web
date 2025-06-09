"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(500, { message: "Message must not exceed 500 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const result = await submitContactForm(data);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="container mx-auto px-4">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card className="shadow-lg border-border/60">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">Send Me a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background/70"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/70"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me how I can help..."
                          className="resize-none bg-background/70 min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full font-headline text-lg py-6 shadow-md" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-5 w-5" /></>}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg border-border/60">
            <CardHeader>
              <CardTitle className="font-headline text-3xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <Link href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    your.email@example.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">LinkedIn</h4>
                  <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/yourusername
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">GitHub</h4>
                  <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    github.com/yourusername
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-muted-foreground text-center">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>
      </div>
    </section>
  );
}
