import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { styles } from "./styles";

const gradePoints = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    "D-": 0.7,
};

const CustomButton = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.customButton, style]}>
                <Text style={styles.customButtonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const CourseForm = ({ onAddCourse }) => {
    const [courseInfo, setCourseInfo] = useState({
        courseName: "",
        creditHours: "0",
        grade: "A+",
    });

    const handleInputChange = (name, value) => {
        setCourseInfo({
            ...courseInfo,
            [name]: value,
        });
    };

    const handleAddCourse = () => {
        const { courseName, creditHours, grade } =
            courseInfo;
        if (
            courseName &&
            parseFloat(creditHours) > 0 &&
            grade
        ) {
            const newCourse = {
                courseName,
                creditHours: parseFloat(creditHours),
                grade,
            };

            onAddCourse(newCourse);
            setCourseInfo({
                courseName: "",
                creditHours: "0",
                grade: "A+",
            });
        } else {
            alert("Please enter valid course details.");
        }
    };

    return (
        <View style={styles.section}>
            <Text style={styles.label}>Course</Text>
            <TextInput
                value={courseInfo.courseName}
                onChangeText={(text) =>
                    handleInputChange("courseName", text)
                }
                style={styles.input}
            />

            <Text style={styles.label}>Credits</Text>
            <TextInput
                value={courseInfo.creditHours}
                onChangeText={(text) =>
                    handleInputChange("creditHours", text)
                }
                keyboardType="numeric"
                style={styles.input}
            />

            <Text style={styles.label}>Grade</Text>
            <RNPickerSelect
                value={courseInfo.grade}
                onValueChange={(value) =>
                    handleInputChange("grade", value)
                }
                style={styles.picker}
                items={Object.keys(gradePoints).map(
                    (key) => ({
                        label: key,
                        value: key,
                    })
                )}
            />

            <CustomButton
                title="Add"
                onPress={handleAddCourse}
                style={[
                    styles.addButton,
                    courseInfo.courseName &&
                    parseFloat(courseInfo.creditHours) >
                        0 &&
                    courseInfo.grade
                        ? styles.addButtonHover
                        : null,
                ]}
            />
        </View>
    );
};

const CourseList = ({
    courses,
    onDeleteCourse,
    calculateGPA,
}) => {
    return (
        <View style={styles.section}>
            <Text style={styles.header}>Course List</Text>
            <ScrollView style={styles.list}>
                <View style={styles.listHeader}>
                    <Text>Course</Text>
                    <Text>Credits</Text>
                    <Text>Grade</Text>
                    <Text>Action</Text>
                </View>
                {courses.map((course, index) => (
                    <View
                        style={styles.listItem}
                        key={index}
                    >
                        <Text>{course.courseName}</Text>
                        <Text>{course.creditHours}</Text>
                        <Text>{course.grade}</Text>
                        <TouchableOpacity
                            style={styles.deletebtn}
                            onPress={() =>
                                onDeleteCourse(index)
                            }
                        >
                            <Text
                                style={styles.deletebtntext}
                            >
                                Delete
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.gpa}>
                GPA: {calculateGPA().toFixed(2)}
            </Text>
        </View>
    );
};

const App = () => {
    const [courses, setCourses] = useState([]);

    const addCourse = (newCourse) => {
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = (index) => {
        const updatedCourses = courses.filter(
            (course, i) => i !== index
        );
        setCourses(updatedCourses);
    };

    const calculateGPA = () => {
        let totalGradePoints = 0;
        let totalCreditHours = 0;

        courses.forEach((course) => {
            totalGradePoints +=
                gradePoints[course.grade] *
                course.creditHours;
            totalCreditHours += course.creditHours;
        });

        return totalCreditHours === 0
            ? 0
            : totalGradePoints / totalCreditHours;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>GPA Calculator</Text>
            <CourseForm onAddCourse={addCourse} />
            <CourseList
                courses={courses}
                onDeleteCourse={deleteCourse}
                calculateGPA={calculateGPA}
            />
        </View>
    );
};

export default App;
