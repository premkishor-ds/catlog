import React from 'react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Wedding Client',
    text: 'Absolutely stunning photos! Captured every moment perfectly. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Corporate Event',
    text: 'Professional, punctual, and delivered exceptional quality. Exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Anita Desai',
    role: 'Portrait Session',
    text: 'The best photographer in Mumbai! Made me feel so comfortable during the shoot.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="bg-bg-section py-20 bg-pattern-dots">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Trusted by Clients
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative border border-gray-100">
              <div className="absolute top-8 right-8 text-primary-100">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.0547 14.3314 14.6593 14.9603 13.8139C15.5891 12.9685 16.8906 12.1818 18.8647 11.454L18.8647 8.5C16.9412 8.5 15.3529 7.89091 14.1 6.67273C12.8471 5.45455 12.2206 3.89091 12.2206 1.98182L9.27941 1.98182C9.27941 2.5 9.22059 3.01818 9.10294 3.53636C8.98529 4.05455 8.92647 4.54545 8.92647 5.00909C8.92647 7.02727 9.48529 8.95455 10.6029 10.7909C11.7206 12.6273 13.75 14.0909 16.6912 15.1818V21H14.017ZM5.15294 21L5.15294 18C5.15294 16.0547 5.46745 14.6593 6.09628 13.8139C6.7251 12.9685 8.02667 12.1818 10 11.454L10 8.5C8.07706 8.5 6.48882 7.89091 5.23529 6.67273C3.98235 5.45455 3.35588 3.89091 3.35588 1.98182L0.414706 1.98182C0.414706 2.5 0.355882 3.01818 0.238235 3.53636C0.120588 4.05455 0.0617647 4.54545 0.0617647 5.00909C0.0617647 7.02727 0.620588 8.95455 1.73824 10.7909C2.85588 12.6273 4.88529 14.0909 7.82647 15.1818V21H5.15294Z" />
                </svg>
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-secondary mb-6 italic leading-relaxed relative z-10">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-bold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
