'use client';

import { motion } from 'framer-motion';

const features = [
    {
      icon: '📊',
      title: 'AI-Powered Forecasting',
      description: 'Our algorithm learns from successful (and failed) projects.',
    },
    {
      icon: '⚙️',
      title: 'Real-World Parameters',
      description: 'Based on practical factors like budget, risk, and client involvement.',
    },
    {
      icon: '⏱️',
      title: 'Fast Results',
      description: "Predict your project's chances in under 10 seconds.",
    },
    {
      icon: '💡',
      title: 'Actionable Tips',
      description: 'Get suggestions tailored to your scenario.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

const Features = () => {
    return ( 
    <section className="w-full bg-white py-20 px-4 flex justify-center">
      <div className="max-w-[1400px] w-full">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#f7f9fc] p-6 rounded-xl shadow-lg text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              custom={index}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;