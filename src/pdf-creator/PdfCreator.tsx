"use client";

import { pdf } from "@react-pdf/renderer";
import { UniversalOrderType } from "@/backend/types/universal.types";
import {renderCulinaryPDF} from "@/pdf-creator/culinary-course/CulinaryRenderer";

export async function downloadUniversalPDF(order: UniversalOrderType) {
    if (order.fields?.domain !== "culinary") {
        throw new Error("Unsupported PDF domain");
    }

    const doc = renderCulinaryPDF(order);
    const blob = await pdf(doc).toBlob();

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `culinary-course-${order.fields.topic}.pdf`;
    a.click();

    URL.revokeObjectURL(url);
}