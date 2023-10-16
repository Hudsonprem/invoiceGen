const PAGEROLE = [
    {
        name : "Original",
        lable: "Original",
        value: "Original"
    },
    {
        name : "Supplier",
        lable: "Supplier",
        value: "Supplier"
    },
    {
        name : "Transporter",
        lable: "Transporter",
        value: "Transporter"
    }    
]

const GSTLIST = [
    {
        name : 2.5,
        lable: 2.5,
        value: 2.5
    },
    {
        name : 9,
        lable: 9,
        value: 9
    },   
    {
        name : 18,
        lable: 18,
        value: 18
    },
]

// const SGST = 9
// const CGST = 9

const SGST = 2.50
const CGST = 2.50

const STEPS = [
    {
      title: 'Company Address',
      content: 'First-content',
      sno:1
    },
    {
      title: 'Client(Buyer) Address',
      content: 'Second-content',
      sno:2
    },
    {
      title: 'Invoice Information',
      content: 'Last-content',
      sno:3
    },
    {
      title: 'Product Information',
      content: 'Second-content',
      sno:4
    },
    {
      title: 'Extra Information',
      content: 'Last-content',
      sno:5
    }
  ];


  const SampleData1 = {
    "companyProfile": {
        "H_Company_Name": "STARWIN ENTERPRISES",
        "H_Address_1": "No.8 Pilliyar Koil Street",
        "H_Address_2": "Deveraj Nagar, Anakaputhur",
        "H_Address_3": "Chennai-600070",
        "H_GSTIN_UIN": "33AJHPD5000H1ZX",
        "H_State_Name": "Tamil Nadu",
        "H_Code": 33
    },
    "buyerProfile": {
        "B_Company_Name": "JBM AUTO LIMITED - ORAGADAM",
        "B_Address_1": "Plot No: RNS-1 RENAULT NISSAN",
        "B_Address_2": "SUPPLIERS PARK",
        "B_Address_3": "ORAGADAM-603109",
        "B_GSTIN_UIN": "33AAACJ9630N1ZB",
        "B_State_Name": "Tamil Nadu",
        "B_Code": 33
    },
    "extraInfo": {
        "H_Company_Pan": "AJHPD5000H"
    },
    "invoiceInfo": {
        "Invoice_No": 86,
        "Invoice_Dated": "19-jan-2023",
        "Delivery_note": "SUPPLIERS PARK",
        "Mode_payment": "",
        "Suppilers_ref": "SE-86",
        "Other_References": "",
        "Buyers_Order_No": "6500032898",
        "Buyer_Dated": "18-jan-2023",
        "Despatch_Document_No": "",
        "Delivery_Note_Date": "",
        "Despatch_through": "",
        "Destination": "PLANT CODE : 1712",
        "Terms_of_Delivery": "Terms_of_Delivery"
    },
    "productInfo": {
        "products": [
            {
                "Description_of_Goods": "324",
                "HSN_SAC": "324",
                "Quantity": "23",
                "Quantity_Unit": "fd",
                "Rate": "2"
            },
            {
                "Description_of_Goods": "232",
                "HSN_SAC": "43",
                "Quantity": "2",
                "Quantity_Unit": "fd",
                "Rate": "23"
            }
        ]
    },
    "roles": [
      "Supplier",
      "Transporter",
      "office"
    ]
}
const SampleData = {
    "companyProfile": {
        "H_Company_Name": "STARWIN ENTERPRISES",
        "H_Address_1": "No.8 Pilliyar Koil Street",
        "H_Address_2": "Deveraj Nagar, Anakaputhur",
        "H_Address_3": "Chennai-600070",
        "H_GSTIN_UIN": "33AJHPD5000H1ZX",
        "H_State_Name": "Tamil Nadu",
        "H_Code": 33
    },
    "buyerProfile": {
        "B_Company_Name": "JBM AUTO LIMITED",
        "B_Address_1": "Ford Suppliers,Port, No.1 , S.P Koil Street",
        "B_Address_2": "Chengalpettu Taluk",
        "B_Address_3": "Kanchipuram",
        "B_GSTIN_UIN": "33AAACJ9630N1ZB",
        "B_State_Name": "Tamil Nadu",
        "B_Code": 33
    },
    "extraInfo": {
        "H_Company_Pan": "AJHPD5000H"
    },
    "invoiceInfo": {
        "Invoice_No": "89",
        "Invoice_Dated": "28-Jan-2023",
        "Delivery_note": "",
        "Mode_payment": "",
        "Suppilers_ref": "SE-89",
        "Other_References": "",
        "Buyers_Order_No": "6500032401",
        "Buyer_Dated": "1-Oct-2021",
        "Despatch_Document_No": "",
        "Delivery_Note_Date": "",
        "Despatch_through": "",
        "Destination": "",
        "Terms_of_Delivery": ""
    },
    "productInfo": {
        "products": [
            {
                "Description_of_Goods": "18\" JEANS ARM SLEEVES",
                "HSN_SAC": "52094200",
                "Quantity": "200",
                "Quantity_Unit": "pair",
                "Rate": "68.25"
            },
            {
                "Description_of_Goods": "Cotton Apron",
                "HSN_SAC": "6116",
                "Quantity": "90",
                "Quantity_Unit": "Nos",
                "Rate": "35.75"
            }
        ]
    },
    "roles": [
        "Original",
        "Transporter",
        "Supplier"
    ]
}

export {
    PAGEROLE,
    STEPS,
    SampleData,
    CGST,
    SGST,
    GSTLIST
}