"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/actions/contact";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <form action={formAction} className="flex flex-col gap-8">
      <div>
        <label className="block text-[11px] font-bold text-secondaryBlack mb-2 uppercase tracking-widest">Full Name</label>
        <input name="fullName" type="text" placeholder="Your name" required className="w-full bg-transparent border-b border-gray-300 py-3 text-sm text-secondaryBlack font-medium focus:outline-none focus:border-[#006D40] transition-colors placeholder:text-gray-400 placeholder:font-normal" />
      </div>
      <div>
        <label className="block text-[11px] font-bold text-secondaryBlack mb-2 uppercase tracking-widest">Email Address</label>
        <input name="email" type="email" placeholder="Your email address" required className="w-full bg-transparent border-b border-gray-300 py-3 text-sm text-secondaryBlack font-medium focus:outline-none focus:border-[#006D40] transition-colors placeholder:text-gray-400 placeholder:font-normal" />
      </div>
      <div>
        <label className="block text-[11px] font-bold text-secondaryBlack mb-2 uppercase tracking-widest">Message</label>
        <textarea name="message" placeholder="Write something..." rows={4} required className="w-full bg-transparent border-b border-gray-300 py-3 text-sm text-secondaryBlack font-medium focus:outline-none focus:border-[#006D40] transition-colors placeholder:text-gray-400 placeholder:font-normal resize-none"></textarea>
      </div>
      
      {state?.error && (
        <p className="text-red-500 text-sm font-medium">{state.error}</p>
      )}
      {state?.success && (
        <p className="text-[#006D40] text-sm font-semibold">Message sent successfully! We will get back to you soon.</p>
      )}

      <button type="submit" disabled={isPending} className="group w-full h-11 inline-flex items-start justify-center overflow-hidden rounded-[4px] bg-gradient-to-br from-lightGreen from-15% via-gradientGreen2 via-55% to-gradientGreen1 px-5 text-base font-semibold text-white shadow-sm transition-opacity duration-300 hover:opacity-90 mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
        <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
          <span className="flex h-11 shrink-0 items-center justify-center text-white">
            {isPending ? "Sending..." : "Send Message"}
          </span>
          <span className="flex h-11 shrink-0 items-center justify-center text-white">
            {isPending ? "Sending..." : "Send Message"}
          </span>
        </span>
      </button>
    </form>
  );
}
