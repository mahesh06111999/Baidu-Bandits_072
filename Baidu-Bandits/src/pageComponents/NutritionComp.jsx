import { useEffect, useState } from "react";
import { auth, db } from "../auth/firebase";
import { doc, getDoc } from "firebase/firestore";
import CustomSkeleton from "../Components/Skeleton";
import { Box, Heading, VStack, Text, SimpleGrid, Image, Button, Flex } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { nutritionSuggestions } from "../Components/dietCards";

// Nutrition suggestions based on BMI category
// const nutritionSuggestions = {
//   underweight: [
//     {
//       id: 1,
//       imageUrl: 'https://img.freepik.com/free-photo/flexitarian-diet-food-arrangement_23-2148955483.jpg?t=st=1718456682~exp=1718460282~hmac=78e8912128cbb5e0022016d5ab8b9b01d4baa54ac3f24eec7a8b7025e34242fc&w=740',
//       title: 'High-Calorie Foods',
//       description: 'Include high-calorie foods like nuts, avocados, and whole grains in your diet.'
//     },
//     {
//       id: 2,
//       imageUrl: 'https://img.freepik.com/free-vector/ketogenic-diet-woman-composition_1284-64950.jpg?t=st=1718456746~exp=1718460346~hmac=8c6ee06d81020762ccdf1b830aa93e6963b1fb1f604250063a4ae14173ba566d&w=740',
//       title: 'Protein-Rich Diet',
//       description: 'Consume protein-rich foods like lean meats, beans, and dairy products.'
//     }
//   ],
//   fit: [
//     {
//       id: 3,
//       imageUrl: 'https://img.freepik.com/free-photo/top-view-flexitarian-diet-with-fish_23-2148862658.jpg?t=st=1718456766~exp=1718460366~hmac=538d78969ca4dc054908841036fbff053f9370d28a518a8914d809fce7174e5f&w=740',
//       title: 'Balanced Diet',
//       description: 'Maintain a balanced diet with a mix of carbohydrates, proteins, and fats.'
//     },
//     {
//       id: 4,
//       imageUrl: 'https://img.freepik.com/premium-photo/healthy-food-fish-fruits-vegetables-nuts-berries_140916-158.jpg?w=740',
//       title: 'Regular Exercise',
//       description: 'Incorporate regular exercise into your routine to stay fit and healthy.'
//     }
//   ],
//   overweight: [
//     {
//       id: 5,
//       imageUrl: 'https://img.freepik.com/premium-photo/balanced-calorie-intake_810293-154572.jpg?w=826',
//       title: 'Low-Calorie Foods',
//       description: 'Opt for low-calorie foods like fruits, vegetables, and lean proteins.'
//     },
//     {
//       id: 6,
//       imageUrl: 'https://img.freepik.com/free-photo/top-view-mix-vegetables-bowl-chicken-drumstick-with-copy-space_23-2148369700.jpg?t=st=1718457012~exp=1718460612~hmac=31637be7e27b266bdd4f9bd67fd2d14d9dc4ad440c7b5e35859b38418f2500e2&w=740',
//       title: 'Portion Control',
//       description: 'Practice portion control to avoid overeating and manage your weight.'
//     }
//   ],
//   immediate: [
//     {
//       id: 7,
//       imageUrl: 'https://img.freepik.com/free-vector/people-healthy-food_24908-55174.jpg?t=st=1718457037~exp=1718460637~hmac=5c37b0e1f7fb72cf87766b47abe6ab90b69050d05b18b694f372a995f14be19b&w=740',
//       title: 'Consult a Nutritionist',
//       description: 'Seek professional advice from a nutritionist to address your dietary needs.'
//     },
//     {
//       id: 8,
//       imageUrl: 'https://img.freepik.com/premium-photo/high-angle-view-fruits-table_1048944-27499090.jpg?w=740',
//       title: 'Healthy Eating Plan',
//       description: 'Follow a personalized healthy eating plan to improve your health.'
//     }
//   ]
// };

const calculateBMI = (weight, height) => {
  if (weight && height) {
    return (weight / (height * height) * 10000).toFixed(2);
  }
  return null;
};

const categorizeBMI = (bmi) => {
  if (bmi < 18.5) return 'underweight';
  if (bmi >= 18.5 && bmi < 24.9) return 'fit';
  if (bmi >= 25 && bmi < 29.9) return 'overweight';
  return 'immediate';
};

const MotionBox = motion(Box);
const MotionText = motion(Text);

const NutritionCard = ({ card }) => (
  <Box key={card.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
    <Image src={card.imageUrl} alt={card.title} mb={4} />
    <Heading fontSize="xl" mb={2}>{card.title}</Heading>
    <Text>{card.description}</Text>
  </Box>
);

const UserProfile = ({ data, handleCalculateBMI }) => (
  <VStack align="start" spacing={4}>
    <MotionText 
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      Hi {data.fullName}, your height is {data.height} cm, weight is {data.weight} kg, and according to your age and gender, 
      <Box textAlign="center" mt={6}>
        <Image 
          src={data.gender === 'male' 
            ? 'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?t=st=1718468801~exp=1718472401~hmac=96490a369e47555dc8ca3a345b5ad7af34cafc25446f4435dd497a73b4db6912&w=740' 
            : 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg'} 
          alt="User Photo" 
          boxSize="200px" 
          borderRadius="full" 
          objectFit="cover"
          mb={6}
        />
      </Box>
      <Button colorScheme="teal" onClick={handleCalculateBMI} ml={2}>
        calculate BMI
      </Button>
    </MotionText>
  </VStack>
);

const NutritioniComp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);

  useEffect(() => {
    async function fetch() {
      const userId = auth?.currentUser?.uid;
      try {
        if (userId) {
          const raw = await getDoc(doc(db, "user", userId));
          const solved = raw.data();
          console.log(solved);
          setData(solved);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  const handleCalculateBMI = () => {
    if (data) {
      const bmiValue = calculateBMI(data.weight, data.height);
      setBmi(bmiValue);
      setBmiCategory(categorizeBMI(bmiValue));
    }
  };

  return (
    <>
      {loading ? (
        <div style={{ width: "63%" }}>
          <CustomSkeleton />
        </div>
      ) : (
        <div style={{ width: "63%" }} className="nutrition">
          <div className="nutri">
            <h1>Nutritional Wisdom</h1>
            <h5>Your Path to a Healthier Life</h5>
          </div>
          <div className="nutrii-bmi">
            {data && (
              <MotionBox 
                maxW="xl" 
                mx="auto" 
                mt={10} 
                p={6} 
                bg="gray.50" 
                borderRadius="md" 
                boxShadow="lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Heading mb={6} textAlign="center" color="white" bgColor="#10a5bc" p={4}>
                  Personalized Nutrition Suggestions
                </Heading>
                <Flex align="start" spacing={4} direction="column">
                  <UserProfile data={data} handleCalculateBMI={handleCalculateBMI} />
                  
                  {bmi && (
                    <MotionText 
                      initial={{ x: '100vw' }}
                      animate={{ x: 0 }}
                      transition={{ type: 'spring', stiffness: 50 }}
                    >
                      Your calculated BMI is <strong>{bmi}</strong>, which falls under the category of <strong>{bmiCategory}</strong>.
                    </MotionText>
                  )}
                  
                  {bmiCategory && (
                    <>
                      <Heading size="md" mt={6} mb={4}>Nutrition Suggestions</Heading>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                        {nutritionSuggestions[bmiCategory].map(card => (
                          <NutritionCard key={card.id} card={card} />
                        ))}
                      </SimpleGrid>
                    </>
                  )}
                </Flex>
              </MotionBox>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NutritioniComp;
