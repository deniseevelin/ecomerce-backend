const accountSchema = {
  type: {
    value: "PAYMENT",
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  document: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  birthDate: {
    type: String,
  },
  motherName: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  businessArea: {
    type: Number,
    require: true,
  },
  linesOfBusiness: {
    type: String,
    require: true,
  },
  companyType: {
    type: String,
  },
  legalRepresentative: {
    name: {
      type: String,
    },
    document: {
      type: String,
    },
    birthDate: {
      type: String,
    },
    type: {
      type: String,
    },
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
  bankAccount: {
    bankNumber: {
      type: String,
      require: true,
    },
    agencyNumber: {
      type: String,
      require: true,
    },
    accountNumber: {
      type: String,
      require: true,
    },
    accountComplementNumber: {
      type: String,
    },
    accountType: {
      type: String,
      require: true,
    },
    accountHolder: {
      name: {
        type: String,
        require: true,
      },
      document: {
        type: String,
        require: true,
        unique: true,
      },
    },
  },
  emailOptOut: {
    type: Boolean,
  },
  autoTransfer: {
    type: Boolean,
  },
  socialName: {
    type: Boolean,
  },
  monthlyIncomeOrRevenue: {
    type: Number,
  },
  cnae: {
    type: String,
  },
  establishmentDate: {
    type: String,
  },
  pep: {
    type: Boolean,
  },
  companyMembers: [
    {
      name: {
        type: String,
      },
      document: {
        type: String,
      },
      birthDate: {
        type: String,
      },
    },
  ],
};

module.exports = accountSchema;
