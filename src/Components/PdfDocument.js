import React from 'react';
import {Document, Page, StyleSheet, View, Text} from "@react-pdf/renderer"

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: '#E4E4E4'
    }
});

function PdfDocument() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text></Text>
                </View>
            </Page>
        </Document>
    );
}

export default PdfDocument;