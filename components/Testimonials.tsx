import TestimonialsEditorial from "@/components/ui/testimonials";

type EditorialTestimonial = {
  id: number;
  author: string;
  location: string;
  quote: string;
};

const testimonialData: EditorialTestimonial[] = [
  {
    id: 1,
    author: "Manisha",
    location: "Greater Noida",
    quote:
      "My journey with Kavita began almost 18 months ago and it has been more than just a fitness journey. She has changed my perspective towards life. This has resulted in a healthier, fitter and stronger version of myself. I learned the importance of consistency, discipline and believing in myself. A complete transformation both physically and mentally. Thank you for this. Under her guidance I discovered myself.",
  },

  {
    id: 2,
    author: "Radhika",
    location: "Pune",
    quote:
      "After cancer treatment and chemotherapy, at the age of 49 I struggled with my mental health and weight gain. Teenas’s therapy gave me courage, confidence, and hope. Her guidance helped me rebuild my mental and physical well-being.",
  },

  {
    id: 3,
    author: "Shivani",
    location: "Melbourne, Australia",
    quote:
      "I struggled with PTSD for a long time, which affected my mental health, lifestyle, and weight. Reaching out to Dr. Kavita changed so much for me. Therapy helped me understand and manage my thoughts and emotions, while her kinesiology, movement, nutrition, and fat-loss plan helped me transform physically too. I’m now doing so much better mentally, physically, and emotionally. The mind-body approach truly worked wonders for me.",
  },

  {
    id: 4,
    author: "Alpana Chouhan",
    location: "Wellness client",
    quote:
      "My two-and-a-half-year journey with you has transformed not only my body, but my entire perspective on health. Today, after 50, especially post-menopause, I’ve discovered that physical strength brings mental strength too. Your classes are a complete blend of fitness, knowledge and discipline, always challenging, varied and enjoyable. Fitness is now a true part of my lifestyle. Thank you for making me stronger, more disciplined and more conscious of my health.",
  },

  {
    id: 5,
    author: "Tritha",
    location: "Brunel Medical College, Uxbridge, United Kingdom",
    quote:
      "As a medical student, I always thought I should be able to understand my own body and health. But despite knowing so much, I found myself completely lost and unable to get my life back on track. I was dealing with PCOS, hormonal imbalances, acne, significant weight gain due to my studies and lifestyle, and several other health issues that started affecting both my physical and emotional well-being. I knew something wasn’t right, but I didn’t know how to bring everything back into balance. Meeting her became a turning point for me. With her guidance, personalized nutrition, lifestyle changes, movement, and mental therapy, I slowly began to understand my body, strengthen my mind, and take control of my health. I am deeply grateful to her for guiding me when I felt lost and helping me believe that I could take control of my health again.",
  },

  {
    id: 6,
    author: "Ramandeep Kaur",
    location: "Chandigarh",
    quote:
      "I have so much gratitude for Dr. Kavita. When I first came to her, I didn’t really understand what was happening with my body. I had been struggling with my mental strength, gut issues, emotional stress, and the challenges of perimenopause, and I felt like I was constantly struggling. With her proper guidance, mental therapy, nutrition, and holistic approach, I gradually learned to understand my body and mind better. I worked on my mental strength, managed my perimenopausal symptoms, improved my gut health, and learned how to bring healthier habits into my daily life. Today, I feel more balanced, stronger, happier, and more confident in my relationships and everyday life. I have learned how important a strong mind is for a healthy body. Forever grateful to Dr. Kavita for helping me find my way back to myself.",
  },

  {
    id: 7,
    author: "Zoya",
    location: "London, United Kingdom",
    quote:
      "When I started my journey, I was struggling with PCOS, anemia, excess weight, and daily anxiety related to my body image. It was affecting my confidence and overall quality of life. With her, I followed a complete mental therapy and weight-management plan along with personalized nutrition, movement, and lifestyle guidance. I learned how to manage my thoughts and anxiety while also understanding and taking better care of my body. Today, I feel healthier, stronger, more confident, and much more in control of both my body and my mind.",
  },

  {
    id: 8,
    author: "Dr. Mamatha",
    location: "Newcastle, United Kingdom",
    quote:
      "I started my journey with Kavita two and a half years ago, after she was introduced to me by a good friend. Over these years, I feel I have benefited enormously, not just physically, but emotionally and mentally, and even in my overall outlook towards life. She is disciplined, punctual and completely committed. She goes to great lengths to accommodate my working pattern and lifestyle and very rarely cancels a session. What I value equally is her kindness and the genuine care she brings to her training. One of the biggest changes for me has been moving from a negative body image towards accepting and appreciating my body as it is. She has helped me become stronger, more confident and much more positive about myself. I am extremely grateful to Kavita for being such an important part of my journey.",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-background"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div
          className="
            rounded-[2rem]
            border
            border-sage-dark/10
            bg-[linear-gradient(135deg,rgba(223,238,231,0.75),rgba(255,255,255,0.5))]
            p-5
            shadow-[0_28px_70px_-38px_rgba(23,63,58,0.45)]
            ring-1
            ring-white/60
            sm:p-8
            lg:p-12
          "
        >
          <TestimonialsEditorial
            testimonials={testimonialData}
            autoPlay={true}
            interval={6500}
          />
        </div>
      </div>
    </section>
  );
}