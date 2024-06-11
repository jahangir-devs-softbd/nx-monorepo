import { DataSource } from "typeorm";
import { EducationInstituteEntity } from "@lams/shared/database/entities/user/education-institute.entity";

export class EducationInstituteSeeder {
  data: any[] = [
    {
      id: 1,
      name: "ঢাকা বিশ্ববিদ্যালয়",
      name_en: "University of Dhaka",
    },
    {
      id: 2,
      name: "রাজশাহী বিশ্ববিদ্যালয়",
      name_en: "University of Rajshahi",
    },
    {
      id: 3,
      name: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয়",
      name_en: "Bangladesh Agricultural University",
    },
    {
      id: 4,
      name: "বাংলাদেশ প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Bangladesh University of Engineering & Technology",
    },
    {
      id: 5,
      name: "চট্টগ্রাম বিশ্ববিদ্যালয়",
      name_en: "University of Chittagong",
    },
    {
      id: 6,
      name: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
      name_en: "Jahangirnagar University",
    },
    {
      id: 7,
      name: "ইসলামী বিশ্ববিদ্যালয়, বাংলাদেশ",
      name_en: "Islamic University, Bangladesh",
    },
    {
      id: 8,
      name: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Shahjalal University of Science and Technology",
    },
    {
      id: 9,
      name: "খুলনা বিশ্ববিদ্যালয়",
      name_en: "Khulna University",
    },
    {
      id: 10,
      name: "জাতীয় বিশ্ববিদ্যালয় বাংলাদেশ",
      name_en: "National University Bangladesh",
    },
    {
      id: 11,
      name: "বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয়",
      name_en: "Bangladesh Open University",
    },
    {
      id: 12,
      name: "সামরিক প্রযুক্তি ও বিজ্ঞান প্রতিষ্ঠান",
      name_en: "Military Institute of Science and Technology",
    },
    {
      id: 13,
      name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান কৃষি বিশ্ববিদ্যালয়",
      name_en: "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
    },
    {
      id: 14,
      name: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়",
      name_en: "Bangabandhu Sheikh Mujib Medical University",
    },
    {
      id: 15,
      name: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Hajee Mohammad Danesh Science & Technology University",
    },
    {
      id: 16,
      name: "মৌলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Mawlana Bhashani Science and Technology University",
    },
    {
      id: 17,
      name: "পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Patuakhali Science and Technology University",
    },
    {
      id: 18,
      name: "শের-ই-বাংলা কৃষি বিশ্ববিদ্যালয়",
      name_en: "Sher-e-Bangla Agricultural University",
    },
    {
      id: 19,
      name: "খুলনা প্রযুক্তি ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Khulna University of Engineering & Technology",
    },
    {
      id: 20,
      name: "চট্টগ্রাম প্রযুক্তি ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Chittagong University of Engineering & Technology",
    },
    {
      id: 21,
      name: "রাজশাহী প্রযুক্তি ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Rajshahi University of Engineering & Technology",
    },
    {
      id: 22,
      name: "ঢাকা প্রযুক্তি ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Dhaka University of Engineering & Technology",
    },
    {
      id: 23,
      name: "জগন্নাথ বিশ্ববিদ্যালয়",
      name_en: "Jagannath University",
    },
    {
      id: 24,
      name: "কুমিল্লা বিশ্ববিদ্যালয়",
      name_en: "Comilla University",
    },
    {
      id: 25,
      name: "জাতীয় কবি কাজী নজরুল ইসলাম বিশ্ববিদ্যালয়",
      name_en: "Jatiya Kabi Kazi Nazrul Islam University",
    },
    {
      id: 26,
      name: "নোয়াখালী বিজ্ঞান এবং প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Noakhali Science and Technology University",
    },
    {
      id: 27,
      name: "সিলেট কৃষি বিশ্ববিদ্যালয়",
      name_en: "Sylhet Agricultural University",
    },
    {
      id: 28,
      name: "চট্টগ্রাম প্রাণিসংস্কার ও চিকিৎসা বিজ্ঞান বিশ্ববিদ্যালয়",
      name_en: "Chittagong Veterinary and Animal Sciences University",
    },
    {
      id: 29,
      name: "যশোর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Jashore University of Science and Technology",
    },
    {
      id: 30,
      name: "বেগম রোকেয়া বিশ্ববিদ্যালয়",
      name_en: "Begum Rokeya University",
    },
    {
      id: 31,
      name: "পাবনা বিজ্ঞান এবং প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Pabna University of Science and Technology",
    },
    {
      id: 32,
      name: "বাংলাদেশ পেশাগত বিশ্ববিদ্যালয়",
      name_en: "Bangladesh University of Professionals",
    },
    {
      id: 33,
      name: "বাংলাদেশ টেক্সটাইল বিশ্ববিদ্যালয়",
      name_en: "Bangladesh University of Textiles",
    },
    {
      id: 34,
      name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
    },
    {
      id: 35,
      name: "বরিশাল বিশ্ববিদ্যালয়",
      name_en: "University of Barisal",
    },
    {
      id: 36,
      name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান সমুদ্র বিশ্ববিদ্যালয়",
      name_en: "Bangabandhu Sheikh Mujibur Rahman Maritime University",
    },
    {
      id: 37,
      name: "ইসলামিক আরবি বিশ্ববিদ্যালয়",
      name_en: "Islamic Arabic University",
    },
    {
      id: 38,
      name: "রাঙ্গামাটি বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Rangamati Science and Technology University",
    },
    {
      id: 39,
      name: "রবীন্দ্র বিশ্ববিদ্যালয়, বাংলাদেশ",
      name_en: "Rabindra University, Bangladesh",
    },
    {
      id: 40,
      name: "বঙ্গমতী শেখ ফজিলতুন্নেছা মুজিব বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Bangamata Sheikh Fojilatunnesa Mujib Science & Technology University",
    },
    {
      id: 41,
      name: "চট্টগ্রাম মেডিক্যাল বিশ্ববিদ্যালয়",
      name_en: "Chittagong Medical University",
    },
    {
      id: 42,
      name: "রাজশাহী মেডিক্যাল বিশ্ববিদ্যালয়",
      name_en: "Rajshahi Medical University",
    },
    {
      id: 43,
      name: "সিলেট মেডিক্যাল বিশ্ববিদ্যালয়",
      name_en: "Sylhet Medical University",
    },
    {
      id: 44,
      name: "শেখ হাসিনা বিশ্ববিদ্যালয়",
      name_en: "Sheikh Hasina University",
    },
    {
      id: 45,
      name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান ডিজিটাল বিশ্ববিদ্যালয়",
      name_en: "Bangabandhu Sheikh Mujibur Rahman Digital University",
    },
    {
      id: 46,
      name: "খুলনা কৃষি বিশ্ববিদ্যালয়",
      name_en: "Khulna Agricultural University",
    },
    {
      id: 47,
      name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিমানচলাচল বিশ্ববিদ্যালয়",
      name_en: "Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University",
    },
    {
      id: 48,
      name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিশ্ববিদ্যালয়",
      name_en: "Bangabandhu Sheikh Mujibur Rahman University",
    },
    {
      id: 49,
      name: "হবিগঞ্জ কৃষি বিশ্ববিদ্যালয়",
      name_en: "Habiganj Agricultural University",
    },
    {
      id: 50,
      name: "চাঁদপুর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Chandpur Science and Technology University",
    },
    {
      id: 51,
      name: "শেখ হাসিনা চিকিৎসা বিশ্ববিদ্যালয়",
      name_en: "Sheikh Hasina Medical University",
    },
    {
      id: 52,
      name: "সুনামগঞ্জ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Sunamganj Science and Technology University",
    },
    {
      id: 53,
      name: "বগুড়া বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Bogura Science and Technology University",
    },
    {
      id: 54,
      name: "লক্ষ্মীপুর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Lakshmipur Science and Technology University",
    },
    {
      id: 55,
      name: "কুড়িগ্রাম কৃষি বিশ্ববিদ্যালয়",
      name_en: "Kurigram Agricultural University",
    },
    {
      id: 56,
      name: "মুজিবনগর বিশ্ববিদ্যালয়",
      name_en: "Mujibnagar University",
    },
    {
      id: 57,
      name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিশ্ববিদ্যালয়, নওগাঁ",
      name_en: "Bangabandhu Sheikh Mujibur Rahman University, Naogaon",
    },
    {
      id: 58,
      name: "ঠাকুরগাঁও বিশ্ববিদ্যালয়",
      name_en: "Thakurgaon University",
    },
    {
      id: 59,
      name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়, পিরোজপুর",
      name_en: "Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Pirojpur",
    },
    {
      id: 60,
      name: "সাতখিরা বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Satkhira Science and Technology University",
    },
    {
      id: 61,
      name: "জাতীর জনক বঙ্গবন্ধু শেখ মুজিবুর রহমান বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Jatir Janak Bangabandhu Sheikh Mujibur Rahman Science and Technology University",
    },
    {
      id: 62,
      name: "ডঃ এম এ ওয়াজেদ মিয়া কৃষি বিশ্ববিদ্যালয়",
      name_en: "Dr. M A Wazed Miah Agricultural University",
    },
    {
      id: 63,
      name: "শেখ হাসিনা কৃষি বিশ্ববিদ্যালয়",
      name_en: "Sheikh Hasina Agricultural University",
    },
    {
      id: 64,
      name: "রংপুর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Rangpur University of Science and Technology",
    },
    {
      id: 65,
      name: "বরিশাল মেরিন বিজ্ঞান বিশ্ববিদ্যালয়",
      name_en: "Marine Science University of Barisal",
    },
    {
      id: 66,
      name: "মাইকেল মধুসূদন সাংস্কৃতিক বিশ্ববিদ্যালয়",
      name_en: "Michael Madhusudan Cultural University",
    },
    {
      id: 67,
      name: "ময়মনসিংহ মেডিক্যাল বিশ্ববিদ্যালয়",
      name_en: "Mymensingh Medical University",
    },
    {
      id: 68,
      name: "ময়মনসিংহ প্রযুক্তি ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Mymensingh University of Engineering and Technology",
    },
    {
      id: 69,
      name: "বাংলাদেশ পেশাগত বিশ্ববিদ্যালয়",
      name_en: "Bangladesh University of Juridical Sciences",
    },
    {
      id: 70,
      name: "বাংলাদেশ শিক্ষা পরিকল্পনা ও প্রশাসনিক বিশ্ববিদ্যালয়",
      name_en: "Bangladesh University of Educational Planning and Administration",
    },
    {
      id: 71,
      name: "সিলেট প্রযুক্তি কলেজ",
      name_en: "Sylhet Engineering College",
    },
    {
      id: 72,
      name: "ময়মনসিংহ প্রযুক্তি কলেজ",
      name_en: "Mymensingh Engineering College",
    },
    {
      id: 73,
      name: "ফরিদপুর প্রযুক্তি কলেজ",
      name_en: "Faridpur Engineering College",
    },
    {
      id: 74,
      name: "বরিশাল প্রযুক্তি কলেজ",
      name_en: "Barisal Engineering College",
    },
    {
      id: 75,
      name: "চট্টগ্রাম টেক্সটাইল প্রযুক্তি কলেজ",
      name_en: "Textile Engineering College, Chittagong",
    },
    {
      id: 76,
      name: "পাবনা টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ",
      name_en: "Pabna Textile Engineering College",
    },
    {
      id: 77,
      name: "টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ, নোয়াখালী",
      name_en: "Textile Engineering College, Noakhali",
    },
    {
      id: 78,
      name: "শহীদ আব্দুর রাব সেরনিয়াবাত টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ",
      name_en: "Shahid Abdur Rab Serniabat Textile Engineering College",
    },
    {
      id: 79,
      name: "শেখ কামাল টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ, ঝিনাইদহ",
      name_en: "Sheikh Kamal Textile Engineering College, Jhenaidah",
    },
    {
      id: 80,
      name: "ডঃ এম এ ওয়াজেদ মিয়া টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ",
      name_en: "Dr. M A Wazed Miah Textile Engineering College",
    },
    {
      id: 81,
      name: "শেখ রেহানা টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ, গোপালগঞ্জ",
      name_en: "Sheikh Rehana Textile Engineering College, Gopalganj",
    },
    {
      id: 82,
      name: "শেখ হাসিনা টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ, মেলান্দহা, জামালপুর",
      name_en: "Sheikh Hasina Textile Engineering College, Melandaha, Jamalpur",
    },
    {
      id: 83,
      name: "নর্থ সাউথ বিশ্ববিদ্যালয়",
      name_en: "North South University",
    },
    {
      id: 84,
      name: "ইন্টারন্যাশনাল ইউনিভার্সিটি অব বিজনেস এগ্রিকালচার এন্ড টেকনোলজি",
      name_en: "International University of Business Agriculture and Technology",
    },
    {
      id: 85,
      name: "ইন্ডিপেন্ডেন্ট ইউনিভার্সিটি, বাংলাদেশ",
      name_en: "Independent University, Bangladesh",
    },
    {
      id: 86,
      name: "আমেরিকান ইন্টারন্যাশনাল ইউনিভার্সিটি-বাংলাদেশ",
      name_en: "American International University-Bangladesh",
    },
    {
      id: 87,
      name: "ঢাকা ইন্টারন্যাশনাল ইউনিভার্সিটি",
      name_en: "Dhaka International University",
    },
    {
      id: 88,
      name: "ইন্টারন্যাশনাল ইসলামিক ইউনিভার্সিটি, চট্টগ্রাম",
      name_en: "International Islamic University, Chittagong",
    },
    {
      id: 89,
      name: "এশিয়ান ইউনিভার্সিটি অব বাংলাদেশ",
      name_en: "Asian University of Bangladesh",
    },
    {
      id: 90,
      name: "ইস্ট ওয়েস্ট ইউনিভার্সিটি",
      name_en: "East West University",
    },
    {
      id: 91,
      name: "গণ বিশ্ববিদ্যালয়",
      name_en: "Gono Bishwabidyalay",
    },
    {
      id: 92,
      name: "পিপলস ইউনিভার্সিটি অব বাংলাদেশ",
      name_en: "People's University of Bangladesh",
    },
    {
      id: 93,
      name: "কুইন্স ইউনিভার্সিটি",
      name_en: "Queens University",
    },
    {
      id: 94,
      name: "ইউনিভার্সিটি অব এশিয়া প্যাসিফিক (বাংলাদেশ)",
      name_en: "University of Asia Pacific (Bangladesh)",
    },
    {
      id: 95,
      name: "চট্টগ্রাম ইন্ডিপেন্ডেন্ট ইউনিভার্সিটি (সিআইইউ)",
      name_en: "Chittagong Independent University (CIU)",
    },
    {
      id: 96,
      name: "বাংলাদেশ ইউনিভার্সিটি",
      name_en: "Bangladesh University",
    },
    {
      id: 97,
      name: "বিজিসি ট্রাস্ট ইউনিভার্সিটি বাংলাদেশ",
      name_en: "BGC Trust University Bangladesh",
    },
    {
      id: 98,
      name: "ব্র্যাক ইউনিভার্সিটি",
      name_en: "BRAC University",
    },
    {
      id: 99,
      name: "মানারাত ইন্টারন্যাশনাল ইউনিভার্সিটি",
      name_en: "Manarat International University",
    },
    {
      id: 100,
      name: "প্রিমিয়ার ইউনিভার্সিটি, চট্টগ্রাম",
      name_en: "Premier University, Chittagong",
    },
    {
      id: 101,
      name: "সাউদার্ণ বিশ্ববিদ্যালয়, বাংলাদেশ",
      name_en: "Southern University, Bangladesh",
    },
    {
      id: 102,
      name: "সিলেট আন্তর্জাতিক বিশ্ববিদ্যালয়",
      name_en: "Sylhet International University",
    },
    {
      id: 103,
      name: "উন্নতি বিকল্প বিশ্ববিদ্যালয়",
      name_en: "University of Development Alternative",
    },
    {
      id: 104,
      name: "সিটি বিশ্ববিদ্যালয়, বাংলাদেশ",
      name_en: "City University, Bangladesh",
    },
    {
      id: 105,
      name: "ড্যাফোডিল আন্তর্জাতিক বিশ্ববিদ্যালয়",
      name_en: "Daffodil International University",
    },
    {
      id: 106,
      name: "গ্রীন বিশ্ববিদ্যালয়, বাংলাদেশ",
      name_en: "Green University of Bangladesh",
    },
    {
      id: 107,
      name: "ইবাইস বিশ্ববিদ্যালয়",
      name_en: "IBAIS University",
    },
    {
      id: 108,
      name: "লিডিং বিশ্ববিদ্যালয়",
      name_en: "Leading University",
    },
    {
      id: 109,
      name: "উত্তর বিশ্ববিদ্যালয়, বাংলাদেশ",
      name_en: "Northern University, Bangladesh",
    },
    {
      id: 110,
      name: "প্রাইম বিশ্ববিদ্যালয়",
      name_en: "Prime University",
    },
    {
      id: 111,
      name: "সাউথইস্ট বিশ্ববিদ্যালয়",
      name_en: "Southeast University",
    },
    {
      id: 112,
      name: "স্ট্যামফোর্ড বিশ্ববিদ্যালয় বাংলাদেশ",
      name_en: "Stamford University",
    },
    {
      id: 113,
      name: "রাষ্ট্রীয় বিশ্ববিদ্যালয়, বাংলাদেশ",
      name_en: "State University of Bangladesh",
    },
    {
      id: 114,
      name: "ইস্টার্ণ বিশ্ববিদ্যালয়, বাংলাদেশ",
      name_en: "Eastern University, Bangladesh",
    },
    {
      id: 115,
      name: "মেট্রোপলিটন বিশ্ববিদ্যালয়",
      name_en: "Metropolitan University",
    },
    {
      id: 116,
      name: "মিলেনিয়াম বিশ্ববিদ্যালয়",
      name_en: "Millennium University",
    },
    {
      id: 117,
      name: "প্রাইমাসিয়া বিশ্ববিদ্যালয়",
      name_en: "Primeasia University",
    },
    {
      id: 118,
      name: "রয়াল বিশ্ববিদ্যালয় ঢাকা",
      name_en: "Royal University of Dhaka",
    },
    {
      id: 119,
      name: "ইউনাইটেড ইন্টারন্যাশনাল বিশ্ববিদ্যালয়",
      name_en: "United International University",
    },
    {
      id: 120,
      name: "ইউনিভার্সিটি অফ ইনফরমেশন এন্ড সায়েন্সেস",
      name_en: "University of Information Technology and Sciences",
    },
    {
      id: 121,
      name: "ইউনিভার্সিটি অব সাউথ এশিয়া, বাংলাদেশ",
      name_en: "University of South Asia, Bangladesh",
    },
    {
      id: 122,
      name: "প্রেসিডেন্সি বিশ্ববিদ্যালয়",
      name_en: "Presidency University",
    },
    {
      id: 123,
      name: "উত্তরা বিশ্ববিদ্যালয়",
      name_en: "Uttara University",
    },
    {
      id: 124,
      name: "ভিক্টোরিয়া বিশ্ববিদ্যালয় অব বাংলাদেশ",
      name_en: "Victoria University of Bangladesh",
    },
    {
      id: 125,
      name: "ওয়ার্ল্ড বিশ্ববিদ্যালয় অব বাংলাদেশ",
      name_en: "World University of Bangladesh",
    },
    {
      id: 126,
      name: "আসা ইউনিভার্সিটি বাংলাদেশ",
      name_en: "Asa University Bangladesh",
    },
    {
      id: 127,
      name: "বাংলাদেশ ইসলামী ইউনিভার্সিটি",
      name_en: "Bangladesh Islami University",
    },
    {
      id: 128,
      name: "ইস্ট ডেলটা ইউনিভার্সিটি",
      name_en: "East Delta University",
    },
    {
      id: 129,
      name: "উত্তরের ব্যবসা ও প্রযুক্তি খুলনা ইউনিভার্সিটি",
      name_en: "Northern University of Business and Technology Khulna",
    },
    {
      id: 130,
      name: "ব্রিটানিয়া ইউনিভার্সিটি",
      name_en: "Britannia University",
    },
    {
      id: 131,
      name: "ফেনী বিশ্ববিদ্যালয়",
      name_en: "Feni University",
    },
    {
      id: 132,
      name: "খওয়াজা ইউনুস আলী বিশ্ববিদ্যালয়",
      name_en: "Khwaja Yunus Ali University",
    },
    {
      id: 133,
      name: "ইউরোপীয় ইউনিভার্সিটি অব বাংলাদেশ",
      name_en: "European University of Bangladesh",
    },
    {
      id: 134,
      name: "ফার্স্ট ক্যাপিটাল ইউনিভার্সিটি অফ বাংলাদেশ",
      name_en: "First Capital University Of Bangladesh",
    },
    {
      id: 135,
      name: "বিজিএমইএ ইউনিভার্সিটি অফ ফ্যাশন এবং টেকনোলজি",
      name_en: "BGMEA University of Fashion & Technology",
    },
    {
      id: 136,
      name: "হামদার্ড ইউনিভার্সিটি বাংলাদেশ",
      name_en: "Hamdard University Bangladesh",
    },
    {
      id: 137,
      name: "ইশাখা ইন্টারন্যাশনাল ইউনিভার্সিটি",
      name_en: "Ishakha International University",
    },
    {
      id: 138,
      name: "উত্তর পূর্ব ইউনিভার্সিটি বাংলাদেশ",
      name_en: "North East University Bangladesh",
    },
    {
      id: 139,
      name: "উত্তর পশ্চিম ইউনিভার্সিটি, বাংলাদেশ",
      name_en: "North Western University, Bangladesh",
    },
    {
      id: 140,
      name: "পোর্ট সিটি ইন্টারন্যাশনাল ইউনিভার্সিটি",
      name_en: "Port City International University",
    },
    {
      id: 141,
      name: "ভারেন্দ্র বিশ্ববিদ্যালয়",
      name_en: "Varendra University",
    },
    {
      id: 142,
      name: "সোনারগাঁও বিশ্ববিদ্যালয়",
      name_en: "Sonargaon University",
    },
    {
      id: 143,
      name: "কক্সবাজার ইন্টারন্যাশনাল ইউনিভার্সিটি",
      name_en: "Cox's Bazar International University",
    },
    {
      id: 144,
      name: "ফারিস্ট ইন্টারন্যাশনাল ইউনিভার্সিটি",
      name_en: "Fareast International University",
    },
    {
      id: 145,
      name: "জার্মান ইউনিভার্সিটি বাংলাদেশ",
      name_en: "German University Bangladesh",
    },
    {
      id: 146,
      name: "উত্তর বেঙ্গল ইন্টারন্যাশনাল ইউনিভার্সিটি",
      name_en: "North Bengal International University",
    },
    {
      id: 147,
      name: "নটর ডেম ইউনিভার্সিটি বাংলাদেশ",
      name_en: "Notre Dame University Bangladesh",
    },
    {
      id: 148,
      name: "রানাদা প্রসাদ সাহা ইউনিভার্সিটি",
      name_en: "Ranada Prasad Shaha University",
    },
    {
      id: 149,
      name: "শেখ ফজিলাতুন্নেছা মুজিব ইউনিভার্সিটি",
      name_en: "Sheikh Fazilatunnesa Mujib University",
    },
    {
      id: 150,
      name: "টাইমস ইউনিভার্সিটি বাংলাদেশ",
      name_en: "Times University Bangladesh",
    },
    {
      id: 151,
      name: "কানাডিয়ান বিশ্ববিদ্যালয় অব বাংলাদেশ",
      name_en: "Canadian University of Bangladesh",
    },
    {
      id: 152,
      name: "গ্লোবাল বিশ্ববিদ্যালয় বাংলাদেশ",
      name_en: "Global University Bangladesh",
    },
    {
      id: 153,
      name: "এনপিআই বিশ্ববিদ্যালয় বাংলাদেশ",
      name_en: "NPI University of Bangladesh",
    },
    {
      id: 154,
      name: "রবীন্দ্র মৈত্রী বিশ্ববিদ্যালয়",
      name_en: "Rabindra Maitree University",
    },
    {
      id: 155,
      name: "দ্য ইন্টারন্যাশনাল ইউনিভার্সিটি অব স্কলারস",
      name_en: "The International University of Scholars",
    },
    {
      id: 156,
      name: "চিটাগং সৃজনশীল প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "University of Creative Technology Chittagong",
    },
    {
      id: 157,
      name: "আনওয়ার খান আধুনিক বিশ্ববিদ্যালয়",
      name_en: "Anwer Khan Modern University",
    },
    {
      id: 158,
      name: "ইউনিভার্সিটি অব গ্লোবাল ভিলেজ",
      name_en: "University of Global Village",
    },
    {
      id: 159,
      name: "ট্রাস্ট বিশ্ববিদ্যালয়, বরিশাল",
      name_en: "Trust University, Barishal",
    },
    {
      id: 160,
      name: "ব্রাহ্মণবাড়িয়া বিশ্ববিদ্যালয়",
      name_en: "University of Brahmanbaria",
    },
    {
      id: 161,
      name: "ইউনিভার্সিটি অব স্কিল এনরিচমেন্ট এন্ড টেকনোলজি",
      name_en: "University of Skill Enrichment and Technology",
    },
    {
      id: 162,
      name: "ইন্টারন্যাশনাল স্ট্যান্ডার্ড ইউনিভার্সিটি",
      name_en: "International Standard University",
    },
    {
      id: 163,
      name: "জেডএনআরএফ পরিচালনা ও প্রবন্ধন বিশ্ববিদ্যালয়",
      name_en: "ZNRF University of Management Sciences",
    },
    {
      id: 164,
      name: "বান্দরবান বিশ্ববিদ্যালয়",
      name_en: "Bandarban University",
    },
    {
      id: 165,
      name: "আরটিএম আল-কাবির টেকনিক্যাল বিশ্ববিদ্যালয়",
      name_en: "RTM Al-Kabir Technical University",
    },
    {
      id: 166,
      name: "ইউনিভার্সিটি অব সায়েন্স এন্ড টেকনোলজি চট্টগ্রাম",
      name_en: "University of Science & Technology Chittagong",
    },
    {
      id: 167,
      name: "আহসানুল্লাহ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Ahsanullah University of Science and Technology",
    },
    {
      id: 168,
      name: "পুন্ড্র বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Pundra University of Science and Technology",
    },
    {
      id: 169,
      name: "বাংলাদেশ বিজ্ঞান ও বিষয়শিক্ষা বিশ্ববিদ্যালয়",
      name_en: "Bangladesh University of Business and Technology",
    },
    {
      id: 170,
      name: "আতিশ দীপঙ্কর বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Atish Dipankar University of Science and Technology",
    },
    {
      id: 171,
      name: "জেএইচ সিকদার বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "ZH Sikder University of Science & Technology",
    },
    {
      id: 172,
      name: "রাজশাহী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Rajshahi Science & Technology University",
    },
    {
      id: 173,
      name: "বাংলাদেশ আর্মি আন্তর্জাতিক বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Bangladesh Army International University of Science & Technology",
    },
    {
      id: 174,
      name: "বাংলাদেশ আর্মি প্রযুক্তি এবং বিজ্ঞান বিশ্ববিদ্যালয়",
      name_en: "Bangladesh Army University of Science and Technology",
    },
    {
      id: 175,
      name: "সিসিএন পরিচালনা ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "CCN University of Science & Technology",
    },
    {
      id: 176,
      name: "সেন্ট্রাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Central University of Science and Technology",
    },
    {
      id: 177,
      name: "সেন্ট্রাল ওমেন্স বিশ্ববিদ্যালয়",
      name_en: "Central Women's University",
    },
    {
      id: 178,
      name: "শান্ত-মারিয়াম সৃজনশীল প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Shanto-Mariam University of Creative Technology",
    },
    {
      id: 179,
      name: "ইউনিভার্সিটি অব লিবার্যাল আর্টস বাংলাদেশ",
      name_en: "University of Liberal Arts Bangladesh",
    },
    {
      id: 180,
      name: "বাংলাদেশ স্বাস্থ্য বিজ্ঞান বিশ্ববিদ্যাল",
      name_en: "Bangladesh University of Health Sciences",
    },
    {
      id: 181,
      name: "এক্সিম ব্যাংক কৃষি বিশ্ববিদ্যালয় বাংলাদেশ",
      name_en: "Exim Bank Agricultural University Bangladesh",
    },
    {
      id: 182,
      name: "বাংলাদেশ আর্মি প্রযুক্তি ও প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Bangladesh Army University of Engineering & Technology",
    },
    {
      id: 183,
      name: "টাগোর সৃজনশীল শিল্প বিশ্ববিদ্যালয়",
      name_en: "Tagore University of Creative Arts",
    },
    {
      id: 184,
      name: "ইসলামিক প্রযুক্তি বিশ্ববিদ্যালয়",
      name_en: "Islamic University of Technology",
    },
    {
      id: 185,
      name: "এশিয়ান মহিলা বিশ্ববিদ্যালয় বাংলাদেশ",
      name_en: "Asian University for Women",
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(EducationInstituteEntity).clear();
    await dataSource.manager.save(EducationInstituteEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}
