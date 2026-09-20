import { Testimonials as TestimonialSection } from "@/components/ui/testimonials";

const testimonialData = [
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    name: "Manisha",
    username: "Greater Noida",
    text:
      "My journey with Kavita began almost 18 months ago and it has been more than just a fitness journey. She has changed my perspective towards life. This has resulted in a healthier, fitter and stronger version of myself. I learned the importance of consistency, discipline and believing in myself. A complete transformation both physically and mentally! Thank you for this. Under her guidance I discovered myself.",
    social: "https://www.instagram.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    name: "Radhika",
    username: "Pune",
    text:
      "After cancer treatment and chemotherapy, at the age of 49 I struggled with my mental health and weight gain. Teenas’s therapy gave me courage, confidence, and hope. Her guidance helped me rebuild my mental and physical well-being.",
    social: "https://www.instagram.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80",
    name: "Shivani",
    username: "Melbourne, Australia",
    text:
      "I struggled with PTSD for a long time, which affected my mental health, lifestyle, and weight. Reaching out to Dr. Kavita changed so much for me. Therapy helped me understand and manage my thoughts and emotions, while her kinesiology, movement, nutrition, and fat-loss plan helped me transform physically too. I’m now doing so much better mentally, physically, and emotionally. The mind-body approach truly worked wonders for me.",
    social: "https://www.instagram.com/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=400&q=80",
    name: "Alpana Chouhan",
    username: "Wellness client",
    text:
      "My two-and-a-half-year journey with you has transformed not only my body, but my entire perspective on health. Today, after 50, especially post-menopause, I’ve discovered that physical strength brings mental strength too. Your classes are a complete blend of fitness, knowledge and discipline — always challenging, varied and enjoyable. Fitness is now a true part of my lifestyle. Thank you for making me stronger, more disciplined and more conscious of my health. ❤️",
    social: "https://www.instagram.com/",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="rounded-[2rem] border border-sage-dark/10 bg-[linear-gradient(135deg,rgba(223,238,231,0.8),rgba(255,255,255,0.42))] p-4 shadow-[0_28px_70px_-38px_rgba(23,63,58,0.5)] ring-1 ring-white/60 sm:p-6 lg:p-8">
          <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.72),_rgba(255,255,255,0.12)_55%,_transparent_80%)] p-2 sm:p-3 lg:p-4">
            <TestimonialSection
              testimonials={testimonialData}
              className="mt-0"
              title="What our community says"
              description="Kind words from people who wanted a calmer, more confident wellness experience."
              maxDisplayed={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
