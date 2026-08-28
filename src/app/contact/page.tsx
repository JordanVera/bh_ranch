import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MapPin, Camera, Globe, Clock, Mail } from 'lucide-react';
import InquiryForm from '@/components/contact/InquiryForm';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Contact | ${COMPANY.name}`,
  description:
    'Get in touch with Thistle & Grace Design to discuss wedding florals, event rentals, and floral design for your Houston celebration.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/contact-showroom.jpg"
          alt="Visit Thistle & Grace Design showroom"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#A88D2E] text-[10px] tracking-[0.4em] uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#A88D2E] text-[10px] tracking-[0.35em] uppercase mb-4">
                Visit Our Showroom
              </p>
              <h2 className="font-serif text-foreground text-3xl sm:text-4xl">
                Let&apos;s Create Something Beautiful
              </h2>
              <p className="text-foreground/60 mt-4 leading-relaxed">
                Ready to bring your vision to life? Fill out the form and our
                team will reach out to discuss your event and floral design
                needs.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-[#A88D2E]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#A88D2E] transition-colors">
                    <Phone size={14} className="text-[#A88D2E]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                      Phone
                    </p>
                    <p className="text-foreground group-hover:text-[#A88D2E] transition-colors">
                      {COMPANY.phone}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-[#A88D2E]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#A88D2E] transition-colors">
                    <Mail size={14} className="text-[#A88D2E]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                      Email
                    </p>
                    <p className="text-foreground group-hover:text-[#A88D2E] transition-colors">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#A88D2E]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#A88D2E]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                    Showroom
                  </p>
                  <p className="text-foreground">
                    {COMPANY.address}
                    <br />
                    {COMPANY.city}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#A88D2E]/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-[#A88D2E]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">
                    Response Time
                  </p>
                  <p className="text-foreground">Within 24 business hours</p>
                </div>
              </li>
            </ul>

            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 mb-4">
                Follow Along
              </p>
              <div className="flex gap-3">
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#A88D2E]/50 text-foreground/60 hover:text-[#A88D2E] text-xs tracking-wide transition-all"
                >
                  <Camera size={13} />
                  Instagram
                </a>
                <a
                  href={COMPANY.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#A88D2E]/50 text-foreground/60 hover:text-[#A88D2E] text-xs tracking-wide transition-all"
                >
                  <Globe size={13} />
                  Facebook
                </a>
              </div>
            </div>

            <div className="overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.2!2d-95.456!3d29.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c6b8e8e8e8e8%3A0x0!2s4930%20Dacoma%20St%20Suite%20F%2C%20Houston%2C%20TX%2077092!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thistle & Grace Design location"
              />
            </div>
          </div>

          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-serif text-foreground text-2xl mb-2">
              Send an Inquiry
            </h3>
            <p className="text-foreground/50 text-sm mb-8">
              Tell us about your event and we&apos;ll be in touch to discuss
              your floral design vision.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
