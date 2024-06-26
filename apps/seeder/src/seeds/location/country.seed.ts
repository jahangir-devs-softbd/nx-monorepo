import { DataSource } from "typeorm";
import { CountryEntity } from "@lams/shared/database/entities/location/country.entity";

export class CountrySeeder {
  data: any[] = [
    {
      id: 1,
      name: "আফগানিস্তান",
      name_en: "Afghanistan",
      country_code: "AF",
    },
    {
      id: 2,
      name: "এল্যান্ড দ্বীপপুঞ্জ",
      name_en: "Åland Islands",
      country_code: "AX",
    },
    {
      id: 3,
      name: "আলবেনিয়া",
      name_en: "Albania",
      country_code: "AL",
    },
    {
      id: 4,
      name: "আলজেরিয়া",
      name_en: "Algeria",
      country_code: "DZ",
    },
    {
      id: 5,
      name: "আমেরিকান সামোয়া",
      name_en: "American Samoa",
      country_code: "AS",
    },
    {
      id: 6,
      name: "এন্ডোরা",
      name_en: "Andorra",
      country_code: "AD",
    },
    {
      id: 7,
      name: "অ্যাঙ্গোলা",
      name_en: "Angola",
      country_code: "AO",
    },
    {
      id: 8,
      name: "অ্যাঙ্গুইলা",
      name_en: "Anguilla",
      country_code: "AI",
    },
    {
      id: 9,
      name: "অ্যান্টার্কটিকা",
      name_en: "Antarctica",
      country_code: "AQ",
    },
    {
      id: 10,
      name: "অ্যান্টিগুয়া ও বার্বুডা",
      name_en: "Antigua and Barbuda",
      country_code: "AG",
    },
    {
      id: 11,
      name: "আর্জেন্টিনা",
      name_en: "Argentina",
      country_code: "AR",
    },
    {
      id: 12,
      name: "আর্মেনিয়া",
      name_en: "Armenia",
      country_code: "AM",
    },
    {
      id: 13,
      name: "আরুবা",
      name_en: "Aruba",
      country_code: "AW",
    },
    {
      id: 14,
      name: "অস্ট্রেলিয়া",
      name_en: "Australia",
      country_code: "AU",
    },
    {
      id: 15,
      name: "অস্ট্রিয়া",
      name_en: "Austria",
      country_code: "AT",
    },
    {
      id: 16,
      name: "আজারবাইজান",
      name_en: "Azerbaijan",
      country_code: "AZ",
    },
    {
      id: 17,
      name: "বাহামাস",
      name_en: "Bahamas",
      country_code: "BS",
    },
    {
      id: 18,
      name: "বাহরাইন",
      name_en: "Bahrain",
      country_code: "BH",
    },
    {
      id: 19,
      name: "বাংলাদেশ",
      name_en: "Bangladesh",
      country_code: "BD",
    },
    {
      id: 20,
      name: "বার্বাডোজ",
      name_en: "Barbados",
      country_code: "BB",
    },
    {
      id: 21,
      name: "বেলারুশ",
      name_en: "Belarus",
      country_code: "BY",
    },
    {
      id: 22,
      name: "বেলজিয়াম",
      name_en: "Belgium",
      country_code: "BE",
    },
    {
      id: 23,
      name: "বেলিজ",
      name_en: "Belize",
      country_code: "BZ",
    },
    {
      id: 24,
      name: "বেনিন",
      name_en: "Benin",
      country_code: "BJ",
    },
    {
      id: 25,
      name: "বারমুডা",
      name_en: "Bermuda",
      country_code: "BM",
    },
    {
      id: 26,
      name: "ভুটান",
      name_en: "Bhutan",
      country_code: "BT",
    },
    {
      id: 27,
      name: "বলিভিয়া, প্লুরিনাশনাল স্টেট অফ",
      name_en: "Bolivia, Plurinational State of",
      country_code: "BO",
    },
    {
      id: 28,
      name: "বোনায়ার, সিন্ট ইউস্টাটিয়াস এন্ড সাবা",
      name_en: "Bonaire, Sint Eustatius and Saba",
      country_code: "BQ",
    },
    {
      id: 29,
      name: "বসনিয়া এন্ড হার্জেগোভিনা",
      name_en: "Bosnia and Herzegovina",
      country_code: "BA",
    },
    {
      id: 30,
      name: "বতসোয়ানা",
      name_en: "Botswana",
      country_code: "BW",
    },
    {
      id: 31,
      name: "বুভেট আইল্যান্ড",
      name_en: "Bouvet Island",
      country_code: "BV",
    },
    {
      id: 32,
      name: "ব্রাজিল",
      name_en: "Brazil",
      country_code: "BR",
    },
    {
      id: 33,
      name: "ব্রিটিশ ইন্ডিয়ান ওশান টেরিটোরি",
      name_en: "British Indian Ocean Territory",
      country_code: "IO",
    },
    {
      id: 34,
      name: "ব্রুনাই দারুসসালাম",
      name_en: "Brunei Darussalam",
      country_code: "BN",
    },
    {
      id: 35,
      name: "বুলগেরিয়া",
      name_en: "Bulgaria",
      country_code: "BG",
    },
    {
      id: 36,
      name: "বুর্কিনা ফাসো",
      name_en: "Burkina Faso",
      country_code: "BF",
    },
    {
      id: 37,
      name: "বুরুন্ডি",
      name_en: "Burundi",
      country_code: "BI",
    },
    {
      id: 38,
      name: "কম্বোডিয়া",
      name_en: "Cambodia",
      country_code: "KH",
    },
    {
      id: 39,
      name: "ক্যামেরুন",
      name_en: "Cameroon",
      country_code: "CM",
    },
    {
      id: 40,
      name: "কানাডা",
      name_en: "Canada",
      country_code: "CA",
    },
    {
      id: 41,
      name: "কেপ ভার্দে",
      name_en: "Cape Verde",
      country_code: "CV",
    },
    {
      id: 42,
      name: "কেম্যান আইল্যান্ড",
      name_en: "Cayman Islands",
      country_code: "KY",
    },
    {
      id: 43,
      name: "সেন্ট্রাল আফ্রিকান রিপাবলিক",
      name_en: "Central African Republic",
      country_code: "CF",
    },
    {
      id: 44,
      name: "চাদ",
      name_en: "Chad",
      country_code: "TD",
    },
    {
      id: 45,
      name: "চিলি",
      name_en: "Chile",
      country_code: "CL",
    },
    {
      id: 46,
      name: "চীন",
      name_en: "China",
      country_code: "CN",
    },
    {
      id: 47,
      name: "ক্রিস্টমাস আইল্যান্ড",
      name_en: "Christmas Island",
      country_code: "CX",
    },
    {
      id: 48,
      name: "কোকোস (কিলিং) আইল্যান্ড",
      name_en: "Cocos (Keeling) Islands",
      country_code: "CC",
    },
    {
      id: 49,
      name: "কলম্বিয়া",
      name_en: "Colombia",
      country_code: "CO",
    },
    {
      id: 50,
      name: "কোমোরোস",
      name_en: "Comoros",
      country_code: "KM",
    },
    {
      id: 51,
      name: "কঙ্গো (ব্রাজাভিল)",
      name_en: "Congo (Brazzaville)",
      country_code: "CG",
    },
    {
      id: 52,
      name: "কঙ্গো (কিনশাসা)",
      name_en: "Congo (Kinshasa)",
      country_code: "CD",
    },
    {
      id: 53,
      name: "কুক আইল্যান্ড",
      name_en: "Cook Islands",
      country_code: "CK",
    },
    {
      id: 54,
      name: "কোস্টারিকা",
      name_en: "Costa Rica",
      country_code: "CR",
    },
    {
      id: 55,
      name: "আইভরি কোট",
      name_en: "Côte d'Ivoire",
      country_code: "CI",
    },
    {
      id: 56,
      name: "ক্রোয়েশিয়া",
      name_en: "Croatia",
      country_code: "HR",
    },
    {
      id: 57,
      name: "কিউবা",
      name_en: "Cuba",
      country_code: "CU",
    },
    {
      id: 58,
      name: "কুরাকাও",
      name_en: "Curaçao",
      country_code: "CW",
    },
    {
      id: 59,
      name: "সাইপ্রাস",
      name_en: "Cyprus",
      country_code: "CY",
    },
    {
      id: 60,
      name: "চেক রিপাবলিক",
      name_en: "Czech Republic",
      country_code: "CZ",
    },
    {
      id: 61,
      name: "ডেনমার্ক",
      name_en: "Denmark",
      country_code: "DK",
    },
    {
      id: 62,
      name: "জিবুতি",
      name_en: "Djibouti",
      country_code: "DJ",
    },
    {
      id: 63,
      name: "ডমিনিকা",
      name_en: "Dominica",
      country_code: "DM",
    },
    {
      id: 64,
      name: "ডোমিনিকান রিপাবলিক",
      name_en: "Dominican Republic",
      country_code: "DO",
    },
    {
      id: 65,
      name: "ইকুয়েডর",
      name_en: "Ecuador",
      country_code: "EC",
    },
    {
      id: 66,
      name: "মিশর",
      name_en: "Egypt",
      country_code: "EG",
    },
    {
      id: 67,
      name: "এল সালভাদর",
      name_en: "El Salvador",
      country_code: "SV",
    },
    {
      id: 68,
      name: "নিরক্ষীয় গিনি",
      name_en: "Equatorial Guinea",
      country_code: "GQ",
    },
    {
      id: 69,
      name: "ইরিত্রিয়া",
      name_en: "Eritrea",
      country_code: "ER",
    },
    {
      id: 70,
      name: "এস্তোনিয়া",
      name_en: "Estonia",
      country_code: "EE",
    },
    {
      id: 71,
      name: "ইথিওপিয়া",
      name_en: "Ethiopia",
      country_code: "ET",
    },
    {
      id: 72,
      name: "ফকল্যান্ড আইল্যান্ড (মালভিনাস)",
      name_en: "Falkland Islands (Malvinas)",
      country_code: "FK",
    },
    {
      id: 73,
      name: "ফারো আইল্যান্ড",
      name_en: "Faroe Islands",
      country_code: "FO",
    },
    {
      id: 74,
      name: "ফিজি",
      name_en: "Fiji",
      country_code: "FJ",
    },
    {
      id: 75,
      name: "ফিনল্যান্ড",
      name_en: "Finland",
      country_code: "FI",
    },
    {
      id: 76,
      name: "ফ্রান্স",
      name_en: "France",
      country_code: "FR",
    },
    {
      id: 77,
      name: "ফ্রেঞ্চ গায়ানা",
      name_en: "French Guiana",
      country_code: "GF",
    },
    {
      id: 78,
      name: "ফ্রেঞ্চ পলিনেশিয়া",
      name_en: "French Polynesia",
      country_code: "PF",
    },
    {
      id: 79,
      name: "ফ্রেঞ্চ সাউদার্ন টেরিটোরিজ",
      name_en: "French Southern Territories",
      country_code: "TF",
    },
    {
      id: 80,
      name: "গ্যাবন",
      name_en: "Gabon",
      country_code: "GA",
    },
    {
      id: 81,
      name: "গাম্বিয়া",
      name_en: "Gambia",
      country_code: "GM",
    },
    {
      id: 82,
      name: "জর্জিয়া",
      name_en: "Georgia",
      country_code: "GE",
    },
    {
      id: 83,
      name: "জার্মানি",
      name_en: "Germany",
      country_code: "DE",
    },
    {
      id: 84,
      name: "ঘানা",
      name_en: "Ghana",
      country_code: "GH",
    },
    {
      id: 85,
      name: "জিব্রাল্টার",
      name_en: "Gibraltar",
      country_code: "GI",
    },
    {
      id: 86,
      name: "গ্রীস",
      name_en: "Greece",
      country_code: "GR",
    },
    {
      id: 87,
      name: "গ্রীনল্যান্ড",
      name_en: "Greenland",
      country_code: "GL",
    },
    {
      id: 88,
      name: "গ্রেনাডা",
      name_en: "Grenada",
      country_code: "GD",
    },
    {
      id: 89,
      name: "গুয়াদেলুপ",
      name_en: "Guadeloupe",
      country_code: "GP",
    },
    {
      id: 90,
      name: "গুয়াম",
      name_en: "Guam",
      country_code: "GU",
    },
    {
      id: 91,
      name: "গুয়াতেমালা",
      name_en: "Guatemala",
      country_code: "GT",
    },
    {
      id: 92,
      name: "গার্নসি",
      name_en: "Guernsey",
      country_code: "GG",
    },
    {
      id: 93,
      name: "গিনি",
      name_en: "Guinea",
      country_code: "GN",
    },
    {
      id: 94,
      name: "গিনি-বিসাউ",
      name_en: "Guinea-Bissau",
      country_code: "GW",
    },
    {
      id: 95,
      name: "গায়ানা",
      name_en: "Guyana",
      country_code: "GY",
    },
    {
      id: 96,
      name: "হাইতি",
      name_en: "Haiti",
      country_code: "HT",
    },
    {
      id: 97,
      name: "হার্ড আইল্যান্ড এন্ড ম্যাকডোনাল্ড ম্যাকডোনাল্ড আইল্যান্ড",
      name_en: "Heard Island and McDonald Mcdonald Islands",
      country_code: "HM",
    },
    {
      id: 98,
      name: "ভ্যাটিকান সিটি",
      name_en: "Vatican City",
      country_code: "VA",
    },
    {
      id: 99,
      name: "হন্ডুরাস",
      name_en: "Honduras",
      country_code: "HN",
    },
    {
      id: 100,
      name: "হংকং",
      name_en: "Hong Kong",
      country_code: "HK",
    },
    {
      id: 101,
      name: "হাঙ্গেরি",
      name_en: "Hungary",
      country_code: "HU",
    },
    {
      id: 102,
      name: "আইসল্যান্ড",
      name_en: "Iceland",
      country_code: "IS",
    },
    {
      id: 103,
      name: "ভারত",
      name_en: "India",
      country_code: "IN",
    },
    {
      id: 104,
      name: "ইন্দোনেশিয়া",
      name_en: "Indonesia",
      country_code: "id",
    },
    {
      id: 105,
      name: "ইরান, ইসলামিক রিপাবলিক অফ",
      name_en: "Iran, Islamic Republic of",
      country_code: "IR",
    },
    {
      id: 106,
      name: "ইরাক",
      name_en: "Iraq",
      country_code: "IQ",
    },
    {
      id: 107,
      name: "ইরাক",
      name_en: "Ireland",
      country_code: "IE",
    },
    {
      id: 108,
      name: "আইল অফ ম্যান",
      name_en: "Isle of Man",
      country_code: "IM",
    },
    {
      id: 109,
      name: "ইজরায়েল",
      name_en: "Israel",
      country_code: "IL",
    },
    {
      id: 110,
      name: "ইতালি",
      name_en: "Italy",
      country_code: "IT",
    },
    {
      id: 111,
      name: "জ্যামাইকা",
      name_en: "Jamaica",
      country_code: "JM",
    },
    {
      id: 112,
      name: "জাপান",
      name_en: "Japan",
      country_code: "JP",
    },
    {
      id: 113,
      name: "জার্সি",
      name_en: "Jersey",
      country_code: "JE",
    },
    {
      id: 114,
      name: "জর্ডান",
      name_en: "Jordan",
      country_code: "JO",
    },
    {
      id: 115,
      name: "কাজাখস্তান",
      name_en: "Kazakhstan",
      country_code: "KZ",
    },
    {
      id: 116,
      name: "কেনিয়া",
      name_en: "Kenya",
      country_code: "KE",
    },
    {
      id: 117,
      name: "কিরিবাতি",
      name_en: "Kiribati",
      country_code: "KI",
    },
    {
      id: 118,
      name: "উত্তর কোরিয়া",
      name_en: "North Korea",
      country_code: "KP",
    },
    {
      id: 119,
      name: "দক্ষিণ কোরিয়া",
      name_en: "South Korea",
      country_code: "KR",
    },
    {
      id: 120,
      name: "কুয়েত",
      name_en: "Kuwait",
      country_code: "KW",
    },
    {
      id: 121,
      name: "কিরগিজস্তান",
      name_en: "Kyrgyzstan",
      country_code: "KG",
    },
    {
      id: 122,
      name: "লাও পিপল'স ডেমোক্রেটিক রিপাবলিক",
      name_en: "Lao People's Democratic Republic",
      country_code: "LA",
    },
    {
      id: 123,
      name: "লাটভিয়া",
      name_en: "Latvia",
      country_code: "LV",
    },
    {
      id: 124,
      name: "লেবানন",
      name_en: "Lebanon",
      country_code: "LB",
    },
    {
      id: 125,
      name: "লেসোথো",
      name_en: "Lesotho",
      country_code: "LS",
    },
    {
      id: 126,
      name: "লাইবেরিয়া",
      name_en: "Liberia",
      country_code: "LR",
    },
    {
      id: 127,
      name: "লিবিয়া",
      name_en: "Libya",
      country_code: "LY",
    },
    {
      id: 128,
      name: "লিচেনস্টাইন",
      name_en: "Liechtenstein",
      country_code: "LI",
    },
    {
      id: 129,
      name: "লিথুয়ানিয়া",
      name_en: "Lithuania",
      country_code: "LT",
    },
    {
      id: 130,
      name: "লুক্সেমবার্গ",
      name_en: "Luxembourg",
      country_code: "LU",
    },
    {
      id: 131,
      name: "ম্যাকাও",
      name_en: "Macao",
      country_code: "MO",
    },
    {
      id: 132,
      name: "ম্যাসেডোনিয়া, দা ফর্মার যুগোস্লাভ রিপাবলিক অফ",
      name_en: "Macedonia, the Former Yugoslav Republic of",
      country_code: "MK",
    },
    {
      id: 133,
      name: "মাদাগাস্কার",
      name_en: "Madagascar",
      country_code: "MG",
    },
    {
      id: 134,
      name: "মালাউই",
      name_en: "Malawi",
      country_code: "MW",
    },
    {
      id: 135,
      name: "মালয়েশিয়া",
      name_en: "Malaysia",
      country_code: "MY",
    },
    {
      id: 136,
      name: "মালদ্বীপ",
      name_en: "Maldives",
      country_code: "MV",
    },
    {
      id: 137,
      name: "মালি",
      name_en: "Mali",
      country_code: "ML",
    },
    {
      id: 138,
      name: "মাল্টা",
      name_en: "Malta",
      country_code: "MT",
    },
    {
      id: 139,
      name: "মার্শাল আইল্যান্ড",
      name_en: "Marshall Islands",
      country_code: "MH",
    },
    {
      id: 140,
      name: "মার্শাল",
      name_en: "Martinique",
      country_code: "MQ",
    },
    {
      id: 141,
      name: "মৌরিতানিয়া",
      name_en: "Mauritania",
      country_code: "MR",
    },
    {
      id: 142,
      name: "মরিশাস",
      name_en: "Mauritius",
      country_code: "MU",
    },
    {
      id: 143,
      name: "মায়োট",
      name_en: "Mayotte",
      country_code: "YT",
    },
    {
      id: 144,
      name: "মেক্সিকো",
      name_en: "Mexico",
      country_code: "MX",
    },
    {
      id: 145,
      name: "মাইক্রোনেশিয়া, ফেডারেটেড স্টেটস অফ",
      name_en: "Micronesia, Federated States of",
      country_code: "FM",
    },
    {
      id: 146,
      name: "মলদোভা, রিপাবলিক অফ",
      name_en: "Moldova, Republic of",
      country_code: "MD",
    },
    {
      id: 147,
      name: "মোনাকো",
      name_en: "Monaco",
      country_code: "MC",
    },
    {
      id: 148,
      name: "মঙ্গোলিয়া",
      name_en: "Mongolia",
      country_code: "MN",
    },
    {
      id: 149,
      name: "মন্টিনিগ্রো",
      name_en: "Montenegro",
      country_code: "ME",
    },
    {
      id: 150,
      name: "মন্টসেরাট",
      name_en: "Montserrat",
      country_code: "MS",
    },
    {
      id: 151,
      name: "মরক্কো",
      name_en: "Morocco",
      country_code: "MA",
    },
    {
      id: 152,
      name: "মোজাম্বিক",
      name_en: "Mozambique",
      country_code: "MZ",
    },
    {
      id: 153,
      name: "মায়ানমার",
      name_en: "Myanmar",
      country_code: "MM",
    },
    {
      id: 154,
      name: "নামিবিয়া",
      name_en: "Namibia",
      country_code: "NA",
    },
    {
      id: 155,
      name: "নাউরু",
      name_en: "Nauru",
      country_code: "NR",
    },
    {
      id: 156,
      name: "নেপাল",
      name_en: "Nepal",
      country_code: "NP",
    },
    {
      id: 157,
      name: "নেদারল্যান্ডস",
      name_en: "Netherlands",
      country_code: "NL",
    },
    {
      id: 158,
      name: "নিউ ক্যালেডোনিয়া",
      name_en: "New Caledonia",
      country_code: "NC",
    },
    {
      id: 159,
      name: "নিউজিল্যান্ড",
      name_en: "New Zealand",
      country_code: "NZ",
    },
    {
      id: 160,
      name: "নিকারাগুয়া",
      name_en: "Nicaragua",
      country_code: "NI",
    },
    {
      id: 161,
      name: "নাইজার",
      name_en: "Niger",
      country_code: "NE",
    },
    {
      id: 162,
      name: "নাইজেরিয়া",
      name_en: "Nigeria",
      country_code: "NG",
    },
    {
      id: 163,
      name: "নিউ",
      name_en: "Niue",
      country_code: "NU",
    },
    {
      id: 164,
      name: "নরফোক আইল্যান্ড",
      name_en: "Norfolk Island",
      country_code: "NF",
    },
    {
      id: 165,
      name: "নর্থেরন মারিয়ানা আইল্যান্ড",
      name_en: "Northern Mariana Islands",
      country_code: "MP",
    },
    {
      id: 166,
      name: "নরওয়ে",
      name_en: "Norway",
      country_code: "NO",
    },
    {
      id: 167,
      name: "ওমান",
      name_en: "Oman",
      country_code: "OM",
    },
    {
      id: 168,
      name: "পাকিস্তান",
      name_en: "Pakistan",
      country_code: "PK",
    },
    {
      id: 169,
      name: "পালাউ",
      name_en: "Palau",
      country_code: "PW",
    },
    {
      id: 170,
      name: "প্যালেস্টাইন, স্টেট অফ",
      name_en: "Palestine, State of",
      country_code: "PS",
    },
    {
      id: 171,
      name: "পানামা",
      name_en: "Panama",
      country_code: "PA",
    },
    {
      id: 172,
      name: "পাপুয়া নিউ গিনি",
      name_en: "Papua New Guinea",
      country_code: "PG",
    },
    {
      id: 173,
      name: "প্যারাগুয়ে",
      name_en: "Paraguay",
      country_code: "PY",
    },
    {
      id: 174,
      name: "পেরু",
      name_en: "Peru",
      country_code: "PE",
    },
    {
      id: 175,
      name: "ফিলিপাইন",
      name_en: "Philippines",
      country_code: "PH",
    },
    {
      id: 176,
      name: "পিটকেয়ার্ন",
      name_en: "Pitcairn",
      country_code: "PN",
    },
    {
      id: 177,
      name: "পোল্যান্ড",
      name_en: "Poland",
      country_code: "PL",
    },
    {
      id: 178,
      name: "পর্তুগাল",
      name_en: "Portugal",
      country_code: "PT",
    },
    {
      id: 179,
      name: "পুয়ের্তো রিকো",
      name_en: "Puerto Rico",
      country_code: "PR",
    },
    {
      id: 180,
      name: "কাতার",
      name_en: "Qatar",
      country_code: "QA",
    },
    {
      id: 181,
      name: "রিইউনিয়ন",
      name_en: "Réunion",
      country_code: "RE",
    },
    {
      id: 182,
      name: "রোমানিয়া",
      name_en: "Romania",
      country_code: "RO",
    },
    {
      id: 183,
      name: "রাশিয়ান ফেডারেশন",
      name_en: "Russian Federation",
      country_code: "RU",
    },
    {
      id: 184,
      name: "রুয়ান্ডা",
      name_en: "Rwanda",
      country_code: "RW",
    },
    {
      id: 185,
      name: "সেন্ট বার্থেলেমি",
      name_en: "Saint Barthélemy",
      country_code: "BL",
    },
    {
      id: 186,
      name: "সেন্ট হেলেনা, অ্যাসেনশন এন্ড ট্রিস্তান দা কুনহা",
      name_en: "Saint Helena, Ascension and Tristan da Cunha",
      country_code: "SH",
    },
    {
      id: 187,
      name: "সেন্ট কিটস এন্ড নেভিস",
      name_en: "Saint Kitts and Nevis",
      country_code: "KN",
    },
    {
      id: 188,
      name: "সেন্ট লুসিয়া",
      name_en: "Saint Lucia",
      country_code: "LC",
    },
    {
      id: 189,
      name: "সেন্ট মার্টিন (ফ্রেঞ্চ পার্ট)",
      name_en: "Saint Martin (French part)",
      country_code: "MF",
    },
    {
      id: 190,
      name: "সেন্ট পিয়ের এন্ড মিকেলন",
      name_en: "Saint Pierre and Miquelon",
      country_code: "PM",
    },
    {
      id: 191,
      name: "সেন্ট ভিনসেন্ট এন্ড দা গ্রেনাডাইন",
      name_en: "Saint Vincent and the Grenadines",
      country_code: "VC",
    },
    {
      id: 192,
      name: "সামোয়া",
      name_en: "Samoa",
      country_code: "WS",
    },
    {
      id: 193,
      name: "সান মারিনো",
      name_en: "San Marino",
      country_code: "SM",
    },
    {
      id: 194,
      name: "সাও টোমে এন্ড প্রিনসিপে",
      name_en: "Sao Tome and Principe",
      country_code: "ST",
    },
    {
      id: 195,
      name: "সৌদি আরব",
      name_en: "Saudi Arabia",
      country_code: "SA",
    },
    {
      id: 196,
      name: "সৌদি আরব",
      name_en: "Senegal",
      country_code: "SN",
    },
    {
      id: 197,
      name: "সার্বিয়া",
      name_en: "Serbia",
      country_code: "RS",
    },
    {
      id: 198,
      name: "সার্বিয়া",
      name_en: "Seychelles",
      country_code: "SC",
    },
    {
      id: 199,
      name: "সিয়েরা লিওন",
      name_en: "Sierra Leone",
      country_code: "SL",
    },
    {
      id: 200,
      name: "সিঙ্গাপুর",
      name_en: "Singapore",
      country_code: "SG",
    },
    {
      id: 201,
      name: "সিন্ট মার্টেন (ডাচ পার্ট)",
      name_en: "Sint Maarten (Dutch part)",
      country_code: "SX",
    },
    {
      id: 202,
      name: "স্লোভাকিয়া",
      name_en: "Slovakia",
      country_code: "SK",
    },
    {
      id: 203,
      name: "স্লোভেনিয়া",
      name_en: "Slovenia",
      country_code: "SI",
    },
    {
      id: 204,
      name: "সলোমান আইল্যান্ড",
      name_en: "Solomon Islands",
      country_code: "SB",
    },
    {
      id: 205,
      name: "সোমালিয়া",
      name_en: "Somalia",
      country_code: "SO",
    },
    {
      id: 206,
      name: "সাউথ আফ্রিকা",
      name_en: "South Africa",
      country_code: "ZA",
    },
    {
      id: 207,
      name: "সাউথ জর্জিয়া এন্ড দা সাউথ স্যান্ডউইচ আইল্যান্ড",
      name_en: "South Georgia and the South Sandwich Islands",
      country_code: "GS",
    },
    {
      id: 208,
      name: "সাউথ সুদান",
      name_en: "South Sudan",
      country_code: "SS",
    },
    {
      id: 209,
      name: "স্পেন",
      name_en: "Spain",
      country_code: "ES",
    },
    {
      id: 210,
      name: "শ্রীলংকা",
      name_en: "Sri Lanka",
      country_code: "LK",
    },
    {
      id: 211,
      name: "সুদান",
      name_en: "Sudan",
      country_code: "SD",
    },
    {
      id: 212,
      name: "সুরিনাম",
      name_en: "Suriname",
      country_code: "SR",
    },
    {
      id: 213,
      name: "স্বালবার্ড এন্ড জান মায়েন",
      name_en: "Svalbard and Jan Mayen",
      country_code: "SJ",
    },
    {
      id: 214,
      name: "সোয়াজিল্যান্ড",
      name_en: "Swaziland",
      country_code: "SZ",
    },
    {
      id: 215,
      name: "সুইডেন",
      name_en: "Sweden",
      country_code: "SE",
    },
    {
      id: 216,
      name: "সুইজারল্যান্ড",
      name_en: "Switzerland",
      country_code: "CH",
    },
    {
      id: 217,
      name: "সিরিয় আরব রিপাবলিক",
      name_en: "Syrian Arab Republic",
      country_code: "SY",
    },
    {
      id: 218,
      name: "তাইওয়ান",
      name_en: "Taiwan",
      country_code: "TW",
    },
    {
      id: 219,
      name: "তাজিকিস্তান",
      name_en: "Tajikistan",
      country_code: "TJ",
    },
    {
      id: 220,
      name: "তানজানিয়া, ইউনাইটেড রিপাবলিক অফ",
      name_en: "Tanzania, United Republic of",
      country_code: "TZ",
    },
    {
      id: 221,
      name: "থাইল্যান্ড",
      name_en: "Thailand",
      country_code: "TH",
    },
    {
      id: 222,
      name: "তিমুর-লেস্তে",
      name_en: "Timor-Leste",
      country_code: "TL",
    },
    {
      id: 223,
      name: "টোগো",
      name_en: "Togo",
      country_code: "TG",
    },
    {
      id: 224,
      name: "টোকেলাউ",
      name_en: "Tokelau",
      country_code: "TK",
    },
    {
      id: 225,
      name: "টোঙ্গা",
      name_en: "Tonga",
      country_code: "TO",
    },
    {
      id: 226,
      name: "ত্রিনিদাদ এন্ড টোবাগো",
      name_en: "Trinidad and Tobago",
      country_code: "TT",
    },
    {
      id: 227,
      name: "তিউনিসিয়া",
      name_en: "Tunisia",
      country_code: "TN",
    },
    {
      id: 228,
      name: "টার্কি",
      name_en: "Turkey",
      country_code: "TR",
    },
    {
      id: 229,
      name: "তুর্কমেনিস্তান",
      name_en: "Turkmenistan",
      country_code: "TM",
    },
    {
      id: 230,
      name: "টার্কস্ এন্ড কেইকোস আইল্যান্ড",
      name_en: "Turks and Caicos Islands",
      country_code: "TC",
    },
    {
      id: 231,
      name: "টুভালু",
      name_en: "Tuvalu",
      country_code: "TV",
    },
    {
      id: 232,
      name: "উগান্ডা",
      name_en: "Uganda",
      country_code: "UG",
    },
    {
      id: 233,
      name: "ইউক্রেন",
      name_en: "Ukraine",
      country_code: "UA",
    },
    {
      id: 234,
      name: "ইউনাইটেড আরব আমিরাত",
      name_en: "United Arab Emirates",
      country_code: "AE",
    },
    {
      id: 235,
      name: "যুক্তরাজ্য",
      name_en: "United Kingdom",
      country_code: "GB",
    },
    {
      id: 236,
      name: "যুক্তরাষ্ট্র",
      name_en: "United States",
      country_code: "US",
    },
    {
      id: 237,
      name: "মার্কিন যুক্তরাষ্ট্র মাইনর অউটলেয়িং আইল্যান্ড",
      name_en: "United States Minor Outlying Islands",
      country_code: "UM",
    },
    {
      id: 238,
      name: "উরুগুয়ে",
      name_en: "Uruguay",
      country_code: "UY",
    },
    {
      id: 239,
      name: "উজবেকিস্তান",
      name_en: "Uzbekistan",
      country_code: "UZ",
    },
    {
      id: 240,
      name: "ভানুয়াতু",
      name_en: "Vanuatu",
      country_code: "VU",
    },
    {
      id: 241,
      name: "ভেনেজুয়েলা, বলিভারিয়ান রিপাবলিক অফ",
      name_en: "Venezuela, Bolivarian Republic of",
      country_code: "VE",
    },
    {
      id: 242,
      name: "ভিয়েতনাম",
      name_en: "Viet Nam",
      country_code: "VN",
    },
    {
      id: 243,
      name: "ভার্জিন আইল্যান্ড (ব্রিটিশ)",
      name_en: "Virgin Islands (British)",
      country_code: "VG",
    },
    {
      id: 244,
      name: "ভার্জিন আইল্যান্ড (ইউ.এস)",
      name_en: "Virgin Islands (U.S)",
      country_code: "VI",
    },
    {
      id: 245,
      name: "ওয়ালিস এন্ড ফুটুনা",
      name_en: "Wallis and Futuna",
      country_code: "WF",
    },
    {
      id: 246,
      name: "ওয়েস্টার্ন সাহারা",
      name_en: "Western Sahara",
      country_code: "EH",
    },
    {
      id: 247,
      name: "ইয়েমেন",
      name_en: "Yemen",
      country_code: "YE",
    },
    {
      id: 248,
      name: "জাম্বিয়া",
      name_en: "Zambia",
      country_code: "ZM",
    },
    {
      id: 249,
      name: "জিম্বাবুয়ে",
      name_en: "Zimbabwe",
      country_code: "ZW",
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(CountryEntity).clear();
    await dataSource.manager.save(CountryEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
