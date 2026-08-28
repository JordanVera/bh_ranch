"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  eventType: z.enum(["wedding", "corporate", "social", "other", ""], {
    required_error: "Please select an event type",
  }),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Please tell us a little about your event"),
});

type FormValues = z.infer<typeof schema>;

export default function InquiryForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    router.push("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="Jane Smith"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-destructive text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@example.com"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-destructive text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(832) 555-0000"
            {...register("phone")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="eventType">Event Type *</Label>
          <select
            id="eventType"
            {...register("eventType")}
            className="flex h-8 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">— Select —</option>
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event / Gala</option>
            <option value="social">Social Celebration</option>
            <option value="other">Other</option>
          </select>
          {errors.eventType && (
            <p className="text-destructive text-xs">
              {errors.eventType.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="eventDate">Event Date</Label>
        <Input id="eventDate" type="date" {...register("eventDate")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell Us About Your Event *</Label>
        <Textarea
          id="message"
          placeholder="Share details about your event — type, guest count, date, and any special requests..."
          rows={5}
          {...register("message")}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && (
          <p className="text-destructive text-xs">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#A88D2E] text-black hover:bg-[#bda962] transition-colors text-xs tracking-[0.2em] uppercase h-12 rounded-none"
      >
        {loading ? (
          <>
            <Loader2 size={14} className="animate-spin mr-2" />
            Sending...
          </>
        ) : (
          "Send Inquiry"
        )}
      </Button>

      <p className="text-center text-foreground/35 text-xs">
        We typically respond within 24 business hours.
      </p>
    </form>
  );
}
