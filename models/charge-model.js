const token = process.env.X_RESOURCE_TOKEN;

const chargeSchema = {
  charge: {
    pixKey: {
      type: String,
    },
    description: {
      type: String,
      require: true,
    },
    references: [{ type: String }],
    totalAmount: {
      type: Number,
    },
    amount: {
      type: Number,
      require: true,
    },
    dueDate: {
      type: String,
    },
    installments: {
      type: Number,
    },
    maxOverdueDays: {
      type: Number,
    },
    fine: {
      type: Number,
    },
    interest: {
      type: Number,
    },
    discountAmount: {
      type: Number,
    },
    discountDays: {
      type: Number,
    },
    paymentTypes: [{ type: String }],
    paymentAdvance: {
      type: Boolean,
      default: false,
    },
    feeSchemaToken: {
      type: String,
    },
    split: [
      {
        recipientToken: {
          type: String,
          value: token,
        },
        percentage: {
          type: Number,
          value: 100
        },
        amountRemainder: {
          type: Boolean,
          default: true,
        },
        chargeFee: {
          type: Boolean,
          default: true,
        },
      },
    ],
  },
  billing: {
    name: {
      type: String,
      require: true,
    },
    document: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    address: {
      street: {
        type: String,
        require: true,
      },
      number: {
        type: String,
        require: true,
      },
      complement: {
        type: String,
      },
      neighborhood: {
        type: String,
      },
      city: {
        type: String,
        require: true,
      },
      state: {
        type: String,
        require: true,
      },
      postCode: {
        type: String,
        require: true,
      },
    },
    secondaryEmail: {
      type: String,
    },
    phone: {
      type: String,
    },
    birthDate: {
      type: String,
    },
    notify: false,
  },
};
