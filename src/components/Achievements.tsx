import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Top 50 Winner – Niral Thiruvizha Innovation Festival 2025",
      description: "Advanced through Top 1000 → Top 150 → Top 50 teams in the state-level innovation festival. This journey taught resilience, teamwork, and learning under pressure while building a complete solution from scratch.",
      image: "/src/assets/niral.jpg"
    },
    {
      title: "Unstop Java Programming Quiz – National Rank 71",
      description: "Recognized by Prasad V. Potluri Siddhartha Institute of Technology (PVPSIT CSE Department), Andhra Pradesh, for securing 71st rank in the nationwide Unstop Java Programming Quiz. A milestone that reflects continuous learning and a strong commitment to excellence.",
      image: "/src/assets/unstop.png"
    },
    {
      title: "Crew Matrix Byte Battle & Quiz – Top 1% Nationwide",
      description: "Secured a position in the top 1% among 600+ participants in Crew Matrix's Byte Battle, Business Quiz, and Technical Quiz competitions. Gained hands-on experience solving complex coding challenges, business case questions, and technical problem-solving scenarios.",
      image: "/src/assets/crew matrix.jpg"
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Recognition for excellence in coding, innovation, and teamwork
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="mb-4 rounded-lg">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-48 object-contain rounded-lg transition-all duration-500 hover:scale-150 hover:z-10 relative"
                  style={{ transformOrigin: 'center' }}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;