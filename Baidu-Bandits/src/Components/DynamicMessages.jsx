import React, { useState, useEffect } from 'react';


const messagesArray = [
    "Practice deep breathing exercises daily to promote relaxation and reduce stress.",
    "Take regular breaks from screens to rest your mind and prevent eye strain.",
    "Engage in exercise for 30 minutes each day to improve mood and boost energy levels.",
    "Keep a gratitude journal to focus on positives and cultivate a thankful mindset daily.",
    "Connect with loved ones regularly for emotional support and social interaction.",
    "Explore new hobbies or activities for mental stimulation and personal growth.",
    "Meditate for 10 minutes daily to reduce stress and enhance mindfulness.",
    "Spend time in nature for mental refreshment and a sense of calm.",
    "Set realistic goals to maintain motivation and a sense of accomplishment.",
    "Limit caffeine intake to avoid energy crashes and promote better sleep.",
    "Get enough sleep each night to support mental clarity and overall well-being.",
    "Practice mindfulness during daily activities to stay present and reduce anxiety.",
    "Seek professional help if feeling overwhelmed or unable to cope.",
    "Listen to soothing music for relaxation and stress relief.",
    "Eat nutritious meals to support physical health and mental well-being.",
    "Laugh often to reduce stress hormones and improve mood.",
    "Learn to say no to avoid overcommitment and manage stress levels.",
    "Practice forgiveness to let go of negativity and promote emotional healing.",
    "Express gratitude daily to boost mood and gain perspective.",
    "Engage in acts of kindness to promote positivity and build social connections.",
    "Challenge negative thoughts with positive affirmations and self-talk.",
    "Create a calming bedtime routine for better sleep quality and relaxation.",
    "Avoid excessive alcohol consumption for mental clarity and emotional stability.",
    "Journal your thoughts and emotions regularly to process feelings and gain insights.",
    "Practice deep listening in conversations to foster understanding and empathy.",
    "Learn relaxation techniques like progressive muscle relaxation for stress relief.",
    "Take breaks in nature to clear your mind and rejuvenate your spirit.",
    "Attend support groups for shared experiences and encouragement in difficult times."
  ];

const Messages = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messagesArray.length);
    }, 12000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="messages-container">
      {messagesArray.map((message, index) => (
        <div 
          key={index}
          className={`message ${index === currentMessageIndex ? 'visible' : ''}`}
        >
          {message}
        </div>
      ))}
    </div>
  );
};

export default Messages;
