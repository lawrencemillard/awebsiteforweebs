"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { submitContactForm } from "@/app/actions"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    const result = await submitContactForm(formData)
    setIsSubmitting(false)

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error,
      })
    } else {
      toast({
        title: "Success",
        description: "Message sent successfully!",
      })
      const form = document.getElementById("contact-form") as HTMLFormElement
      form.reset()
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <Input type="text" name="name" placeholder="Your name" required disabled={isSubmitting} />
      <Input type="email" name="email" placeholder="Your email" required disabled={isSubmitting} />
      <Textarea name="message" placeholder="Your message" required disabled={isSubmitting} className="min-h-[150px]" />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

