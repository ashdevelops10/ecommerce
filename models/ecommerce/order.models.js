import mongoose from 'mongoose';

const orderItemSchema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: number,
    required: true,
  },
});

const orderSchema = mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    address: {
      type: String,
      required: true,
    },

    orderItems: {
      type: [orderItemSchema],
    },
    status: {
      type: String,
      enum: ['Pending', 'Delivered', 'Pending'],
      default: 'Pending',
    },
  },

  { timestamps: true }
);
export const Order = mongoose.model('Order', orderSchema);
