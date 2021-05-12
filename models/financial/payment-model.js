const paymentSchema = {
  chargeId: {
    type: String,
    require: true,
  },
  billing: {
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    address: {
      street: {
          type: String,
          require: true
      },
      number: {
          type: String,
          require: true
      },
      complement: {
          type: String
      },
      neighborhood: {
          type: String
      },
      city: {
          type: String,
          require: true
      },
      state: {
          type: String,
          require: true
      },
      postCode: {
          type: String,
          require: true
      },
    },
    delayed: true,
  },
  creditCardDetails: {
    creditCardId: {
        type: String
    },
  },
};
