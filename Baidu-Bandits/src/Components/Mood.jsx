import React, { useState } from "react";
import FadeMessage from "./FadeMessage";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

export const Mood = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({mood: "Happy",
  exercises: [
    {
      title: "Dance",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6plBotg7gXMXlSHmTjihm9bE2vZFloyvCTfYarFwc4XHmlV3LlkQGY2mZAZHGCXn7qk&usqp=CAU",
      description:
        "Dancing releases endorphins, which enhance your sense of well-being and happiness.",
      howTo:
        "Put on your favorite music and dance freely. Follow a dance routine or just move to the beat for at least 15-20 minutes.",
    },
    {
      title: "Jogging",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pajJ29fFVFn_EcGf6DgYOKdIywEm5Vmhdg&usqp=CAU",
      description:
        "Jogging boosts your cardiovascular health and releases feel-good hormones, keeping your happy mood elevated.",
      howTo:
        "Start with a light warm-up. Jog at a comfortable pace for 20-30 minutes, ensuring you maintain proper posture and breathing.",
    },
  ],});

  const handleSizeClick = (obj) => {
    setData(obj);
    onOpen();
  };

  const moodExercises = [
    {
      mood: "Happy",
      exercises: [
        {
          title: "Dance",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU6plBotg7gXMXlSHmTjihm9bE2vZFloyvCTfYarFwc4XHmlV3LlkQGY2mZAZHGCXn7qk&usqp=CAU",
          description:
            "Dancing releases endorphins, which enhance your sense of well-being and happiness.",
          howTo:
            "Put on your favorite music and dance freely. Follow a dance routine or just move to the beat for at least 15-20 minutes.",
        },
        {
          title: "Jogging",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pajJ29fFVFn_EcGf6DgYOKdIywEm5Vmhdg&usqp=CAU",
          description:
            "Jogging boosts your cardiovascular health and releases feel-good hormones, keeping your happy mood elevated.",
          howTo:
            "Start with a light warm-up. Jog at a comfortable pace for 20-30 minutes, ensuring you maintain proper posture and breathing.",
        },
      ],
    },
    {
      mood: "Sad",
      exercises: [
        {
          title: "Yoga",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfs6JRVDXPt4AYmmGdl25MalRJjF0neGbBCw&usqp=CAU",
          description:
            "Yoga promotes relaxation and mental clarity, which can help lift feelings of sadness.",
          howTo:
            "Follow a beginner-friendly yoga routine focusing on deep breathing and gentle stretches for 20-30 minutes.",
        },
        {
          title: "Walking in Nature",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSa5sLk8FBWQ8gqDIctFfZJyyqdd0QrM12kQ&usqp=CAU",
          description:
            "Walking in nature can reduce negative emotions and improve your mood through exposure to natural surroundings.",
          howTo:
            "Find a park or nature trail and walk at a leisurely pace for 30 minutes. Focus on your surroundings and breathe deeply.",
        },
      ],
    },
    {
      mood: "Stressed",
      exercises: [
        {
          title: "Meditation",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuqaEUA1uWlTcip8S5Z3SxScs_bo-Ni_4sA&usqp=CAU",
          description:
            "Meditation helps calm the mind and reduce stress by promoting mindfulness and deep breathing.",
          howTo:
            "Sit comfortably in a quiet place. Close your eyes and focus on your breath. Inhale slowly through your nose, hold, and exhale through your mouth. Continue for 10-15 minutes.",
        },
        {
          title: "Deep Breathing Exercises",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBxqtMzXZU4a1kEWtatBVO_jXavkYPHXnQQ&usqp=CAU",
          description:
            "Deep breathing exercises activate the parasympathetic nervous system, reducing stress and promoting relaxation.",
          howTo:
            "Sit or lie down in a comfortable position. Inhale deeply through your nose for a count of 4, hold for 4, and exhale through your mouth for a count of 4. Repeat for 5-10 minutes.",
        },
      ],
    },
    {
      mood: "Angry",
      exercises: [
        {
          title: "Boxing",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaRiUcubDSlmIjoxsRG-685EgMB8_Mu8GVA&usqp=CAU",
          description:
            "Boxing provides a physical outlet for anger and helps release pent-up energy and stress.",
          howTo:
            "Use a punching bag or shadow box. Focus on your form and breathing. Punch and move around for 20-30 minutes.",
        },
        {
          title: "High-Intensity Interval Training (HIIT)",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBk5_ZMYBW6mjEDa_x4F64LNx_etedNWaWQ&usqp=CAU",
          description:
            "HIIT workouts burn off excess adrenaline and endorphins, helping to reduce anger and frustration.",
          howTo:
            "Perform a series of high-intensity exercises (like burpees, sprints, or jumping jacks) for 30 seconds each, followed by 15 seconds of rest. Repeat for 15-20 minutes.",
        },
      ],
    },
    {
      mood: "Tired",
      exercises: [
        {
          title: "Gentle Stretching",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUnkgUI-odjYK4KQBvhrXAsZ2x6lUxzC5VA&usqp=CAU",
          description:
            "Gentle stretching helps increase blood flow and relieve muscle tension, reducing feelings of tiredness.",
          howTo:
            "Perform a series of gentle stretches, focusing on major muscle groups. Hold each stretch for 20-30 seconds, breathing deeply.",
        },
        {
          title: "Short Nap Followed by Light Exercise",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcWxaOq70NaFj8GfdrsooYB7hUa8UHDfEHg&usqp=CAU",
          description:
            "A short nap can refresh your mind, followed by light exercise to boost your energy levels.",
          howTo:
            "Take a 20-minute nap, then do light exercises like a brisk walk or easy yoga for 10-15 minutes.",
        },
      ],
    },
    {
      mood: "Neutral",
      exercises: [
        {
          title: "Cycling",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PhsRfS6C-9s6DlsuFi26KafWyuDw00uptA&usqp=CAU",
          description:
            "Cycling is a great way to maintain a balanced mood, providing both physical activity and mental relaxation.",
          howTo:
            "Ride a bike at a moderate pace for 30-45 minutes, ensuring you maintain proper posture and stay hydrated.",
        },
        {
          title: "Swimming",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zP8uNUUKVVP8p4wyC_zVW5QB90fLp0b-iA&usqp=CAU",
          description:
            "Swimming provides a full-body workout and can be very calming, helping to keep your mood balanced.",
          howTo:
            "Swim laps at a comfortable pace for 20-30 minutes, focusing on your technique and breathing.",
        },
      ],
    },
  ];

  return (
    <div className="mood">
      <FadeMessage>
        <div>
          <h1>Mood Inhancer</h1>
          <p>
            Bad mood is not just temporary, It could impact your our physical
            and mental health permanantly. That's why we are here to help you improve you mood.
          </p>
          <p>Tell us how are you feeling ?</p>

          <div className="btn-cont">
            {moodExercises.map((data) => (
              <button onClick={() => handleSizeClick(data)} key={data.mood}>
                {data.mood}
              </button>
            ))}
            {/* mpdel............. */}
            
          </div>
        </div>
      </FadeMessage>
      <Modal onClose={onClose} size='3xl' isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Do this to improve your mood</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <div className="modalCont">
                  {data.exercises.map((item)=>(
                    <div key={item.title} className="modalCard">
                        <img className="modalImg" src={item.image} alt="" />
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
            
                        <p><b>How: </b>{item.howTo}</p>
                    </div>
                  ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
    </div>
  );
};
