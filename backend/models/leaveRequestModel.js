import mongoose from "mongoose";

const lrSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        leaveType: {
            type: String,
            enum: ["Sick", "Casual", "Annual"],
        },
        from: {
            type: Date,
            required: true,
        },
        to: {
            type: Date,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        permission: {
            type: String,
            enum: ["Pending", "Approved", "Rejected"],
            default: 'Pending'
        },
    },
    {
        timestamps: true,
    }
);

const LeaveRequest = mongoose.model("LeaveRequest", lrSchema);

export default LeaveRequest;