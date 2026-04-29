import mongoose, { Document, Schema } from "mongoose";

export type WhitegalloPaymentStatus =
    | "pending"
    | "processing"
    | "paid"
    | "failed"
    | "cancelled";

export interface WhitegalloPaymentDocument extends Document {
    userId: mongoose.Types.ObjectId;
    orderNumber: string;
    amount: number;
    currency: string;
    gbpAmount: number;
    tokens: number;
    description: string;
    status: WhitegalloPaymentStatus;
    providerPaymentId?: string;
    providerTransId?: string;
    createdAt: Date;
    updatedAt: Date;
}

const whitegalloPaymentSchema = new Schema<WhitegalloPaymentDocument>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        orderNumber: { type: String, required: true, unique: true, index: true },
        amount: { type: Number, required: true },
        currency: { type: String, required: true },
        gbpAmount: { type: Number, required: true },
        tokens: { type: Number, required: true },
        description: { type: String, required: true },
        status: {
            type: String,
            enum: ["pending", "processing", "paid", "failed", "cancelled"],
            default: "pending",
            index: true,
        },
        providerPaymentId: { type: String },
        providerTransId: { type: String },
    },
    { timestamps: true }
);

export const WhitegalloPayment =
    mongoose.models.WhitegalloPayment ||
    mongoose.model<WhitegalloPaymentDocument>("WhitegalloPayment", whitegalloPaymentSchema);

