//styles.js

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f0f0f0",
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#333",
        margin: 10,
    },
    section: {
        marginBottom: 16,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ced4da",
        shadowColor: "grey",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: "#333",
    },
    input: {
        borderColor: "#ced4da",
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
        fontSize: 16,
        color: "#333",
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#333",
    },
    list: {
        maxHeight: 200,
    },
    listHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginBottom: 10,
        paddingBottom: 10,
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginBottom: 8,
        paddingBottom: 8,
    },
    gpa: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center",
        color: "#333",
    },
    addButton: {
        padding: 9.5,
        backgroundColor: "#fff",
        color: "#1d9bf0",
        borderWidth: 1,
        borderColor: "#1d9bf0",
        borderRadius: 4,
        fontWeight: "bold",
        transition: "0.5s all",
        textAlign: "center",
    },
    addButtonHover: {
        color: "white",
        backgroundColor: "#1d9bf0",
        borderColor: "#1d9bf0",
        borderWidth: 1,
    },
    deletebtn: {
        padding: 9.5,
        color: "#1d9bf0",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "red",
        borderRadius: 15,
    },
    deletebtntext: {
        color: "white",
    },
    picker: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 4,
        color: "black",
        paddingRight: 30,
    },
});

export { styles };
