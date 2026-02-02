import { StyleSheet } from "@react-pdf/renderer";

const colors = {
    primary: "#14532D",
    accent: "#16A34A",
    light: "#FDF6E3",
    text: "#1F2937",
    muted: "#6B7280",
    border: "#D1D5DB",
};

export const culinaryTheme = StyleSheet.create({
    page: {
        padding: 50,
        backgroundColor: colors.light,
        fontFamily: "Helvetica",
        fontSize: 11.5,
        lineHeight: 1.6,
        color: colors.text,
    },

    header: {
        borderBottomWidth: 2,
        borderBottomColor: colors.accent,
        paddingBottom: 12,
        marginBottom: 22,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.primary,
    },

    meta: {
        marginTop: 6,
        fontSize: 10,
        color: colors.muted,
    },

    sectionTitle: {
        marginTop: 20,
        marginBottom: 8,
        fontSize: 14,
        fontWeight: "bold",
        color: colors.accent,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 4,
        textTransform: "uppercase",
    },

    paragraph: {
        fontSize: 11.3,
        marginBottom: 8,
        lineHeight: 1.7,
    },

    list: {
        marginBottom: 6,
    },

    bulletItem: {
        fontSize: 11.3,
        marginBottom: 4,
        paddingLeft: 14,
        lineHeight: 1.5,
    },

    boldInline: {
        fontWeight: "bold",
        color: colors.primary,
    },

    chefNoteBox: {
        marginTop: 14,
        padding: 12,
        backgroundColor: "#ECFDF5",
        borderLeftWidth: 4,
        borderLeftColor: colors.accent,
        borderRadius: 4,
    },

    chefNoteTitle: {
        fontSize: 11,
        fontWeight: "bold",
        color: colors.primary,
        marginBottom: 6,
    },

    footer: {
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        paddingTop: 10,
        textAlign: "center",
    },

    footerText: {
        fontSize: 9,
        color: colors.muted,
    },
});