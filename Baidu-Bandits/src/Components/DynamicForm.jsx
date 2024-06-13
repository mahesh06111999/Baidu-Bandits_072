// src/components/DynamicForm.js
// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateForm, resetForm } from '../redux/formSlice';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  CheckboxGroup,
  Checkbox,
  Button,
  Stack,
  Box,
  Heading,
} from '@chakra-ui/react';

const DynamicForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ [name]: value }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    dispatch(updateForm({ [name]: selectedValues }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(resetForm());
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <Heading mb={4} >Enter details</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          </FormControl>

          <FormControl id="age" isRequired>
            <FormLabel>Age</FormLabel>
            <Select name="age" value={formData.age} onChange={handleChange}>
              {Array.from({ length: 53 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl id="gender" isRequired>
            <FormLabel>Gender</FormLabel>
            <Select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
            </Select>
          </FormControl>

          <FormControl id="country" isRequired>
            <FormLabel>Country</FormLabel>
            <Select name="country" value={formData.country} onChange={handleChange}>
              {['Australia', 'Belgium', 'Canada', 'Denmark', 'France', 'Germany', 'India', 'Japan', 'Netherlands', 'Switzerland'].map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl id="weight" isRequired>
            <FormLabel>Weight</FormLabel>
            <Input type="number" name="weight" value={formData.weight} onChange={handleChange} />
          </FormControl>

          <FormControl id="healthIssues">
            <FormLabel>Any Health Issues</FormLabel>
            <Textarea name="healthIssues" value={formData.healthIssues} onChange={handleChange} />
          </FormControl>

          <FormControl id="profession" isRequired>
            <FormLabel>Profession</FormLabel>
            <Select name="profession" value={formData.profession} onChange={handleChange}>
              <option value="">Select</option>
              <option value="it">IT</option>
              <option value="teacher">Teacher</option>
              <option value="businessman">Businessman</option>
              <option value="doctor">Doctor</option>
              <option value="engineer">Engineer</option>
              <option value="lawyer">Lawyer</option>
              <option value="artist">Artist</option>
              <option value="student">Student</option>
            </Select>
          </FormControl>

          <FormControl id="waterIntake" isRequired>
            <FormLabel>Water Intake</FormLabel>
            <Select name="waterIntake" value={formData.waterIntake} onChange={handleChange}>
              <option value="">Select</option>
              <option value="1-2">1-2 liters</option>
              <option value="2-4">2-4 liters</option>
              <option value="4-6">4-6 liters</option>
              <option value="6-8">6-8 liters</option>
              <option value="8-10">8-10 liters</option>
            </Select>
          </FormControl>

          <FormControl id="exercise" isRequired>
            <FormLabel>Exercise</FormLabel>
            <CheckboxGroup name="exercise" value={formData.exercise} onChange={(values) => dispatch(updateForm({ exercise: values }))}>
              <Stack>
                <Checkbox value="cycling">Cycling</Checkbox>
                <Checkbox value="swimming">Swimming</Checkbox>
                <Checkbox value="running">Running</Checkbox>
                <Checkbox value="weightlifting">Weightlifting</Checkbox>
                <Checkbox value="yoga">Yoga</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          <FormControl id="yoga" isRequired>
            <FormLabel>Yoga</FormLabel>
            <CheckboxGroup name="yoga" value={formData.yoga} onChange={(values) => dispatch(updateForm({ yoga: values }))}>
              <Stack>
                <Checkbox value="hatha">Hatha</Checkbox>
                <Checkbox value="vinyasa">Vinyasa</Checkbox>
                <Checkbox value="kundalini">Kundalini</Checkbox>
              </Stack>
            </CheckboxGroup>
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default DynamicForm;
